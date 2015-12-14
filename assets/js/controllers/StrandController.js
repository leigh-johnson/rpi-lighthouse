var StrandController = function($scope, $rootScope, StrandService){
 // all strand objects
 $scope.strands = [];
 // active strand object
 $scope.activeStrand = {};
 // current working model
 $scope.editStrand = {};
 $scope.editStrand.numLEDs = 30;
 $scope.editStrand.leds = new Array($scope.editStrand.numLEDs);

 $scope.editStrand.pattern = 'solid';

 StrandService.getStrands().then(function(res){
    $scope.strands = res;
 });
 StrandService.getActiveStrand().then(function(res){
    $scope.activeStrand = res;
    console.log(typeof $scope.activeStrand)
 });
 $scope.addStrand = function(strand){
  StrandService.addStrand(strand).then(function(res){
    // push to strands scope
    // or re-call getStrands()
    // reset $scope.strand
  });
 };
 $scope.updateNumLEDs = function(){
  $scope.$apply();
 };

 $scope.removeStrand = function(){
  StrandService.removeStrand(strand)(function(res){
    // splice strand from $scope.strands
    // or recall getStrands();
  });
 };
 // return current working editStrand model
 $scope.getEditStrand = function(){

 };
 // returns existing strand & sets editStrand model
 $scope.setEditStrand = function(id){

 }
};
module.exports = StrandController;