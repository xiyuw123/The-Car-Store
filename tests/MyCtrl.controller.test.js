'use strict';

describe('myApp', function() {
    beforeEach(module('myApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('myCtrl', function() {

        it('should instantiate showDets to false', function(){
            var $scope = {};
            var controller = $controller('myCtrl',{$scope: $scope});
            expect($scope.showDets).toBe(false);
        });

        it('should instantiate currCar to 0', function(){
            var $scope = {};
            var controller = $controller('myCtrl',{$scope: $scope});
            expect($scope.currCar).toBe(0);
        });

        it('cars array should have length 10', function(){
            var $scope = {};
            var controller = $controller('myCtrl',{$scope: $scope});
            expect($scope.cars.length).toBe(10);
        });

        it('pass changeDet a param of 1, currCar should equal 0', function(){
            var $scope = {};
            var controller = $controller('myCtrl',{$scope: $scope});
            $scope.changeDet(1);
            expect($scope.currCar).toBe(0);
        });

        it('pass changeDet a param of 1, showDets should equal true', function(){
            var $scope = {};
            var controller = $controller('myCtrl',{$scope: $scope});
            $scope.changeDet(1);
            expect($scope.showDets).toBe(true);
        });

    });
});