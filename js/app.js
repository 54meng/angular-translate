var app = angular.module('myApp', ['pascalprecht.translate'])
	.config(['$translateProvider', function($translateProvider) {
		var lang = window.localStorage.lang || 'cn';
		$translateProvider.preferredLanguage(lang);
		$translateProvider.useStaticFilesLoader({
			prefix: './i18n/',
			suffix: '.json'
		});
	}]);