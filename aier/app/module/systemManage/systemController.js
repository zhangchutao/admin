/**
 * Created by chutaozhang on 2017/4/13.
 */

//管理员列表
myApp.controller('ManageListController' , ['$scope' , '$state' , function ($scope , $state) {
    angular.element(document).ready(function () {
        console.log('系统管理')

        var table = $('#courseTable');
        if (table.length !== 0) {
            dataTableInit(table , false)
        }
    });
}])

//添加管理员
myApp.controller('AddManageController' , ['$scope' , '$state' , function ($scope , $state) {
    angular.element(document).ready(function () {
        console.log('添加管理员')

    });
}])