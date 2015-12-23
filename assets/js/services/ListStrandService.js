var StrandService = function($http, $q){
  return {
    'list': function(){
      var defer = $q.defer();
      $http.get('/strand/list').success(function(res){
        defer.resolve(res);
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise
    },
    'create': function(){
      var defer = $q.defer();
      $http.get('/strand/create').success(function(res){
        defer.resolve(res);
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise
    },
    'remove': function(strand){
      var defer = $q.defer();
      $http.post('/strand/remove', strand).success(function(res){
        defer.resolve(res);
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise
    },
    'getActive': function(){
      var defer = $q.defer();
      $http.get('/strand/active').success(function(res){
        defer.resolve(res);
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise
    },
    'setActive': function(strand){
      var defer = $q.defer();
      $http.post('/stand/active', strand).success(function(res){
        defer.resolve(res);
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise
    }
  }
};
module.exports = StrandService;