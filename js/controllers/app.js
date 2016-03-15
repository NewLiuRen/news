define(['angular'], function (angular) {

    var app = angular.module('app', ['ngRoute']);

    app.run(['$rootScope', '$http', function ($rootScope, $http) {
        $http.get('./json/newlist.json').success(function (data) {
            $rootScope.newlist = data;
        });
        $http.get('./json/nav.json').success(function (data) {
            $rootScope.navs = data;
        });
    }]);

    return app;

});
