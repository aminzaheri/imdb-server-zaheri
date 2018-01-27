
/**
 * Created by mohammadjavad on 5/28/2016.
 */
'use strict';
//TODO add support for is in favorite

const Promisify = require("../util/Promisify");
const Movie = require("../db/data/Movie");
const Category = require("../db/data/Category");
const SlideShow = require("../db/data/SlideShow");
const MovieRepo = require("../db/repo/MovieRepo");
const config = require("../config");

exports.addMovie = function (Backtory, UserInfoRepo, ErrorCodes, MergeObject, requestData) {

    let movie = {
        "name": requestData.name.value(),
        "director": requestData.director.value(),
        "production": requestData.production.value(),
        "writer": requestData.writer.value(),
        "actors": requestData.actors.value(),
        "country": requestData.country.value(),
        "genre": requestData.genre.value(),
        "box_office": requestData.box_office.value(),
        "runtime": requestData.runtime.value(),
        "date": requestData.date.value(),
        "link1": requestData.link1.value(),
        "link2": requestData.link2.value(),
        "link3": requestData.link3.value(),
        "subtitle": requestData.subtitle.value(),
        "imdb": requestData.imdb.value(),
        "comment": requestData.comment.value(),
        "image": requestData.image.value(),
    };
    let savedMovie = undefined;    
        let movieInfo = new Movie();
        let categoryInfo = new Category();
        movieInfo.setId(movie['movieId']);
        movieInfo.setName(requestData.name.value());
        movieInfo.setDirector(requestData.director.value());
        movieInfo.setProduction(requestData.production.value());
        movieInfo.setWriter(requestData.writer.value());
        movieInfo.setActors(requestData.actors.value());
        movieInfo.setCountry(requestData.country.value());
        movieInfo.setGenre(requestData.genre.value());
        movieInfo.setLink1(requestData.link1.value());
        movieInfo.setLink2(requestData.link2.value());
        movieInfo.setLink3(requestData.link3.value());
        movieInfo.setImdb(requestData.imdb.value());
        movieInfo.setSubtitle(requestData.subtitle.value());
        movieInfo.setBoxOffice(requestData.box_office.value());
        movieInfo.setRuntime(requestData.runtime.value());
        movieInfo.setReleaseDate(requestData.date.value());
        movieInfo.setPlot(requestData.comment.value());        
        movieInfo.setPoster(config.baseUrl+requestData.image.value());

        let promise = Promisify.wrapWithThis(movieInfo.save, movieInfo);

        return promise.then(function(){
            let query = new Backtory.Query(Category);
            query.contains("categoryName", requestData.genre.value());
            query.descending(Category.Col.CreationDate);            
            query.skip(0);
            query.limit(1);
            return Promisify.wrapWithThis(query.find, query);
        }).then(function(resultCategory){
            resultCategory.forEach(function(item){
                item.setCount(item.getCount()+1);                
                return Promisify.wrapWithThis(item.save, item);
            });             
            
        });
};


exports.editMovie = function (Backtory, UserInfoRepo, ErrorCodes, MergeObject, requestData) {

    let movie = {
        "name": requestData.name.value(),
        "director": requestData.director.value(),
        "production": requestData.production.value(),
        "writer": requestData.writer.value(),
        "actors": requestData.actors.value(),
        "country": requestData.country.value(),
        "genre": requestData.genre.value(),
        "box_office": requestData.box_office.value(),
        "runtime": requestData.runtime.value(),
        "date": requestData.date.value(),
        "link1": requestData.link1.value(),
        "link2": requestData.link2.value(),
        "link3": requestData.link3.value(),
        "subtitle": requestData.subtitle.value(),
        "imdb": requestData.imdb.value(),
        "comment": requestData.comment.value(),
        "image": requestData.image.value(),
    };
    let savedMovie = undefined;
    //let promise = Promisify.wrap(Backtory.Users.signUp, user);
    //return promise.then(function (movie) {
    //return function (movie) {
        let movieInfo = new Movie();
        movieInfo.setId(requestData.id.value());
        movieInfo.setName(requestData.name.value());
        movieInfo.setDirector(requestData.director.value());
        movieInfo.setProduction(requestData.production.value());
        movieInfo.setWriter(requestData.writer.value());
        movieInfo.setActors(requestData.actors.value());
        movieInfo.setCountry(requestData.country.value());
        movieInfo.setGenre(requestData.genre.value());
        movieInfo.setLink1(requestData.link1.value());
        movieInfo.setLink2(requestData.link2.value());
        movieInfo.setLink3(requestData.link3.value());
        movieInfo.setImdb(requestData.imdb.value());
        movieInfo.setSubtitle(requestData.subtitle.value());
        movieInfo.setBoxOffice(requestData.box_office.value());
        movieInfo.setRuntime(requestData.runtime.value());
        movieInfo.setReleaseDate(requestData.date.value());
        movieInfo.setPlot(requestData.comment.value());
        //movieInfo.setPoster(DefaultUserProfilePic + user['movieId']);
        movieInfo.setPoster(requestData.image.value());

        console.log(config.baseUrl);
        
        return Promisify.wrapWithThis(movieInfo.save, movieInfo);
    //};//.then(function (saveResponse) {
        //savedMovie = saveResponse;
        //return loginInternal(saveResponse.getEmail(), requestData.password.value());
    //}).then(function (loginResult) {
      //  return MergeObject({
        //    userId: savedUser.getId(),
          //  email: savedUser.getEmail()
        //}, loginResult)
    //});
};


exports.deleteMovie = function (Backtory, UserInfoRepo, ErrorCodes, MergeObject, requestData) {
    
    let savedMovie = undefined;    
                    

    return MovieRepo.getMovieById(requestData.id.value()).then(function(movie){
        let query = new Backtory.Query(Category);
        query.contains("categoryName", movie.getGenre());
        query.descending(Category.Col.CreationDate);            
        query.skip(0);
        query.limit(1);
        return Promisify.wrapWithThis(query.find, query);
    }).then(function(resultCategory){
        resultCategory.forEach(function(item){
                item.setCount(item.getCount()-1);            
                return Promisify.wrapWithThis(item.save, item);                
            });
            }).then(function(){
                let movieInfo = new Movie();
                movieInfo.setId(requestData.id.value());
                return Promisify.wrapWithThis(movieInfo.destroy, movieInfo);
            });                        
    
    /*}).then(function(){
        let promise = Promisify.wrapWithThis(movieInfo.destroy, movieInfo);

    return promise.then(function(){
        let query = new Backtory.Query(Category);
        query.contains("categoryName", categoryName);
        query.descending(Category.Col.CreationDate);            
        query.skip(0);
        query.limit(1);
        return Promisify.wrapWithThis(query.find, query);
        }).then(function(resultCategory){
            resultCategory.forEach(function(item){
                item.setCount(item.getCount()-1);                
                return Promisify.wrapWithThis(item.save, item);
            });                
            
        });
});*/
};


exports.addCategory = function (Backtory, UserInfoRepo, ErrorCodes, MergeObject, requestData) {
    
    let savedCategory = undefined;    
        let categoryInfo = new Category();        
        categoryInfo.setCategoryName(requestData.categoryName.value());        
        
        return Promisify.wrapWithThis(categoryInfo.save, categoryInfo);    
};

exports.editCategory = function (Backtory, UserInfoRepo, ErrorCodes, MergeObject, requestData) {
    
    let savedCategory = undefined;
        let categoryInfo = new Category();
        categoryInfo.setId(requestData.id.value());
        categoryInfo.setCategoryName(requestData.categoryName.value());        
        
        return Promisify.wrapWithThis(categoryInfo.save, categoryInfo);    
};

exports.deleteCategory = function (Backtory, UserInfoRepo, ErrorCodes, MergeObject, requestData) {
    
    let savedCategory = undefined;    
        let categoryInfo = new Category();
        categoryInfo.setId(requestData.id.value());                
        
        return Promisify.wrapWithThis(categoryInfo.destroy, categoryInfo);    
};


/**
 * @AutoWired()
 * @Controller()
 * @Post("movieList")
 * @RequestType("PaginationRequest")
 * @ResponseType("MovieListItemResponseList")
 * @LoginRequired()
 * @Pagination()
 * @ActiveUser()
 */
exports.getMovieList = function (activeUser, userSkip, userLimit, MovieRepo, MovieResponseHelper) {
    let userId = activeUser.userId;
    return MovieRepo.addAllMoviesToDbIfNeeded().then(function(result){
        return MovieRepo.getMovies(userSkip, userLimit)
    }).then(function(list){
        return MovieResponseHelper.makeMovieResponseList(list, userId);
    });
};

exports.getCategoryList = function (activeUser, userSkip, userLimit, MovieRepo, MovieResponseHelper) {
    let userId = activeUser.userId;
        return MovieRepo.getCategories(userSkip, userLimit)
    .then(function(list){        
        return MovieResponseHelper.makeCategoryResponseList(list, userId);        
    });
};

exports.getMoviesListByName = function (requestData, activeUser, MovieRepo, MovieResponseHelper) {    
    let name = requestData.name.value();
    let skip = requestData.skip.value();
    let limit = requestData.limit.value();
    let userId = activeUser.userId;    
        return MovieRepo.getMoviesByName(name,skip,limit)
    .then(function(list){        
        return MovieResponseHelper.makeMovieResponseList(list, userId);
    });
};

exports.getMoviesListByImdb = function (requestData, activeUser, MovieRepo, MovieResponseHelper) {    
    let imdb = requestData.imdb.value();
    let skip = requestData.skip.value();
    let limit = requestData.limit.value();
    let userId = activeUser.userId;    
        return MovieRepo.getMoviesByImdb(imdb,skip,limit)
    .then(function(list){        
        return MovieResponseHelper.makeMovieResponseList(list, userId);
    });
};

exports.getMovieListByVisit = function (activeUser, userSkip, userLimit, MovieRepo, MovieResponseHelper) {
    let userId = activeUser.userId;
    return MovieRepo.addAllMoviesToDbIfNeeded().then(function(result){
        return MovieRepo.getMoviesByVisit(userSkip, userLimit)
    }).then(function(list){
        return MovieResponseHelper.makeMovieResponseList(list, userId);
    });
};

exports.getCategoryMoviesListByName = function (requestData, activeUser, MovieRepo, MovieResponseHelper) {    
    let name = requestData.categoryName.value();
    let skip = requestData.skip.value();
    let limit = requestData.limit.value();
    let userId = activeUser.userId;
        return MovieRepo.getCategoryMoviesByName(name,skip,limit)
    .then(function(list){        
        return MovieResponseHelper.makeMovieResponseList(list, userId);
    });
};


/**
 * @AutoWired()
 * @Controller()
 * @Post("getMovie")
 * @RequestType("IdRequest")
 * @ResponseType("MovieFullResponse")
 * @LoginRequired()
 * @ActiveUser()
 */
exports.getMovieDetails = function (requestData, activeUser, MovieRepo, MovieResponseHelper) {
    let movieId = requestData.id.value();
    let userId = activeUser.userId;
    let movieInfo = new Movie
    return MovieRepo.getMovieById(movieId).then(function(movie){
        movieInfo = movie;
        movie.setVisit(movie.getVisit() + 1);
        return Promisify.wrapWithThis(movie.save, movie);
    }).then(function(){
        return MovieResponseHelper.makeFullMovieResponse(movieInfo, userId);
    });
};

exports.getSlideShowList = function (requestData, activeUser, MovieRepo, MovieResponseHelper) {
    let id = requestData.id.value();
    let userId = activeUser.userId;
    return MovieRepo.getSlideShow(id).then(function(slideShow){        
        return MovieResponseHelper.makeSlideShowResponse(slideShow, userId);
    });
};
exports.editSlideShow = function (Backtory, UserInfoRepo, ErrorCodes, MergeObject, requestData) {
    
    let savedSlideShow = undefined;
        let slideShow = new SlideShow();
        slideShow.setId(requestData.id.value());
        slideShow.setImage1(requestData.image1.value());
        slideShow.setImage2(requestData.image2.value());
        slideShow.setImage3(requestData.image3.value());
        slideShow.setImage4(requestData.image4.value());
        
        return Promisify.wrapWithThis(slideShow.save, slideShow);    
};