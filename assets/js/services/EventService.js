var EventService = function($http, $q) {
    return {
      'getEvents': function() {
        var defer = $q.defer();
        $http.get('/event/getEvents').success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      },
      'addEvent': function(event) {
        var defer = $q.defer();
        $http.post('/event/addEvent', event).success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      },
      'removeEvent': function(event) {
        var defer = $q.defer();
        $http.post('/event/removeEvent', event).success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      }
  }
};
module.exports = EventService;