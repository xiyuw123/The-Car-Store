var app = angular.module('myApp', []);

app.controller('myCtrl', function myCtrl($scope, $http) {


  $scope.showDets = false;

  $scope.currCar = 0;

  $scope.changeDet = function(orderNum) {
    $scope.showDets = true;
    $scope.currCar = orderNum - 1;
  };

  $http.get("cars.json")
      .then(function(response) {
        $scope.carData = response.data.cars;
      });

});

