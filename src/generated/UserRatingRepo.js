  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../db/repo/UserRatingRepo.js') 
   module.exports.addRating = function ( userId , movieId , rate , text ) { 
var original = originalModule.addRating; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"userId\",\"movieId\",\"rate\",\"text\",\"MovieRepo\"],\"autoWiredModules\":{\"MovieRepo\":{\"moduleName\":\"MovieRepo\",\"moduleAddress\":\"../generated/MovieRepo.js\"}}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.getMovieRating = function ( movieId , skip , limit ) { 
var original = originalModule.getMovieRating; 
 return original. apply( null, arguments); 
  }; 
   module.exports.createTestField = function ( movie ) { 
var original = originalModule.createTestField; 
 return original. apply( null, arguments); 
  }; 
  
 