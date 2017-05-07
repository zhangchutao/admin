/**
 * Created by chutaozhang on 2017/4/13.
 */
//用户列表
myApp.controller('UserListController' , [
    '$scope' ,
    '$state' ,
    'userList' ,
    '$timeout' ,
    function ($scope , $state , userList , $timeout) {
        $timeout(function () {
            $scope.userList = userList.getUserList(); //获取表格数据数据
        },1000)


        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            dataTableInitData($('#userTable') , false);
        });

    }])


//预约管理
myApp.controller('ReservationListController' , [
    '$scope' ,
    '$state' ,
    'userList' ,
    '$timeout' ,
    function ($scope , $state ,userList , $timeout) {
        $timeout(function () {
            $scope.reservationList = userList.getReservationList(); //获取表格数据数据
        },1000)


        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            dataTableInitData($('#reservationTable') , false);
        });
}])

//用户反馈
myApp.controller('FeedbackListController' , [
    '$scope' ,
    '$state' ,
    'userList' ,
    '$timeout' ,
    function ($scope , $state ,userList , $timeout) {
        $timeout(function () {
            $scope.feedbackList = userList.getFeedbackList(); //获取表格数据数据
        },1000)


        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            dataTableInitData($('#feedbackTable') , false);
        });
}])
