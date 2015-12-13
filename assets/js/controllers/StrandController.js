var StrandController = function($scope, $rootScope, StrandService){
 $scope.strands = [];
 $scope.activeStrand = {};

 StrandService.getStrands().then(function(res){
    $scope.strands = res;
 });
 StrandService.getActiveStrand().then(function(res){
    $scope.activeStrand = res;
 });
 $scope.addStrand = function(strand){
  StrandService.addStrand(strand).then(function(res){
    // push to strands scope
    // or re-call getStrands()
    // reset $scope.strand
  });
 };
 $scope.removeStrand = function(){
  StrandService.removeStrand(strand)(function(res){
    // splice strand from $scope.strands
    // or recall getStrands();
  });
 };
};
module.exports = StrandController;