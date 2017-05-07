/**
 * Created by chutaozhang on 2017/4/13.
 */

//优惠码列表
myApp.controller('OfferCodeListController' , [
    '$scope' ,
    '$state' ,
    'offerCodeList',
    '$timeout',
    function ($scope , $state , offerCodeList , $timeout) {

        $timeout(function () {
            $scope.offerCodeList = offerCodeList.getOfferCodeList(); //获取表格数据数据
        } , 1000)


        $scope.$on('ngRepeatFinished' , function (ngRepeatFinishedEvent) {
            dataTableInitData($('#offerCodeTable') , false);
        })


        $scope.evenListener = {
            edit:function (data) {
                $state.go('app.offerCode.edit' , {id:data.id})
            },

            xiaojia:function (data) {

            },

            release:function (id) {

            }
        }


}])

//添加优惠码
myApp.controller('AddOfferCodeController' , [
    '$scope' ,
    '$state' ,
    'addofferCode' ,
    function ($scope , $state , addofferCode) {
        $scope.offerCodeInfo = {
            offerCodeTitle:'',
            course:'',
            startTime:'',
            endTime:'',
            shop:'',
            rule_befer:'',
            rule_after:'',
            desc:''
        }
        $scope.courseSelect = addofferCode.getCourseSelect();   //获取指定课程选项
        $scope.applicableShop = addofferCode.getApplicableShop(); //获取使用门店

        //初始化时间
        // $("#startTime").attr("value",'2017-04-27');  //给时间控件设置默认值
        // var timeVal = $('#startTime').val();            //获取时间空间值
        $('.input-daterange').datepicker({
            language: "zh-CN",
            todayHighlight: true,
            autoclose: true,//选中之后自动隐藏日期选择框
            clearBtn: true,//清除按钮
            todayBtn: false,//今日按钮
            format: "yyyy-mm-dd",//日期格式，
            startDate : new Date(), //设置选择的时间范围
        });
        //初始化选择框 指定课程
        $('#course').select2({
            allowClear: false,
            minimumResultsForSearch: Infinity,
            data:$scope.courseSelect,
            placeholder: '请选择指定课程',
        });
        // $(id).select2("val", 选项的id); //设置默认值

        /*--适用门店 start--*/
        $("#shop").select2({
            placeholder: "请选择适用门店" ,
            // maximumSelectionLength: 2,      //选择item数量的限制
            data:$scope.applicableShop,     //选项数据
            // theme: "classic",               //样式主题
            language: "es",                 //国际化
            dir: "ltr",                     //选项条目的位置,这里是从左到右,也是默认的
            // tags: true,                     //下面这两个选项是设置是否可以自定义标签,也就是选择没有,通过输入然后按空格键
            // tokenSeparators: [',', ' ']

        });
        /*--使用门店 end--*/

        //事件
        $scope.evenListener = {
            //保存按钮
            save:function () {
                //1.给指定课程赋值
                //2.给起止时间赋值
                //3.给使用门店赋值
                $scope.offerCodeInfo.startTime = get_unix_time($('#startTime').val());
                $scope.offerCodeInfo.endTime = get_unix_time($('#endTime').val());
                $scope.offerCodeInfo.shop = $("#shop").val();
                $scope.offerCodeInfo.course = $("#course").select2("data");
                console.log($scope.offerCodeInfo);
            }
        }
}])

//优惠码编辑
myApp.controller('EditOfferCodeController' , [
    '$scope' ,
    '$state' ,
    'editOfferCode' ,
    function ($scope , $state , editOfferCode) {
        console.log($state.params.id)
        $scope.offerCodeInfo = editOfferCode.getOfferCodeData();    //获取优惠码编辑

        $scope.courseSelect = editOfferCode.getCourseSelect();       //获取指定课程选项
        $scope.applicableShop = editOfferCode.getApplicableShop();   //获取使用门店

        //初始化时间空间
        $("#startTime").attr("value", $scope.offerCodeInfo.startTime);  //给时间控件设置默认值
        $("#endTime").attr("value", $scope.offerCodeInfo.endTime);      //给时间控件设置默认值
        var timeVal = $('#startTime').val();            //获取时间空间值
        $('.input-daterange').datepicker({
            language: "zh-CN",
            todayHighlight: true,
            autoclose: true,//选中之后自动隐藏日期选择框
            clearBtn: true,//清除按钮
            todayBtn: false,//今日按钮
            format: "yyyy-mm-dd",//日期格式，
            startDate : timeVal, //设置选择的时间范围
        });


        //初始化选择框 指定课程
        $('#course').select2({
            allowClear: false,
            minimumResultsForSearch: Infinity,
            data:$scope.courseSelect,
            placeholder: '请选择指定课程',
        });
        $('#course').select2("val", $scope.offerCodeInfo.courseId); //设置默认值

        $("#shop").select2({
            placeholder: "请选择适用门店" ,
            // maximumSelectionLength: 2,      //选择item数量的限制
            data:$scope.applicableShop,     //选项数据
            // theme: "classic",               //样式主题
            language: "es",                 //国际化
            dir: "ltr",                     //选项条目的位置,这里是从左到右,也是默认的
            // tags: true,                     //下面这两个选项是设置是否可以自定义标签,也就是选择没有,通过输入然后按空格键
            // tokenSeparators: [',', ' ']

        });
        $("#shop").val($scope.offerCodeInfo.shop).trigger("change") //设置默认值

        //事件
        $scope.evenListener = {
            //保存按钮
            save:function () {
                //1.给指定课程赋值
                //2.给起止时间赋值
                //3.给使用门店赋值
                $scope.offerCodeInfo.startTime = get_unix_time($('#startTime').val());
                $scope.offerCodeInfo.endTime = get_unix_time($('#endTime').val());
                $scope.offerCodeInfo.shop = $("#shop").val();
                $scope.offerCodeInfo.course = $("#course").select2("data");
                console.log($scope.offerCodeInfo);
            }
        }

}])

//优惠码发放
myApp.controller('ReleaseOfferCodeController' , [
    '$scope' ,
    '$state' ,
    'releaseOfferCode' ,
    function ($scope , $state , releaseOfferCode) {
    $scope.releaseData = {
        offerCodeTitle : '',
        isAllUser : '',
        account : ''};
    $scope.isShow = false;  //是否显示文本框标志
    $scope.offerCodeTitleItems =releaseOfferCode.getOfferCodeTitle();   //获取优惠码标题

    $scope.$watch('releaseData.isAllUser' , function () {

        if($scope.releaseData.isAllUser == 'part'){
            $scope.isShow = true;
        }else{
            $scope.isShow = false;
            $scope.releaseData.account = '';
        }
    })

    //初始化选项框
    $('#offerCodeTitle').select2({
        allowClear: false,
        minimumResultsForSearch: Infinity,
        data:$scope.offerCodeTitleItems,
        placeholder: '请选择优惠码标题',
    });

    //推送按钮
    $scope.released = function () {
        $scope.releaseData.offerCodeTitle = $("#offerCodeTitle").select2("data");
        console.log($scope.releaseData);
    }


}])