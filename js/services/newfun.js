define(['app'], function (app) {

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

});
