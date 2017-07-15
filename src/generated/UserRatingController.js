  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../controllers/UserRatingController.js') 
   module.exports.addReview = function ( requestBody , context ) { 
var original = originalModule.addReview; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"requestData\",\"activeUser\",\"MovieRepo\",\"UserRatingRepo\"],\"autoWiredModules\":{\"MovieRepo\":{\"moduleName\":\"MovieRepo\",\"moduleAddress\":\"../generated/MovieRepo.js\"},\"UserRatingRepo\":{\"moduleName\":\"UserRatingRepo\",\"moduleAddress\":\"../generated/UserRatingRepo.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "loginRequired", "{\"indexes\":{\"context\":2},\"ignoreIndexes\":[2]}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "activeUser", "{\"parameterData\":{\"indexes\":{\"context\":1},\"ignoreIndexes\":[]},\"activeIndex\":1}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1,1],\"requestType\":\"../reqAndRes/requests/AddRatingRequest.js\",\"responseType\":\"../reqAndRes/responses/general/FailedSuccessResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.getRates = function ( requestBody , context ) { 
var original = originalModule.getRates; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"requestData\",\"userSkip\",\"userLimit\",\"UserInfoRepo\",\"UserRatingRepo\",\"UserRatingResponse\"],\"autoWiredModules\":{\"UserInfoRepo\":{\"moduleName\":\"UserInfoRepo\",\"moduleAddress\":\"../generated/UserInfoRepo.js\"},\"UserRatingRepo\":{\"moduleName\":\"UserRatingRepo\",\"moduleAddress\":\"../generated/UserRatingRepo.js\"},\"UserRatingResponse\":{\"moduleName\":\"UserRatingResponse\",\"moduleAddress\":\"../reqAndRes/responses/userRating/UserRatingResponse.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "loginRequired", "{\"indexes\":{\"context\":3},\"ignoreIndexes\":[3]}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/PaginationAnnotation_AspectItem_14046.js", "aspect", "{\"skipIndex\":1,\"limitIndex\":1,\"pData\":{\"indexes\":{\"requestBody\":2},\"ignoreIndexes\":[2]}}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1,1,0],\"requestType\":\"../reqAndRes/requests/general/PaginationIdRequest.js\",\"responseType\":\"../reqAndRes/responses/userRating/UserRatingListResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
  
 