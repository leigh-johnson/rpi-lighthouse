var StrandService = function($http, $q){
  return {
    'getStrands': function(){
      var defer = $q.defer();
      $http.get('/strand/getStrands').success(function(res){
        defer.resolve(res);
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise
    },
    'addStrand': function($http, $q){},
    'removeStrand': function($http, $q){},
    'getActiveStrand': function(){
      var defer = $q.defer();
      $http.get('/strand/getActiveStrand').success(function(res){
        defer.resolve(res);
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise
    },
    'setActiveStrand': function($http, $q){}
  }
};
module.exports = StrandService;