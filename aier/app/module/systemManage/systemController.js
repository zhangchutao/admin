/**
 * Created by chutaozhang on 2017/4/13.
 */

//管理员列表
myApp.controller('ManageListController' , [
    '$scope' ,
    '$state' ,
    'systemList' ,
    '$timeout' ,
    function ($scope , $state , systemList , $timeout) {
        $timeout(function () {
            $scope.systemList = systemList.getSystemList(); //获取表格数据数据
        },1000)


        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            dataTableInitData($('#systemTable') , false);
        });


    }])

//添加管理员
myApp.controller('AddManageController' , ['$scope' , '$state' , function ($scope , $state) {
    $scope.addManageData = {
        eamill:'',
        password:'',
    }


    $scope.submitBtn = function () {
        //加密
        //请求接口
    }
}])