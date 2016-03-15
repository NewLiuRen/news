define(['app'], function (app) {

    app.directive('nav', function () {
        return {
            restrict : 'A',
            replace : true,
            templateUrl : './js/views/nav.html'
        };
    });

});
