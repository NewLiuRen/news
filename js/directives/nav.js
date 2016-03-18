define(['app'], function (app) {

    app.directive('nav', ['$rootScope', function ($rootScope) {
        return {
            restrict : 'A',
            replace : true,
            templateUrl : './js/views/nav.html',
            link : function (scope, ele, attr) {
                scope.navs = $rootScope.navs;
console.log(scope.navs);
console.log($rootScope.navs);
                scope.selectedNav = scope.navs[0].content;

                scope.select = function (nav) {
                    scope.selectedNav = nav.content;
                };

                scope.$on('res2sendAddEvent', function (event, msg) {
                    scope.select(scope.navs[0]);
                });
            }
        };
    }]);

});
