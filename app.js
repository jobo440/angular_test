var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

    .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
  
})


myApp.controller('mainController', ['$scope', '$log', function($scope, $log){
  
  $scope.word = 'hi'
  
}]);

myApp.controller('secondController', ['$scope', '$log', '$interval', function($scope, $log, $interval){
    
  function randomCharacterAnimation(characterAmount, endCharacter, timeWait) {
    
    // create setupCharacters array   
    setupCharacters = []  
    for (i=0; i<characterAmount; i++) {  
      randomCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's']
      var randomCharacter = randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
      setupCharacters.push(randomCharacter);
    }; 
    setupCharacters.push(endCharacter); 
    console.log(setupCharacters);
    // animation
    //listOne = ['a','b','c','d','e','f','j'];
    $scope.letterJ = randomCharacter
    var i = 0;
    $interval(function(){
      if (setupCharacters[i-1] != endCharacter){
        $scope.letterJ = setupCharacters[i++]
      };
      $scope.$apply();
    }, timeWait) 

    
  };
  randomCharacterAnimation(6, 'j', 100);


}]);
