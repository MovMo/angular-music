;(function (angular) {
	
	// 创建一个模块
	angular
		.module('musicApp', ['ngRoute'])
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/home', {
					controller: 'HomeController',
					templateUrl: './views/home.html'
				})
				.when('/list', {
					controller: 'ListController',
					templateUrl: './views/list.html'
				})
				.when('/item', {
					controller: 'ItemController',
					templateUrl: './views/item.html'
				})
				.otherwise({redirectTo: '/home'})
		}])
	
})(angular);
