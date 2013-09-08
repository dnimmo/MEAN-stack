window.angular.module('ngff.services.global', [])
  .factory('Global', function() {
  	//Login/logout is a synchronous server action, so this service is refreshed every time the authentication state changes - Injecting the 'Global' service into the application gives the app access to the current user
  	var current_user = window.user;
  	//Return an object with methods that indirectly interact with the current_user object
  	return {
  		current_user: function(){
  			return current_user;
  		},
  		isSignedIn: function(){
  			//!! converts current_user to boolean - so global.isSignedIn() will return true if "current_user" exists (i.e. if the user is signed in)
  			return !!current_user;
  		}
  	};
  });