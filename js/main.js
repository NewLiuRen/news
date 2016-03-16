require.config({
    baseUrl : 'js/',
    paths : {
        'angular' : 'plugins/angular',
        'angular-route' : 'plugins/angular-route',
        'jquery' : 'plugins/jquery',
        'bootstrap' : 'plugins/bootstrap',

        'nav' : 'directives/nav',
        'realnews' : 'directives/realnews',

        'newfun' : 'services/newfun',
        'timestampMarker' : 'services/timestampMarker',

        'route' : 'route/route',

        'app' : 'controllers/app',
        'addController' : 'controllers/addController',
        'editController' : 'controllers/editController',
        'listController' : 'controllers/listController',
        'navController' : 'controllers/navController',
        'realnewsController' : 'controllers/realnewsController',
        'sendMsg' : 'controllers/sendMsg',
        'showController' : 'controllers/showController'
    },
    shim : {
        'angular': {
            exports: 'angular'
        },
        'angular-route' : {
            deps : ['angular'],
            exports : 'angular-route'
        },
        'bootstrap' : {
            deps : ['jquery'],
            exports : 'bootstrap'
        }
    }
});

require(['jquery', 'angular', 'angular-route', 'bootstrap', 'route', 'nav', 'realnews', 'newfun', 'timestampMarker', 'route', 'app', 'addController', 'editController', 'listController', 'navController', 'realnewsController', 'sendMsg', 'showController'], function ($, angular) {

    $(function () {
        angular.bootstrap(document, ['app']);
    });

});
