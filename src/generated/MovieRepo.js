  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../db/repo/MovieRepo.js') 
   module.exports.getMovies = function ( skip , limit ) { 
var original = originalModule.getMovies; 
 return original. apply( null, arguments); 
  }; 
  module.exports.getCategories = function ( skip , limit ) { 
var original = originalModule.getCategories; 
 return original. apply( null, arguments); 
  }; 
  module.exports.getMoviesByName = function ( name ,skip , limit ) { 
var original = originalModule.getMoviesByName; 
 return original. apply( null, arguments); 
  }; 
  module.exports.getMoviesByImdb = function ( imdb ,skip , limit ) { 
var original = originalModule.getMoviesByImdb; 
 return original. apply( null, arguments); 
  };
  module.exports.getMoviesByVisit = function ( skip , limit ) {
var original = originalModule.getMoviesByVisit;
 return original. apply( null, arguments);
  };
  module.exports.getSlideShow = function (id) { 
var original = originalModule.getSlideShow; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getCategoryMoviesByName = function ( categoryName ,skip , limit ) { 
var original = originalModule.getCategoryMoviesByName; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getMovieById = function ( movieId ) { 
var original = originalModule.getMovieById; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getMoviesByListOfId = function ( movieIds ) { 
var original = originalModule.getMoviesByListOfId; 
 return original. apply( null, arguments); 
  }; 
   module.exports.updateMovieRating = function ( movie , starInc , countInc ) { 
var original = originalModule.updateMovieRating; 
 return original. apply( null, arguments); 
  }; 
   module.exports.saveMovie = function ( name , releaseDate , poster , director , writer , production , actors , genre , plot , runtime , country , boxOffice ) { 
var original = originalModule.saveMovie; 
 return original. apply( null, arguments); 
  }; 
   module.exports.addAllMoviesToDbIfNeeded = function () { 
var original = originalModule.addAllMoviesToDbIfNeeded; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"UserFavoriteRepo\",\"UserRatingRepo\"],\"autoWiredModules\":{\"UserFavoriteRepo\":{\"moduleName\":\"UserFavoriteRepo\",\"moduleAddress\":\"../generated/UserFavoriteRepo.js\"},\"UserRatingRepo\":{\"moduleName\":\"UserRatingRepo\",\"moduleAddress\":\"../generated/UserRatingRepo.js\"}}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.addAllMoviesToDb = function () { 
var original = originalModule.addAllMoviesToDb; 
 return original. apply( null, arguments); 
  }; 
  
 