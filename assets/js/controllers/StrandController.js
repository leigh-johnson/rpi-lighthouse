var StrandController = function($scope, $rootScope, StrandService){
 $scope.init = function(){
 // all strand objects
 $scope.strands = [];
 // active strand object
 $scope.activeStrand = {};
 // current working model
 $scope.strands.active = {};
 $scope.numLEDs = 30;
 // @todo  1d matrix (for now...)
 $scope.leds = [];
 $scope.activeLED = 0;

 // selected pattern
 $scope.pattern = {};
 // pattern dictionary
 $scope.patterns = {
  'solid' : {
    displayName: 'Solid',
    'description': 'Choose a solid color for each bulb'
  },
  'gradient' : { 
    displayName: 'gradient',
    'description' : 'Set gradient stops along the strand'
  },
  'rainbow': {
    displayName: 'Rainbow',
    'description' : 'Rainbow gradient preset',
    'disabled': true
  }
 };
  for (i=0; i < $scope.numLEDs; i++){
  obj = {};
  $scope.leds.push(obj);
  }
 };

 $scope.init();

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
 $scope.applyAllColor = function(color){
  for (i=0; i < $scope.leds.length; i++){
    ($scope.leds[i]).color = color;
  }
  return
 };
 $scope.setActiveLED = function(index){
  $scope.activeLED = index;
 }
 $scope.getPatternDesc = function(){
  //return $scope..patterns[$scope.editStrand.activePattern].description
 }
 $scope.updateNumLEDs = function(){
  if ( $scope.leds.length < $scope.numLEDs){
     diff = $scope.numLEDs - $scope.leds.length ;
    // init empty led objects in numLEDs array
    for (i=0; i < diff; i++){
        obj = {};
        $scope.leds.push(obj);
      }
  }
  else {
      $scope.leds.length = $scope.numLEDs;
  }
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