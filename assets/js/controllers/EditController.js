var StrandController = function($scope, $rootScope, StrandService){
 $scope.init = function(){
  StrandService.list().then(function(res){
    $scope.strands = res;
  });
 // current working model
 //$scope.strands.active = {};
 $scope.numLEDs = 30;
 // @todo  1d matrix (for now...)
 $scope.leds = [];
 $scope.activeLED = 0;

 // selected pattern
 $scope.pattern = 'solid';
 // pattern dictionary
 $scope.patterns = {
  'solid' : {
    displayName: 'Solid',
    'description': 'Choose a solid color for each bulb'
  },
  'gradient' : { 
    displayName: 'gradient',
    'description' : 'Set gradient stops along the strand',
    'disabled': true
  },
  'rainbow': {
    displayName: 'Rainbow',
    'description' : 'Rainbow gradient preset',
    'disabled': true
  }
 };
  for (i=0; i < $scope.numLEDs; i++){
  $scope.leds[i] ='#3498db';
  }
 };

 $scope.init();

 StrandService.getActive().then(function(res){
    $scope.activeStrand = res;
    //console.log(typeof $scope.activeStrand)
 });
 $scope.create = function(){
   strand = {};
   strand.leds = $scope.leds;
   strand.numLEDs = $scope.numLEDs;
   strand.pattern = $scope.pattern;
   StrandService.create(strand).then(function(res){
    console.log(res);
    $scope.init();
   });
 };
 $scope.remove = function(strand){
  StrandService.remove(strand).then(function(res){
      console.log(res);
    });
 };
 $scope.applyAllColor = function(color){
  for (i=0; i < $scope.leds.length; i++){
    ($scope.leds[i]) = color;
  }
  return
 };
 $scope.setActiveLED = function(index){
  $scope.activeLED = index;
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
    // or recall list();
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