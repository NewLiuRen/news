define(['app'], function (app) {

    return app.controller('listController', ['$scope', '$rootScope',  '$routeParams', function ($scope, $rootScope, $routeParams) {

        var delNew = function (id, arr) {
            var i=0,len=arr.length;
            for (; i<len ; i+=1) {
                if (arr[i].id === id) {
                    return arr.splice(i, 1);
                }
            }
        };

        $scope.showModal = function (news) {
            $scope.list = {
                title : news.title,
                delNews : news
            };

            $('#myModal').modal();
        };

        $scope.delete = function (news) {
            delNew(news.id, $rootScope.newlist);
            $('#myModal').modal('hide');
        };

    }]);

});
