define(["Q", "jquery", "bridge/native-services", "models/users"], function (Q, $, nativeServices, users) {

  var callRemoteMethod = function (remoteResource, httpMethod, params) {
    nativeServices.toggleIndicator(true);
    return checkConnectivity().then(function() {
      return serviceEndpoint(remoteResource);
    }).then(function(serviceUrl) {
      return constructRequest(httpMethod, serviceUrl, params);
    }).then(function(request) {
      return makeNetworkCall(request);
    }).fin(function() {
      nativeServices.toggleIndicator(false);
    });
  };

  var makeNetworkCall = function(request) {
    var deferred = Q.defer();
    $.ajax(request).done(function(result) {
      deferred.resolve(result);
    }).fail(function(error) {
      deferred.reject(error);
    });
    return deferred.promise;
  };

  var loggedInUser = function() {
    return users.loggedInUser();
  };

  var constructRequest = function(httpMethod, endPoint, params) {
    return loggedInUser().then(function(user) {
      var request = {url: endPoint, type: httpMethod, data: params};
      if(!user || user.length === 0) return request;
      request.beforeSend = function(xhr) {
          xhr.setRequestHeader('userid', user.userId);
          xhr.setRequestHeader('deviceid', user.deviceId);
          xhr.setRequestHeader('authToken', user.authToken);
      };
      return request;
    });
  };

  var serviceEndpoint = function(remoteResource) {
    return window.globals.config.serviceEndpoint().then(function(endPoint) {
      return endPoint + remoteResource;
    });
  };

  var checkConnectivity = function() {
    return nativeServices.network.isConnected()?Q.resolve():Q.reject({reason: "no network"});
  };

  var get = function (remoteResource, params) {
    return callRemoteMethod(remoteResource, "get", params);
  };

  var post = function (remoteResource, params) {
    return callRemoteMethod(remoteResource, "post", params);
  };

  return {
    get: get,
    post: post
  };
});
