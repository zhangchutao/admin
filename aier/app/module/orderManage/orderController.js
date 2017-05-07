/**
 * Created by chutaozhang on 2017/4/13.
 */

//订单管理
myApp.controller('OrderListController' , [
    '$scope' ,
    '$state' ,
    'orderList' ,
    '$timeout' ,
    function ($scope , $state , orderList , $timeout) {
        $timeout(function () {
            $scope.orderList = orderList.getOrderList(); //获取表格数据数据
        },1000)


        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            dataTableInitData($('#orderTable') , false);
        });

    }])

//订单详情
myApp.controller('OrderDetailController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('订单详情')
}])