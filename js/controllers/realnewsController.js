define(['app'], function (app) {

    return app.controller('realnewsController', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $scope.news = $rootScope.newlist;
    }]);

});
