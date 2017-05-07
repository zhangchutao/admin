/**
 * Created by chutaozhang on 2017/4/13.
 */

//活动列表
myApp.controller('ActivityListController' , [
    '$scope' ,
    '$state' ,
    'activityList',
    function ($scope , $state , activityList) {

        $scope.activityList = activityList.getActivityList(); //获取表格数据数据

        //初始化datatables
        var table = $('#activityTable');
        var columns = [
            { data: "id" },
            { data: "name" },
            { data: "institution" },
            { data: "type" },
            { data: "startTime" },
            { data: "endTime" },
            { data: null },
        ];
        var columnDefs = [
            {
                targets: 6,
                render: function (data, type, row, meta) {
                    return '<div style="text-align: center"><a id=\"edit\"  href=\"#\">连接</a> | <a id=\"edit\"  href=\"#\">编辑</a> | <a id=\"edit\"  href=\"#\">图片</a></div>';
                }
            },
            { "orderable": false, "targets": 6 },
        ];
        if (table.length !== 0) {
            dataTableInit(table ,false , $scope.activityList , columns ,columnDefs )
        }

        //编辑点击事件
        $('#activityTable tbody').on( 'click', 'a#edit', function () {
            var data = $('#activityTable').DataTable().row($(this).parents('tr')).data();
            $state.go('app.institution.edit' , {id:data.id})
        } );

    /* Datepicker
     ------------------------- */
    function institutionSelect ( ) {
        $('#courseTable').DataTable().column( parseInt(0) ).search(
            $('#institutionSelect').val()
        ).draw();
    }
    //dataTable配置


}])

//添加活动
myApp.controller('AddActivityController' , [
    '$scope' ,
    '$state' ,
    'addActivity' ,
    function ($scope , $state , addActivity) {
        //添加活动数据
        $scope.activityData = {
            name:'',
            institution:'',
            intr:'',
            feature:'',
            typeee:'',
            joinNum:'',
            startTime:'',
            endTime:'',
            price:'',
            content:'link',
            content_link:'',
            content_note:'',
            imgs:'',
        };
        $scope.institutionSelect = addActivity.getInstitutionSelect();  //获取所属机构
        $scope.activityType = addActivity.getActivityType();            //获取所属机构
        $scope.showAddImgs = true;                                      //显示添加图片

        //初始化所属机构
        $('#intitution').select2({
            allowClear: false,
            minimumResultsForSearch: Infinity,
            data:$scope.institutionSelect,
            placeholder: '请选择所属机构',
        });

        //初始化活动类型
        $('#activityType').select2({
            allowClear: false,
            minimumResultsForSearch: Infinity,
            data:$scope.activityType,
            placeholder: '请选择活动类型',
        });

        //起止时间初始化
        var timeContr = $('.input-daterange');
        $("#startTime").attr("value",'2017-04-27');//填充内容
        var timeVal = $('#startTime').val();

        console.log(timeVal);
        timeContr.datepicker({
            language: "zh-CN",
            todayHighlight: true,
            autoclose: true,//选中之后自动隐藏日期选择框
            clearBtn: true,//清除按钮
            todayBtn: false,//今日按钮
            format: "yyyy-mm-dd",
            startDate : timeVal,
        });

        //初始化富文本
        var summernote = $('#summernote');
        summernote.summernote({
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['style' , 'bold', 'italic', 'underline', 'clear' ]],
                ['font', ['strikethrough', 'superscript', 'subscript']],
                ['fontsize', ['fontsize']],
                ['fontname', ['fontname']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph' , 'height']],
                ['Insert', ['table' , 'picture' , 'link', 'hr']],
                ['Misc', ['fullscreen' , 'codeview' , 'undo', 'redo' , 'help']],
            ],
            // fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New' ],
            height: 200,                 //设置富文本框的高度
            minHeight: 200,
            maxHeight: null,
            lang: 'zh-CN',                //国际化设置,要引入国际话的js文件
            placeholder: '请编辑图文详情',
            //图片处理,加上改回调,那么图片上传就会走该回调,然后在添加图片进去
            // callbacks: {
            //     onImageUpload: function(files, editor, $editable) {
            //         console.log(files)
            //         // $('#summernote').summernote('insertImage', files);
            //     }
            // }
        });
        // summernote.summernote('code' , 'Hello word');   //设置默认值


        //事件监听
        $scope.evenListener = {
        //保存按钮
        save:function () {
            console.log($scope.activityData);
            //获取富文本中数据
            var noteData = $('#summernote').summernote('code');
            console.log(noteData);
        },

        //删除图片 第二个参数:是否是图文详情
        deldescimg : function () {
            $scope.curImg = '';
            $scope.showAddImgs = true;
        },

        //上传图片
        uploadImg : function (files ) {
            //判断是否是有files
            if (!files || !files.length) {
                return;
            };
            $scope.loading = true;
            $scope.curImg = files;
            if($scope.curImg){
                $scope.showAddImgs = false;
            }else {
                $scope.showAddImgs = true;
            }

            setTimeout(function () {
                $scope.loading = false;
            } , 1000)
        }
    }

}])

//活动编辑
myApp.controller('EditActivityController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('活动编辑');

}])