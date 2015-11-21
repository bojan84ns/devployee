var bookings = angular.module('bookings', ['ngRoute']);

bookings.controller('BookingController', function($scope, $http) {
	
	$scope.startDate = {};
	$scope.endDate = {};
	
	$scope.getBookings = function() {
		/*$http.get('api/bookings')
			.success(function(data) {
				$scope.bookings = data;
			})
			.error(function() {
				alert('Something went wrong!');
			});
		*/
		
		$scope.bookings = [{id: 1, start: '01.10.2015', end: '10.10.2015', guests: 3}, 
	                       {id: 2, start: '07.11.2015', end: '09.11.2015', guests: 1}];
	};
	
	$scope.searchBookings = function() {
		$scope.bookings = [{id: 1, start: '01.10.2015', end: '10.10.2015', guests: 3},
						   {id: 2, start: '07.11.2015', end: '09.11.2015', guests: 1},
						   {id: 3, start: '19.09.2015', end: '28.09.2015', guests: 2},
						   {id: 4, start: '30.11.2015', end: '05.12.2015', guests: 5}];
	};
});

bookings.config([ '$routeProvider', function($routeProvider) {
	
	$routeProvider
		.when('/', { 
			templateUrl : 'home.html'
		})
		.when('/bookings', {
			templateUrl : 'bookings.html',
			controller : 'BookingController'
		});
}]);