define(['app'], function (app) {

    app.directive('realnews', ['$rootScope', function ($rootScope) {
        return {
            restrict : 'A',
            replace : true,
            templateUrl : './js/views/realnews.html',
            link : function (scope, ele, attr) {
                scope.news = $rootScope.newlist;
            }
        };
    }]);

});
