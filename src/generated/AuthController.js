  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../controllers/AuthController.js') 
   module.exports.registerUser = function ( requestBody , context ) { 
var original = originalModule.registerUser; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"Backtory\",\"UserInfoRepo\",\"ErrorCodes\",\"MergeObject\",\"requestData\"],\"autoWiredModules\":{\"Backtory\":{\"moduleAddress\":\"../generated/LibsProvider.js\",\"functionName\":\"backtory\"},\"UserInfoRepo\":{\"moduleName\":\"UserInfoRepo\",\"moduleAddress\":\"../generated/UserInfoRepo.js\"},\"ErrorCodes\":{\"moduleName\":\"ErrorCodes\",\"moduleAddress\":\"../util/ErrorCodes.js\"},\"MergeObject\":{\"moduleName\":\"MergeObject\",\"moduleAddress\":\"../util/MergeObject.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1],\"requestType\":\"../reqAndRes/requests/user/RegisterUserRequest.js\",\"responseType\":\"../reqAndRes/responses/user/RegisterUserResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.login = function ( requestBody , context ) { 
var original = originalModule.login; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"ErrorCodes\",\"requestData\"],\"autoWiredModules\":{\"ErrorCodes\":{\"moduleName\":\"ErrorCodes\",\"moduleAddress\":\"../util/ErrorCodes.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1],\"requestType\":\"../reqAndRes/requests/user/LoginUserRequest.js\",\"responseType\":\"../reqAndRes/responses/user/LoginUserResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.refreshLogin = function ( requestBody , context ) { 
var original = originalModule.refreshLogin; 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1],\"requestType\":\"../reqAndRes/requests/user/RefreshLoginRequest.js\",\"responseType\":\"../reqAndRes/responses/user/LoginUserResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.forgotPassword = function ( requestBody , context ) { 
var original = originalModule.forgotPassword; 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1],\"requestType\":\"../reqAndRes/requests/user/ForgotPasswordRequest.js\",\"responseType\":\"../reqAndRes/responses/general/FailedSuccessResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.editProfile = function ( requestBody , context ) { 
var original = originalModule.editProfile; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"activeUser\",\"requestData\",\"FileManager\",\"UserInfoRepo\",\"FailedSuccessUserInfoResponse\"],\"autoWiredModules\":{\"FileManager\":{\"moduleName\":\"FileManager\",\"moduleAddress\":\"../generated/FileManager.js\"},\"UserInfoRepo\":{\"moduleName\":\"UserInfoRepo\",\"moduleAddress\":\"../generated/UserInfoRepo.js\"},\"FailedSuccessUserInfoResponse\":{\"moduleName\":\"FailedSuccessUserInfoResponse\",\"moduleAddress\":\"../reqAndRes/responses/FailedSuccessUserInfoResponse.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "loginRequired", "{\"indexes\":{\"context\":2},\"ignoreIndexes\":[2]}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "activeUser", "{\"parameterData\":{\"indexes\":{\"context\":1},\"ignoreIndexes\":[]},\"activeIndex\":0}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1,1],\"requestType\":\"../reqAndRes/requests/user/EditProfileRequest.js\",\"responseType\":\"../reqAndRes/responses/FailedSuccessUserInfoResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.getProfile = function ( requestBody , context ) { 
var original = originalModule.getProfile; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"activeUser\",\"UserInfoRepo\",\"FailedSuccessUserInfoResponse\"],\"autoWiredModules\":{\"UserInfoRepo\":{\"moduleName\":\"UserInfoRepo\",\"moduleAddress\":\"../generated/UserInfoRepo.js\"},\"FailedSuccessUserInfoResponse\":{\"moduleName\":\"FailedSuccessUserInfoResponse\",\"moduleAddress\":\"../reqAndRes/responses/FailedSuccessUserInfoResponse.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "loginRequired", "{\"indexes\":{\"context\":1},\"ignoreIndexes\":[1]}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "activeUser", "{\"parameterData\":{\"indexes\":{\"context\":0},\"ignoreIndexes\":[]},\"activeIndex\":0}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[1],\"responseType\":\"../reqAndRes/responses/FailedSuccessUserInfoResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.getUserProfile = function ( requestBody , context ) { 
var original = originalModule.getUserProfile; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"activeUser\",\"requestData\",\"UserInfoRepo\",\"FailedSuccessUserInfoResponse\"],\"autoWiredModules\":{\"UserInfoRepo\":{\"moduleName\":\"UserInfoRepo\",\"moduleAddress\":\"../generated/UserInfoRepo.js\"},\"FailedSuccessUserInfoResponse\":{\"moduleName\":\"FailedSuccessUserInfoResponse\",\"moduleAddress\":\"../reqAndRes/responses/FailedSuccessUserInfoResponse.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "loginRequired", "{\"indexes\":{\"context\":2},\"ignoreIndexes\":[2]}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "activeUser", "{\"parameterData\":{\"indexes\":{\"context\":1},\"ignoreIndexes\":[]},\"activeIndex\":0}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1,1],\"requestType\":\"../reqAndRes/requests/general/IdRequest.js\",\"responseType\":\"../reqAndRes/responses/FailedSuccessUserInfoResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
  
 