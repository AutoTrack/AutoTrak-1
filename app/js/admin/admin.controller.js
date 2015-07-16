;(function (){

  'use strict';

  angular.module('AutoTrak')

  .controller('AdminCtrl', ['$scope', '$location', 'AdminService', 'TokenService',

    function ($scope, $location, AdminService, TokenService) {

      TokenService.tokenizeHeader();

      $scope.employeeCreate = function (user) {
        AdminService.createEmployee(user);
      };

      AdminService.employeeList().success( function (data) {
        $scope.employees = data.employee_user;
        console.log(data);
      });

      $scope.inventoryAdd = function (item) {
        AdminService.createInventory(item);
      };

      $scope.customerCreate = function (customer) {
        AdminService.createCustomer(customer);
      };

      // $scope.employeeEdit = function (user) {
      //   AdminService.editEmployee(user);
      //   console.log(user);
      // };

    }

  ]);



}());
