define(['app'], function (app) {

    app.directive('realnews', function () {
        return {
            restrict : 'A',
            replace : true,
            templateUrl : './js/views/realnews.html'
        };
    });

});
