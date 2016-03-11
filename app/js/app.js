'use strict';

var app = angular.module('bookApp',[
	'ui.router',
	]);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/booklist');

	$stateProvider
	.state('bookList',{
		url:'/booklist',
		controller:'bookCtrl as ctrl',
		templateUrl:'../partials/bookList.html',

		resolve: {
			books: function(BookSrv){
				return BookSrv.getbooks();
			}
		}
	});

	$stateProvider
	.state('bookDetails',{
		url:'/bookDetails/:bookId',
		controller:'detailsCtrl as ctrl',
		templateUrl:'../partials/bookDetails.html'
	})


});

