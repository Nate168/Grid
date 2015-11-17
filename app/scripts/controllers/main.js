(function () {

  'use strict';

  /**
   * @ngdoc function
   * @name testApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the testApp
   */
  angular.module('testApp')
    .controller('MainCtrl', function ($scope, $mdSidenav, toastr, $location, $routeParams) {
      var vm = this;

      vm.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
      };

      ///Angular Data-table
      $scope.selected = [];
      $scope.array = [];

//Making the call to get the data;
      $scope.results = [

        {
          "id": 2,
          "requestDate": "10/14/2015",
          "name": "Bill Smith",
          "accounType": "Office Staff",
          "email": "carney@hotmail.com"
        },
        {
          "id": 3,
          "requestDate": "10/10/2015",
          "name": "Betty Boop",
          "accounType": "Billing Office",
          "email": "carney@hotmail.com"

        },
        {
          "id": 4,
          "requestDate": "10/17/2015",
          "name": "John Carney",
          "accounType": " Staff",
          "email": "carney@hotmail.com"
        },
        {
          "id": 5,
          "requestDate": "10/19/2015",
          "name": "Bill Smith",
          "accounType": "Office Staff",
          "email": "carney@hotmail.com"
        },
        {
          "id": 6,
          "requestDate": "10/20/2015",
          "name": "Betty Boop",
          "accounType": "Billing Office",
          "email": "carney@hotmail.com"

        },
        {
          "id": 7,
          "requestDate": "10/1/2015",
          "name": "John Carney",
          "accounType": "Office Staff",
          "email": "carney@hotmail.com"
        },
        {
          "id": 8,
          "requestDate": "10/14/2015",
          "name": "Bill Smith",
          "accounType": "Staff",
          "email": "aly@hotmail.com"
        },
        {
          "id": 9,
          "requestDate": "10/18/2015",
          "name": "Betty Boop",
          "accounType": "Office",
          "email": "ls@hotmail.com"

        }

      ];

      //Data for the table
      $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
      };

      //To count the length for the table
      $scope.count = $scope.results.length;

      $scope.onorderchange = function (order) {
        var deferred = $q.defer();

        $timeout(function () {
          deferred.resolve();
        }, 2000);

        return deferred.promise;
      };

      //Warning about  Approve or deny someone
      $scope.$watch('data.group1', function (n) {
        if (n == 'True') {

          toastr.info('You are about to approved Someone');

        } else if (n == 'False')

          toastr.warning('You are About to decline Someone ')

      });
      //End

      //Getting  Id & boolean
      $scope.submit = function (selected, data) {

        // If checkbox is not click
        if (selected.length == 0) {

          toastr.error('Make sure you to decline someone, ERROR :-(  ');

        } else {

          //converting the array into an obj
          var data = data.group1;

          var keys = Object.keys(selected);
          for (var i = 0; i < keys.length; i++) {
            var selection = selected[keys[i]];
            //end


            //this is optional if you want to push it to a varible
            $scope.array.push(selection.id);
            console.log(selection.id, data);

            //End
          }
          toastr.success('Everything is looking good  :-)');
        }

      };


      $scope.result = $scope.results[$routeParams.id];


      $scope.updateResult = function (result) {
        console.log(result);
      }


    });
}());
