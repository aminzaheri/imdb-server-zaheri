  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../db/repo/UserFavoriteRepo.js') 
   module.exports.addToFavorite = function ( userId , movieId ) { 
var original = originalModule.addToFavorite; 
 return original. apply( null, arguments); 
  }; 
   module.exports.removeFromFavorite = function ( userId , movieId ) { 
var original = originalModule.removeFromFavorite; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getUserFavoriteItem = function ( userId , movieId ) { 
var original = originalModule.getUserFavoriteItem; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getUserFavoriteItemListById = function ( userId , movieIdList ) { 
var original = originalModule.getUserFavoriteItemListById; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getUserFavoriteItemList = function ( userId , skip , limit ) { 
var original = originalModule.getUserFavoriteItemList; 
 return original. apply( null, arguments); 
  }; 
   module.exports.createTestField = function ( movie ) { 
var original = originalModule.createTestField; 
 return original. apply( null, arguments); 
  }; 
  
 