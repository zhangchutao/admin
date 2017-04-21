/**
 * Created by chutaozhang on 2017/4/13.
 */

//订单管理
myApp.controller('OrderListController' , ['$scope' , '$state' , function ($scope , $state) {
    angular.element(document).ready(function () {
        console.log('订单管理');
        var table = $('#courseTable');
        if (table.length !== 0) {
            dataTableInit(table , false)
        }
    });
}])

//订单详情
myApp.controller('OrderDetailController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('订单详情')
}])