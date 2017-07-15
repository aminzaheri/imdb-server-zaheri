  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../services/CdnControl.js') 
   module.exports.move = function ( file , destinationDir ) { 
var original = originalModule.move; 
 return original. apply( null, arguments); 
  }; 
   module.exports.delete = function ( file ) { 
var original = originalModule.delete; 
 return original. apply( null, arguments); 
  }; 
   module.exports.rename = function ( file , newName ) { 
var original = originalModule.rename; 
 return original. apply( null, arguments); 
  }; 
   module.exports.makeDir = function ( path ) { 
var original = originalModule.makeDir; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getDirInfo = function ( file , pageNumber , pageSize , sortingType ) { 
var original = originalModule.getDirInfo; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getFileInfo = function ( file ) { 
var original = originalModule.getFileInfo; 
 return original. apply( null, arguments); 
  }; 
   module.exports.loginMaster = function () { 
var original = originalModule.loginMaster; 
 return original. apply( null, arguments); 
  }; 
  
 