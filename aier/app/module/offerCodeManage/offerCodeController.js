/**
 * Created by chutaozhang on 2017/4/13.
 */

//优惠码列表
myApp.controller('OfferCodeListController' , ['$scope' , '$state' , function ($scope , $state) {
    angular.element(document).ready(function () {
        console.log('优惠码列表')

        /*---dataTable配置 stary---*/
        var table = $('#courseTable');
        var sorry = [{           //设置哪列排序,哪列不排序
            'targets' : [0,1,2,4],    //除第六，都默认不排序
            'orderable' : false
        }]
        if (table.length !== 0) {
            dataTableInit(table ,sorry)
        }
    });
}])

//添加优惠码
myApp.controller('AddOfferCodeController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('添加优惠码');
    $('.selectpicker').selectpicker('render');
}])

//优惠码编辑
myApp.controller('EditOfferCodeController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('优惠码编辑')
}])

//优惠码发放
myApp.controller('ReleaseOfferCodeController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('优惠码发放');
    $('.selectpicker').selectpicker('render');
}])