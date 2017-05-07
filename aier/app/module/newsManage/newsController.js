/**
 * Created by chutaozhang on 2017/4/13.
 */

//消息列表
myApp.controller('NewsListController' , [
    '$scope' ,
    '$state' ,
    '$timeout' ,
    'newsList' ,
    function ($scope , $state , $timeout , newsList) {
    $timeout(function () {
        $scope.newsList = newsList.getListData(); //获取表格数据数据
    } , 1000)


    $scope.$on('ngRepeatFinished' , function (ngRepeatFinishedEvent) {
        dataTableInitData($('#newsTable') , false);
    })
}])

//消息推送
myApp.controller('PushNewsController' , ['$scope' , '$state' , function ($scope , $state) {
    $scope.pushNewData = {
        title:'',
        newsIntr:'',
        type:'',
        activityLink:'',
        obj:'',
        objArr:''
    }
    $scope.showActivityLink = false;
    $scope.showObjArr = false;

    $scope.save = function () {
        console.log($scope.pushNewData)
        //调用接口,成功后弹出该窗口,把数据清空

        $.gritter.add({
            title: '消息推送成功!',
            text: ''
        });
    }

    $scope.$watch('pushNewData.type' , function () {
        if($scope.pushNewData.type == 'activity'){
            $scope.showActivityLink = true;
        }else{
            $scope.showActivityLink = false;
            $scope.pushNewData.activityLink ='';    //赋值为空
        }
    })
    $scope.$watch('pushNewData.obj' , function () {
        if($scope.pushNewData.obj == 'partUser'){
            $scope.showObjArr = true;
        }else{
            $scope.showObjArr = false;
            $scope.pushNewData.objArr ='';    //赋值为空
        }
    })
}])

//消息详情
myApp.controller('NewsDetailController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('消息详情')
}])