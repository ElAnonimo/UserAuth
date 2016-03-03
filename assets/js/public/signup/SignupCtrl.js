angular.module('SignupMod').controller('SignupCtrl', ['$scope', '$http', function($scope, $http) {
	console.log('Signup Controller Initialized...');
	
	$scope.runSignup = function() {
		console.log('Signing up ' + $scope.name);
		
		// Submit a user to Sails server
		$http.post('/signup', {
			name: $scope.name,
			email: $scope.email,
			password: $scope.password
		})
		.then(function onSuccess(response) {
			window.location = '/user'
		})
		.catch(function onError(err) {
			console.log('Error: ' + err);
		})
		.finally(function either() {
			
		})
	}
}]);