  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../controllers/MovieController.js') 
   module.exports.getMovieList = function ( requestBody , context ) { 
var original = originalModule.getMovieList; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"activeUser\",\"userSkip\",\"userLimit\",\"MovieRepo\",\"MovieResponseHelper\"],\"autoWiredModules\":{\"MovieRepo\":{\"moduleName\":\"MovieRepo\",\"moduleAddress\":\"../generated/MovieRepo.js\"},\"MovieResponseHelper\":{\"moduleName\":\"MovieResponseHelper\",\"moduleAddress\":\"../generated/MovieResponseHelper.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "loginRequired", "{\"indexes\":{\"context\":3},\"ignoreIndexes\":[3]}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/PaginationAnnotation_AspectItem_14046.js", "aspect", "{\"skipIndex\":1,\"limitIndex\":1,\"pData\":{\"indexes\":{\"requestBody\":2},\"ignoreIndexes\":[2]}}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "activeUser", "{\"parameterData\":{\"indexes\":{\"context\":0},\"ignoreIndexes\":[]},\"activeIndex\":0}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[1,0],\"requestType\":\"../reqAndRes/requests/general/PaginationRequest.js\",\"responseType\":\"../reqAndRes/responses/MovieListItemResponseList.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.getMovieDetails = function ( requestBody , context ) { 
var original = originalModule.getMovieDetails; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"requestData\",\"activeUser\",\"MovieRepo\",\"MovieResponseHelper\"],\"autoWiredModules\":{\"MovieRepo\":{\"moduleName\":\"MovieRepo\",\"moduleAddress\":\"../generated/MovieRepo.js\"},\"MovieResponseHelper\":{\"moduleName\":\"MovieResponseHelper\",\"moduleAddress\":\"../generated/MovieResponseHelper.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "loginRequired", "{\"indexes\":{\"context\":2},\"ignoreIndexes\":[2]}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "activeUser", "{\"parameterData\":{\"indexes\":{\"context\":1},\"ignoreIndexes\":[]},\"activeIndex\":1}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1,1],\"requestType\":\"../reqAndRes/requests/general/IdRequest.js\",\"responseType\":\"../reqAndRes/responses/MovieFullResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
  
 