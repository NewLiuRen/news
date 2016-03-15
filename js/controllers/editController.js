define(['app', 'newfun'], function (app, newfun) {

    return app.controller('editController', ['$scope', '$rootScope', '$routeParams', '$location', 'newfun', function ($scope, $rootScope, $routeParams, $location, newfun) {
        var news = newfun.findNew($routeParams.id, $rootScope.newlist);

        $scope.new = news;

        $scope.edit = function () {
            news.date = new Date().getTime();
            $location.path('#/');
        };
    }]);

});
