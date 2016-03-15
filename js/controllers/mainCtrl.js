var app = angular.module('app', ['ngRoute']);

app.run(['$rootScope', '$http', function ($rootScope, $http) {
    $http.get('./json/newlist.json').success(function (data) {
        $rootScope.newlist = data;
    });
    $http.get('./json/nav.json').success(function (data) {
        $rootScope.navs = data;
    });
}]);

app.factory('newfun', function () {
    var fun = {
        findNew : function (id, arr) {
            var i=0,len=arr.length;
            for (; i<len ; i+=1) {
                if (arr[i].id === id) {
                    return arr[i];
                }
            }
        }
    };
    return fun;
});

app.controller('listController', ['$scope', '$rootScope',  '$routeParams', function ($scope, $rootScope, $routeParams) {
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

app.controller('showController', ['$scope', '$rootScope', '$routeParams', '$location', 'newfun', function ($scope, $rootScope, $routeParams, $location, newfun) {

    $scope.new = newfun.findNew($routeParams.id, $rootScope.newlist);

}]);

app.controller('editController', ['$scope', '$rootScope', '$routeParams', '$location', 'newfun', function ($scope, $rootScope, $routeParams, $location, newfun) {
    var news = newfun.findNew($routeParams.id, $rootScope.newlist);

    $scope.new = news;

    $scope.edit = function () {
        news.date = new Date().getTime();
        $location.path('#/');
    };
}]);

app.controller('addController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
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

app.controller('sendMsg', ['$scope', function ($scope) {
    $scope.$on('addEnd', function (event, msg) {
        $scope.$broadcast('res2sendAddEvent', msg);
    });
}]);

app.controller('navController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.navs = $rootScope.navs;

    $scope.selectedNav = $scope.navs[0];

    $scope.select = function (nav) {
        $scope.selectedNav = $scope.nav;
    };

    $scope.$on('res2sendAddEvent', function (event, msg) {
        $scope.select($scope.navs[0]);
    });
}]);

app.controller('realnewsController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.news = $rootScope.newlist;
}]);
