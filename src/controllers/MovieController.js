
/**
 * Created by mohammadjavad on 5/28/2016.
 */
'use strict';
//TODO add support for is in favorite

const Promisify = require("../util/Promisify");
const Movie = require("../db/data/Movie");

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
        "comment": requestData.comment.value(),
        "image": requestData.image.value()
    };
    let savedMovie = undefined;
    //let promise = Promisify.wrap(Backtory.Users.signUp, user);
    //return promise.then(function (movie) {
    //return function (movie) {
        let movieInfo = new Movie();
        movieInfo.setId(movie['movieId']);
        movieInfo.setName(requestData.name.value());
        movieInfo.setDirector(requestData.director.value());
        movieInfo.setProduction(requestData.production.value());
        movieInfo.setWriter(requestData.writer.value());
        movieInfo.setActors(requestData.actors.value());
        movieInfo.setCountry(requestData.country.value());
        movieInfo.setGenre(requestData.genre.value());
        movieInfo.setBoxOffice(requestData.box_office.value());
        movieInfo.setRuntime(requestData.runtime.value());
        movieInfo.setReleaseDate(requestData.date.value());
        movieInfo.setPlot(requestData.comment.value());
        //movieInfo.setPoster(DefaultUserProfilePic + user['movieId']);
        movieInfo.setPoster(requestData.image.value());

        console.log(requestData.actors.value());
        
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
        //console.log(list);
        return MovieResponseHelper.makeCategoryResponseList(list, userId);
        //return list;
    });
};

exports.getMoviesListByName = function (requestData, activeUser, MovieRepo, MovieResponseHelper) {
    console.log(requestData);
    let name = requestData.name.value();
    let skip = requestData.skip.value();
    let limit = requestData.limit.value();
    let userId = activeUser.userId;
    console.log('amin');
        return MovieRepo.getMoviesByName(name,skip,limit)
    .then(function(list){
        console.log('khoshgel');
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
    return MovieRepo.getMovieById(movieId).then(function(movie){
        return MovieResponseHelper.makeFullMovieResponse(movie, userId);
    });
};