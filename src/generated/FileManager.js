  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../services/FileManager.js') 
   module.exports.addImageFile = function ( userId , imagePath ) { 
var original = originalModule.addImageFile; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"userId\",\"imagePath\",\"CdnControl\"],\"autoWiredModules\":{\"CdnControl\":{\"moduleName\":\"CdnControl\",\"moduleAddress\":\"../generated/CdnControl.js\"}}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.removeImageFile = function ( userId , imagePath ) { 
var original = originalModule.removeImageFile; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"userId\",\"imagePath\",\"CdnControl\"],\"autoWiredModules\":{\"CdnControl\":{\"moduleName\":\"CdnControl\",\"moduleAddress\":\"../generated/CdnControl.js\"}}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.getImagePath = function ( userId ) { 
var original = originalModule.getImagePath; 
 return original. apply( null, arguments); 
  }; 
   module.exports.isLink = function ( address ) { 
var original = originalModule.isLink; 
 return original. apply( null, arguments); 
  }; 
   module.exports.convertToLink = function ( address ) { 
var original = originalModule.convertToLink; 
 return original. apply( null, arguments); 
  }; 
   module.exports.convertToFileAddress = function ( address ) { 
var original = originalModule.convertToFileAddress; 
 return original. apply( null, arguments); 
  }; 
  
 