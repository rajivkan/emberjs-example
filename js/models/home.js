define(["jquery"], function($) {
	var user={};
  var setUser = function (data) {
    user.name = data;
  };

  var getUser = function(){
  	return user;
  };

  return {
    setUser: setUser,
    getUser: getUser
  };
});