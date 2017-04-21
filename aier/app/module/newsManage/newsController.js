/**
 * Created by chutaozhang on 2017/4/13.
 */

//消息列表
myApp.controller('NewsListController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('消息列表')
    // dataTable配置
    angular.element(document).ready(function () {
        var table = $('#courseTable');
        // var sorry = [{           //设置哪列排序,哪列不排序
        //     'targets' : [0,1,3],    //除第六，都默认不排序
        //     'orderable' : false
        // }]
        if (table.length !== 0) {
            dataTableInit(table )
        }
    });
}])

//消息推送
myApp.controller('PushNewsController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('消息推送')
}])

//消息详情
myApp.controller('NewsDetailController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('消息详情')
}])