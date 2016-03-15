app.directive('nav', function () {
    return {
        restrict : 'A',
        replace : true,
        templateUrl : './js/views/nav.html'
    };
});

app.directive('realnews', function () {
    return {
        restrict : 'A',
        replace : true,
        templateUrl : './js/views/realnews.html'
    };
});
