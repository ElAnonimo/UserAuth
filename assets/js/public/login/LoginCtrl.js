angular.module('LoginMod').controller('LoginCtrl', ['$scope', '$http', 'toastr', function($scope, $http, toastr) {
	console.log('Login Controller Initialized...');
	
	$scope.runLogin = function() {
		console.log('Login submitted...');
		
		$http.put('/login', {
			email: $scope.email,
			password: $scope.password
		})
		.then(function onSuccess() {
			console.log('Login passed!');
			window.location = '/dashboard'
		})
		.catch(function onError(err) {
			if (err.status == 400 || 404) {
				toastr.error('Invalid credentials', 'Error', {
					closeButton: true
				});
				return;
			}
			toastr.error('An error has occured', 'Error', {
				closeButton: true
			});
			return;
		})
	}
}]);