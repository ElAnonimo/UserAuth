angular.module('DashMod').controller('DashCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.getUser = function() {
		console.log('Getting User...');
		
		$http.get('/getuser')		// user id comes from the session. No need to get it here
		.then(function onSuccess(user) {
			console.log(user);
			
			$scope.user = user.data;
		})
		.catch(function onError() {
			console.log(err);
		})
	}
}]);