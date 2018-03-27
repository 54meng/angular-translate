var app = angular.module('MyApp', ['pascalprecht.translate']);

app.config(function($translateProvider) {

	if(!window.localStorage.getItem("lang")) {
		window.localStorage.setItem("lang", navigator.language.toLowerCase() == "en-us" ? "en" : "cn");
	}

	var lang = window.localStorage.getItem("lang");

	$translateProvider.preferredLanguage(lang);

	$translateProvider.useStaticFilesLoader({
		prefix: 'i18n/',
		suffix: '.json'
	});
});

app.controller('mainController', ['$scope', '$filter', '$translate', function($scope, $filter, $translate) {
	$scope.lang = window.localStorage.getItem("lang") == "cn" ? "En" : "zh";

	$scope.togglelang = function() {
		if($translate.use() == "cn") {
			$translate.use("en");
			window.localStorage.setItem("lang", "en");
			$scope.lang = "zh";
		} else {
			$translate.use("cn");
			window.localStorage.setItem("lang", "cn");
			$scope.lang = "En";
		}
	}


}])