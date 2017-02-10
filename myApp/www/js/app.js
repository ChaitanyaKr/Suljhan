angular.module('myApp', ['ionic', 'myApp.controllers','backand','myApp.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			  if (ionic.Platform.isAndroid()) {
      				StatusBar.backgroundColorByHexString("#886aea");
    				} 
			else {
      				StatusBar.styleLightContent();
    				}
		}
	});
})


	//This is done to whitelist the domains you're accessing. Caused by a new security policy introduced to make XSS harder
	// See http://stackoverflow.com/questions/21292114/external-resource-not-being-loaded-by-angularjs
.config(function($sceDelegateProvider) 
{
	$sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
})

  /*Update Angular configuration section
  Backand uses OAuth2 authentication, which requires that you include the authentication token in every HTTP call*/
.config(function(BackandProvider){
	BackandProvider.setAppName('suljhan');
    BackandProvider.setSignUpToken('00bc70b8-58c9-48d5-b22c-59262b3e38b3');
    BackandProvider.setAnonymousToken('def68616-fb10-4ed3-ac06-71ed3071b8f0');
})

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'templates/sidebar.html',
			controller: 'AppCtrl'
		})

		.state('app.home', {
			url: '/home',
			views: {
				'mainContent': {
					templateUrl: 'templates/home.html',
					controller: 'HomeController'
				}
			}
		})


		.state('app.aboutus', {
			url: '/aboutus',
			views: {
				'mainContent': {
					templateUrl: 'templates/about.html',
					controller: 'AboutController'
				}
			}
		})
  
		.state('app.help', {
			url: '/help',
			views: {
				'mainContent': {
					templateUrl: 'templates/help.html',
					controller: 'HelplineController'
				}
			}
		})

		.state('app.courseList', {
			url: '/courseList',
			views: {
				'mainContent': {
					templateUrl: 'templates/courseList.html',
					controller: 'courseListController'
				}
			}
		})

		.state('app.lectures',{
			url:'/courseList/:id',
			views:{
				'mainContent':{
					templateUrl: 'templates/lectures.html',
					controller: 'lectureListController'
				}
			}
		})

		.state('app.quizzes', {
			url: '/quizList/:id',
			views: {
				'mainContent': {
					templateUrl: 'templates/quiz.html',
					controller: 'quizController'
				}
			}
		})
		.state('app.quizList', {
			url: '/quizList',
			views: {
				'mainContent': {
					templateUrl: 'templates/quizList.html',
					controller: 'quizListController'
				}
			}
		})


		.state('app.lawsCatalog',{
			url: '/lawList',
			views: {
				'mainContent':{
					templateUrl: 'templates/lawList.html',
					controller:'lawListController'
				}
			}
		})

		.state('app.legal',{
			url: '/legal',
			views: {
				'mainContent':{
					templateUrl: 'templates/legal.html',
					controller:'legalController'
				}
			}
		})

		.state('app.rights',{
			url: '/rightList',
			views: {
				'mainContent':{
					templateUrl: 'templates/rightList.html',
					controller:'rightListController'
				}
			}
		})

		.state('app.hygieneCatalog',{
			url: '/hygieneList',
			views: {
				'mainContent':{
					templateUrl: 'templates/hygieneList.html',
					controller:'hygieneListController'
				}
			}
		})

		.state('app.faqs',{
			url: '/faqs',
			views: {
				'mainContent':{
					templateUrl: 'templates/FAQs.html',
					controller:'faqController'
				}
			}
		})

		.state('app.diseaseList',{
			url: '/diseaseList',
			views: {
				'mainContent':{
					templateUrl: 'templates/diseaseList.html',
					controller:'diseaseListController'
				}
			}
		})

		.state('app.schemesCatalog',{
			url:'/schemeList',
			views:{
				'mainContent':{
					templateUrl: 'templates/schemeList.html',
					controller: 'schemeListController'
				}
			}
  		})
  	;

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');

});
