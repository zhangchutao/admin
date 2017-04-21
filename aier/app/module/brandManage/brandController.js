/**
 * Created by chutaozhang on 2017/4/13.
 */

//品牌列表
myApp.controller('BrandListController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('品牌列表');
    // dataTable配置
    angular.element(document).ready(function () {
        var table = $('#courseTable');
        var sorry = [{           //设置哪列排序,哪列不排序
            'targets' : [0,1,3],    //除第六，都默认不排序
            'orderable' : false
        }]
        if (table.length !== 0) {
            dataTableInit(table , true ,sorry)
        }
    });
}])

//添加品牌
myApp.controller('AddBrandController' , ['$scope' , '$state' , function ($scope , $state) {
    $(document).ready(function() {
        console.log('添加品牌');

        $scope.categoryData = [
            {id: "1", text: "亲子"},
            {id: "2", text: "幼儿教育"},
            {id: "3", text: "大脑开发"},
            {id: "4", text: "艺术启蒙"},
            {id: "5", text: "体适能"},
            {id: "6", text: "教育机器人"},
            {id: "7", text: "语言学习"},
        ];


        /*---select2 stary---*/
        var selectControl = $(".js-example-basic-single");
        $(".js-example-basic-single").select2({
            placeholder: "请选择所属类别",
            // maximumSelectionLength: 2,      //选择item数量的限制
            data: $scope.categoryData,     //选项数据
            language: "es",                 //国际化
            dir: "ltr",                     //选项条目的位置,这里是从左到右,也是默认的
            // tags: true,                     //下面这两个选项是设置是否可以自定义标签,也就是选择没有,通过输入然后按空格键
            // tokenSeparators: [',', ' ']

        });
        selectControl.on("select2:select", function (e) {
            console.log("select2:select", e.params.data);
        })

        /*---富文本初始化 start---*/
        $('#summernote').summernote({
            height: 200,                 //设置富文本框的高度
            minHeight: 200,
            maxHeight: null,
            // focus: true               // set focus to editable area after initializin
            lang: 'zh-CN'                //国际化设置,要引入国际话的js文件
        });
    })
}])

//品牌编辑
myApp.controller('EditBrandController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('品牌编辑')
}])
