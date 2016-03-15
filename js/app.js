app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './js/views/newlist.html',
            controller : 'listController'
        })
        .when('/show/:id', {
            templateUrl : './js/views/shownew.html',
            controller : 'showController'
        })
        .when('/edit/:id', {
            templateUrl : './js/views/editnew.html',
            controller : 'editController'
        })
        .when('/list', {
            templateUrl : './js/views/newlist.html',
            controller : 'listController'
        })
        .when('/add', {
            templateUrl : './js/views/addnew.html',
            controller : 'addController'
        })
        .otherwise({
            redirectTo : '/'
        });
}]);


