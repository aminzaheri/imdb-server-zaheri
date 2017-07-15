  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../controllers/indexController.js') 
   module.exports.hello = function ( requestBody , context ) { 
var original = originalModule.hello; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "loginRequired", "{\"indexes\":{\"context\":1},\"ignoreIndexes\":[1]}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "activeUser", "{\"parameterData\":{\"indexes\":{\"context\":0},\"ignoreIndexes\":[]},\"activeIndex\":0}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[1],\"responseType\":\"../reqAndRes/responses/general/FailedSuccessResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.info = function ( requestBody , context ) { 
var original = originalModule.info; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"AppInfo\"],\"autoWiredModules\":{\"AppInfo\":{\"moduleAddress\":\"../generated/AppInfoProvider.js\",\"functionName\":\"backtory\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[],\"responseType\":\"../reqAndRes/responses/general/AppInfoResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
  
 