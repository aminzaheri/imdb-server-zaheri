  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../services/MovieResponseHelper.js') 
   module.exports.makeMovieResponseList = function ( movieList , userId ) { 
var original = originalModule.makeMovieResponseList; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"movieList\",\"userId\",\"UserFavoriteRepo\",\"MovieListItemResponse\"],\"autoWiredModules\":{\"UserFavoriteRepo\":{\"moduleName\":\"UserFavoriteRepo\",\"moduleAddress\":\"../generated/UserFavoriteRepo.js\"},\"MovieListItemResponse\":{\"moduleName\":\"MovieListItemResponse\",\"moduleAddress\":\"../reqAndRes/responses/MovieListItemResponse.js\"}}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.makeFullMovieResponse = function ( movie , userId ) { 
var original = originalModule.makeFullMovieResponse; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"movie\",\"userId\",\"UserFavoriteRepo\",\"MovieFullResponse\"],\"autoWiredModules\":{\"UserFavoriteRepo\":{\"moduleName\":\"UserFavoriteRepo\",\"moduleAddress\":\"../generated/UserFavoriteRepo.js\"},\"MovieFullResponse\":{\"moduleName\":\"MovieFullResponse\",\"moduleAddress\":\"../reqAndRes/responses/MovieFullResponse.js\"}}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.makeUserFavoriteMovieListResponse = function ( userFavoriteList ) { 
var original = originalModule.makeUserFavoriteMovieListResponse; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"userFavoriteList\",\"MovieRepo\",\"UserFavoriteRepo\",\"MovieListItemResponse\"],\"autoWiredModules\":{\"MovieRepo\":{\"moduleName\":\"MovieRepo\",\"moduleAddress\":\"../generated/MovieRepo.js\"},\"UserFavoriteRepo\":{\"moduleName\":\"UserFavoriteRepo\",\"moduleAddress\":\"../generated/UserFavoriteRepo.js\"},\"MovieListItemResponse\":{\"moduleName\":\"MovieListItemResponse\",\"moduleAddress\":\"../reqAndRes/responses/MovieListItemResponse.js\"}}}"); 
 return original. apply( null, arguments); 
  }; 
  
 