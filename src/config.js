let config = {};

config.authInstanceId = "5969d3c3e4b0d93035ae638b";
config.objectSorageInstanceId = "5969d3c4e4b0a69c4974be3a";
config.integratedMasterKey = "140f8891a1224de19fcc9945";
config.clientKey = "5969d3c3e4b0fc0b3ebbc009";
config.cloudCode = "5969d3c4e4b0a69c4974be42";
config.cdnInstanceId = "5969d3c4e4b0a69c4974be3a";

config.baseUrl = "http://storage.backtory.com/imdbZaheri";


config.lambdaHeaders =
    {
        'x-backtory-authentication-id': config.authInstanceId,
        'x-backtory-cache-mode': "No-Cache"
    };
module.exports = config;
