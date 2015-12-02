var CalendarService = function($http, $q){
    return {
        'getCalendars': function(){
            var defer = $q.defer();
            $http.get('/calendar/getCalendars').success(function(res){
                defer.resolve(res);
            }).error( function(err){
                defer.reject(err);
            });
            return defer.promise;
        },
        'addCalendar': function(calendar){
            var defer = $q.defer();
            $http.post('/calendar/addCalendar', calendar).success(function(res){
                defer.resolve(res);
            }).error( function(err){
                defer.reject(err);
            });
            return defer.promise;
        },
        'removeCalendar': function(event){
            var defer = $q.defer();
            $http.post('/calendar/removeCalendar', calendar).success(function(res){
                defer.resolve(res);
            }).error( function(err){
                defer.reject(err);
            });
            return defer.promise
        }
    }
};
module.exports = CalendarService;