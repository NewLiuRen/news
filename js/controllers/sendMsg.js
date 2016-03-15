define(['app'], function (app) {

    return app.controller('sendMsg', ['$scope', function ($scope) {
        $scope.$on('addEnd', function (event, msg) {
            $scope.$broadcast('res2sendAddEvent', msg);
        });
    }]);

});
