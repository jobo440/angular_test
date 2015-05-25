var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http){
  
  $scope.handle = '';
  
  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };
  
  $scope.characters = 5;
  
  $scope.$watch('handle', function(newValue,oldValue){
    console.info('Changed!');
    console.log('Old:' + oldValue);
    console.log('New:' + newValue);
  })
  
  $scope.rules = [
    { rulename: "must be 5 characters" },
    { rulename: "must not be used elsewhere" },
    { rulename: "must be cool" }
  ];
  
    $scope.alertClick = function(){
    alert("Clicked");
  }
  
    
    $scope.name = 'Joe'
  
    $http.get('/api')
      .success(function(result) {
    
    })
      .error(function (data, status) {
      
    })
}]);

