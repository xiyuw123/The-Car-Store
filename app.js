var app = angular.module('myApp', []);

app.controller('myCtrl', function myCtrl($scope) {


  $scope.showDets = false;

  $scope.currCar = 0;

  $scope.changeDet = function(orderNum) {
    $scope.showDets = true;
    $scope.currCar = orderNum - 1;
  };

  $scope.cars = carsList;
  /*
  $scope.cars = [
    {
      "orderNumber": 1,
      "make": "BMW",
      "model": "M235i",
      "year": "2016",
      "vehicleType": "front-engine, rear- or 4-wheel-drive, 4-passenger, 2-door coupe",
      "engine": "turbocharged and intercooled DOHC 24-valve 3.0-liter inline-6, 320 hp",
      "transmission": "6-speed manual, 8-speed automatic with manual shifting mode",
      "curbWeight": "3500-3650 lb",
      "EPACity_HWY": "19-20/28-31 mpg",
      "basePrice": "$45,145-$47,145",
      "images": [
        "img/cars/BMW-1.1.jpg",
        "img/cars/BMW-1.2.jpg",
        "img/cars/BMW-1.3.jpg",
        "img/cars/BMW-1.4.jpg",
        "img/cars/BMW-1.5.jpg"
      ]
    },
    {
      "orderNumber": 2,
      "make": "Cadillac",
      "model": "CTS VSport",
      "year": "2016",
      "vehicleType": "front-engine, rear-wheel-drive, 5-passenger, 4-door sedan",
      "engine": "twin-turbocharged and intercooled DOHC 24-valve 3.6-liter V-6, 420 hp",
      "transmission": "8-speed automatic with manual shifting mode",
      "curbWeight": "3950 lb",
      "EPACity_HWY": "16/24 mpg",
      "basePrice": "$60,950",
      "images": [
        "img/cars/CAD-2.1.jpg",
        "img/cars/CAD-2.2.jpg",
        "img/cars/CAD-2.3.jpg"
      ]
    },
    {
      "orderNumber": 3,
      "make": "Chevrolet",
      "model": "Camaro",
      "year": "2016",
      "vehicleType": "front-engine, rear-wheel-drive, 4-passenger, 2-door coupe",
      "engine": "DOHC 24-valve 3.6-liter V-6, 335 hp, 284 lb-ft; 16-valve pushrod 6.2-liter V-8, 455 hp",
      "transmission": "6-speed manual, 8-speed automatic with manual shifting mode",
      "curbWeight": "3600-3760 lb",
      "EPACity_HWY": "16-18/25-29 mpg",
      "basePrice": "$28,490-$37,295",
      "images": [
        "img/cars/CAM-3.1.jpg",
        "img/cars/CAM-3.2.jpg",
        "img/cars/CAM-3.3.jpg",
        "img/cars/CAM-3.4.jpg"
      ]
    },
    {
      "orderNumber": 4,
      "make": "Ford",
      "model": "Mustang Shelby GT350/GT350R",
      "year": "2016",
      "vehicleType": "front-engine, rear-wheel-drive, 2- or 4-passenger, 2-door coupe",
      "engine": "DOHC 32-valve 5.2-liter V-8, 526 hp",
      "transmission": "6-speed manual",
      "curbWeight": "3700-3800 lb",
      "EPACity_HWY": "14/21 mpg",
      "basePrice": "$49,995-$63,495",
      "images": [
        "img/cars/FOR-4.1.jpg",
        "img/cars/FOR-4.2.jpg",
        "img/cars/FOR-4.3.jpg",
        "img/cars/FOR-4.4.jpg",
        "img/cars/FOR-4.5.jpg"
      ]
    },
    {
      "orderNumber": 5,
      "make": "Honda",
      "model": "Accord",
      "year": "2016",
      "vehicleType": "front-engine, front-wheel-drive, 5-passenger, 2-door coupe or 4-door sedan",
      "engine": "twin-turbocharged and intercooled DOHC 24-valve 3.6-liter V-6, 420 hp",
      "transmission": "6-speed manual, 6-speed automatic with manual shifting mode, continuously variable automatic",
      "curbWeight": "3200-3600 lb",
      "EPACity_HWY": "18-27/28-37 mpg",
      "basePrice": "$22,925-$35,400",
      "images": [
        "img/cars/HON-5.1.jpg",
        "img/cars/HON-5.2.jpg",
        "img/cars/HON-5.3.jpg",
        "img/cars/HON-5.4.jpg"
      ]
    },
    {
      "orderNumber": 6,
      "make": "Mazda",
      "model": "MX-5 Miata",
      "year": "2016",
      "vehicleType": "front-engine, rear-wheel-drive, 2-passenger, 2-door convertible",
      "engine": "DOHC 16-valve 2.0-liter Atkinson-capable inline-4, 155 hp",
      "transmission": "6-speed manual, 6-speed automatic with manual shifting mode",
      "curbWeight": "2300-2350 lb",
      "EPACity_HWY": "27/34-36 mpg",
      "basePrice": "$25,735-$31,185",
      "images": [
        "img/cars/MAZ-6.1.jpg",
        "img/cars/MAZ-6.2.jpg",
        "img/cars/MAZ-6.3.jpg",
        "img/cars/MAZ-6.4.jpg"
      ]
    },
    {
      "orderNumber": 7,
      "make": "Mazda",
      "model": "3",
      "year": "2016",
      "vehicleType": "front-engine, front-wheel-drive, 5-passenger, 4-door sedan or hatchback",
      "engine": "DOHC 16-valve 2.0-liter Atkinson-capable inline-4, 155 hp, 150 lb-ft; DOHC 16-valve 2.5-liter Atkinson-capable inline-4, 184 hp",
      "transmission": "6-speed manual, 6-speed automatic",
      "curbWeight": "2850-3100 lb",
      "EPACity_HWY": "25-30/35-41 mpg",
      "basePrice": "$18,665-$26,265",
      "images": [
        "img/cars/MAZ-7.1.jpg",
        "img/cars/MAZ-7.2.jpg",
        "img/cars/MAZ-7.3.jpg",
        "img/cars/MAZ-7.4.jpg"
      ]
    },
    {
      "orderNumber": 8,
      "make": "Porsche",
      "model": "Boxster and Cayman",
      "year": "2016",
      "vehicleType": "mid-engine, rear-wheel-drive, 2-passenger, 2-door coupe or convertible",
      "engine": "DOHC 24-valve 2.7-liter flat-six, 265 or 275 hp, 207 or 213 lb-ft; DOHC 24-valve 3.4-liter flat-six, 315-340 hp",
      "transmission": "6-speed manual, 7-speed dual-clutch automatic with manual shifting mode",
      "curbWeight": "3050-3150 lb",
      "EPACity_HWY": "19-22/26-32 mpg",
      "basePrice": "$53,095-$76,195",
      "images": [
        "img/cars/POR-8.1.jpg",
        "img/cars/POR-8.2.jpg",
        "img/cars/POR-8.3.jpg",
        "img/cars/POR-8.4.jpg"
      ]
    },
    {
      "orderNumber": 9,
      "make": "Tesla",
      "model": "S70/70D",
      "year": "2016",
      "vehicleType": "rear- or front-and-rear-motor, rear- or 4-wheel-drive, 5- or 7-passenger, 4- or 5-door hatchback",
      "engine": "AC induction, 315 hp, 325 lb-ft; 2 AC induction, 328 hp",
      "transmission": "1-speed direct drive",
      "curbWeight": "4400-4600 lb",
      "EPACity_HWY": "88-101/90-102 MPGe",
      "basePrice": "$71,200-$76,200",
      "images": [
        "img/cars/TES-9.1.jpg",
        "img/cars/TES-9.2.jpg",
        "img/cars/TES-9.3.jpg",
        "img/cars/TES-9.4.jpg"
      ]
    },
    {
      "orderNumber": 10,
      "make": "Volkswagen",
      "model": "Golf/GTI/Golf R",
      "year": "2016",
      "vehicleType": "front-engine, front- or 4-wheel-drive, 5-passenger, 2- or 4-door hatchback",
      "engine": "turbocharged and intercooled DOHC 16-valve 1.8-liter inline-4, 170 hp",
      "transmission": "5-speed manual, 6-speed manual, 6-speed automatic with manual shifting mode",
      "curbWeight": "2900-3350 lb",
      "EPACity_HWY": "22-25/30-37 mpg",
      "basePrice": "$19,315-$36,470",
      "images": [
        "img/cars/VOL-10.1.jpg",
        "img/cars/VOL-10.2.jpg",
        "img/cars/VOL-10.3.jpg",
        "img/cars/VOL-10.4.jpg"
      ]
    }
  ];
*/
});

