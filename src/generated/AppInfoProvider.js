  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../provider/AppInfoProvider.js') 
   module.exports.backtory = function () { 
var original = originalModule.backtory; 
 return original. apply( null, arguments); 
  }; 
  
 