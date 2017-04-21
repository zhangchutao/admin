/**
 * Created by chutaozhang on 2017/4/13.
 */
//用户列表
myApp.controller('UserListController' , ['$scope' , '$state' , function ($scope , $state) {
    angular.element(document).ready(function () {
        console.log('用户列表')

        var table = $('#courseTable');
        if (table.length !== 0) {
            dataTableInit(table , false)
        }
    });
}])


//预约管理
myApp.controller('ReservationListController' , ['$scope' , '$state' , function ($scope , $state) {
    angular.element(document).ready(function () {
        console.log('预约管理')

        var table = $('#courseTable');
        if (table.length !== 0) {
            dataTableInit(table , false)
        }
    });
}])

//用户反馈
myApp.controller('FeedbackListController' , ['$scope' , '$state' , function ($scope , $state) {
    angular.element(document).ready(function () {
        console.log('用户反馈')

        var table = $('#courseTable');
        if (table.length !== 0) {
            dataTableInit(table , false)
        }
    });
}])
