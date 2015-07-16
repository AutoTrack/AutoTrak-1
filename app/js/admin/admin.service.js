;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('AdminService', ['$http', '$state', 'HEROKU', '$stateParams',
    function ($http, $state, HEROKU, $stateParams) {


      var postEmployee = HEROKU.URL + '/employee_user/register';
      var getEmployee = HEROKU.URL + '/employee_user/business_index';
      var getEmployeeId = HEROKU.URL + '/employee_user/show/';
      var newInventory = HEROKU.URL + '/inventory_items';
      var newClient = HEROKU.URL + '/clients';

      var id = Number($stateParams.id);

      this.createEmployee = function (user){
        $http.post(postEmployee, user, HEROKU.CONFIG)
          .success ( function (data){
            console.log(data);
            $state.reload('admin.employee');
          });
      };

      this.createInventory = function (item){
        $http.post(newInventory, item, HEROKU.CONFIG)
          .success ( function (data){
            console.log(data);
            $state.reload('admin.inventory');
          });
      };

      this.createCustomer = function (customer){
        $http.post(newClient, customer, HEROKU.CONFIG)
          .success ( function (data){
            console.log(data);
            $state.reload('admin.customer');
          });
      };

      this.employeeList = function () {
        return $http.get(getEmployee, HEROKU.CONFIG);
      };

      // this.editEmployee = function () {
      //   return $http.get(getEmployeeId + id, HEROKU.CONFIG);
      // };

    }

  ]);

}());

// SearchService.goSearch().success( function (data) {
//       var singleID = Number($stateParams.id);
//       $scope.result = _.findWhere(data.questions, {profile_id: singleID});
//     });
