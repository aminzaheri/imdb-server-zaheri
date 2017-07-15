  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../db/repo/UserInfoRepo.js') 
   module.exports.updateInfo = function ( userId , fullName , imageAddress , description ) { 
var original = originalModule.updateInfo; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getInfo = function ( userId ) { 
var original = originalModule.getInfo; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getAllInfos = function ( userIds ) { 
var original = originalModule.getAllInfos; 
 return original. apply( null, arguments); 
  }; 
  
 