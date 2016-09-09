 ;(function (angular) {
 	// 获取一个已经存在的模块
 	angular
 		.module('musicApp')
 		.controller('ListController', ['$scope', '$http', function ($scope, $http) {
 			// 控制器函数 数据初始化
 			$scope.songs = [{
 				title: '一生中最爱',
 				artist: '谭咏麟',
 				duration: '04:50',
 				imgUrl: '../assets/img/谭咏麟.jpg'
 			}, {
 				title: '一生中最爱',
 				artist: '谭咏麟',
 				duration: '04:50',
 				imgUrl: '../assets/img/谭咏麟.jpg'
 			}, {
 				title: '一生中最爱',
 				artist: '谭咏麟',
 				duration: '04:50',
 				imgUrl: '../assets/img/谭咏麟.jpg'
 			}]
 			
 			$http
 				.jsonp('http://localhost:7480/list?callback=JSON_CALLBACK')
 				.then( res => {
 					$scope.songs = res.data
 				})
 		}])
 })(angular)
