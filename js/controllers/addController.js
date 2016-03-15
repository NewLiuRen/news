define(['app'], function (app) {

    return app.controller('addController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
        $scope.add = function () {
            var thenew = {},
                newlist = $rootScope.newlist;

            thenew.id = (parseInt(newlist[newlist.length-1].id)+1)+'';
            thenew.title = $scope.new.title;
            thenew.content = $scope.new.content;
            thenew.date = new Date().getTime();

            newlist.push(thenew);

            $scope.$emit('addEnd', true);

            $location.path('#/');
        };
    }]);

});
