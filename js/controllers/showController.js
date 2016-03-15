define(['app', 'newfun'], function (app, newfun) {

    return app.controller('showController', ['$scope', '$rootScope', '$routeParams', 'newfun', function ($scope, $rootScope, $routeParams, newfun) {

        $scope.new = newfun.findNew($routeParams.id, $rootScope.newlist);

    }]);

});
