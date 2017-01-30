
var app = angular.module('app', []);

angular.element(document).ready(function () {
  console.log("doc ready");
  angular.bootstrap(document, ['app']);
});

app.controller('myCtl', function($scope, $interval, $timeout){
  
  var fetchSomethingFromServer = function () {
    // initialize stuff after data is arrives
    $timeout(function () {
      $scope.count = Math.round(Math.random() *1000);
    }, 5000);
  }
  
  var inc = function() { 
    $scope.count += 1;
    console.log($scope.count)
  }
  
  $scope.init = function () {
    fetchSomethingFromServer();
    $interval(inc, 1000);
  }
});