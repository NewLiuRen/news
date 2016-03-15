define(['app'], function (app) {

    return app.controller('navController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.navs = $rootScope.navs;

        $scope.selectedNav = $scope.navs[0].content;

        $scope.select = function (nav) {
            $scope.selectedNav = nav.content;
        };

        $scope.$on('res2sendAddEvent', function (event, msg) {
            $scope.select($scope.navs[0]);
        });
    }]);

});
