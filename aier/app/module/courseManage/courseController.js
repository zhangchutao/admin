/**
 * Created by chutaozhang on 2017/4/13.
 */

//课程列表
myApp.controller('CourseListController' , [
    '$scope',
    '$state' ,
    'courseList',
    function ($scope , $state , courseList) {

        $scope.courseList = courseList.getCourseList(); //获取表格数据数据
        $scope.institutionSelect = courseList.getInstitutionSelect();//获取机构选择


        $("#institutionSelect").select2({
            data:$scope.institutionSelect,
            allowClear: false,
            minimumResultsForSearch: Infinity,
            placeholder: '请选择所属品牌',
        });

        //自定义搜索
        var institutionSelect = function () {
            $('#courseTable').DataTable().column( parseInt(1) ).search(
                $("#institutionSelect").select2("data")[0].vaule
            ).draw();
        }

        //监听选择框变化
        $('#institutionSelect').on( 'keyup click change', function () {
            institutionSelect();
        } );

        //初始化datatables
        var table = $('#courseTable');
        var columns = [
            { data: "id" },
            { data: "name" },
            { data: "institution" },
            { data: "desc" },
            { data: "pirce" },
            { data: "marketPrice" },
            { data: "creatTime" },
            { data: null },
        ];
        var columnDefs = [
            {
                targets: 7,
                render: function (data, type, row, meta) {
                    return '<a id=\"edit\">编辑</a>';
                }
            },
            { "orderable": false, "targets": 7 },
        ];
        if (table.length !== 0) {
            dataTableInit(table ,false , $scope.courseList , columns ,columnDefs )
        }

        //编辑点击事件
        $('#courseTable tbody').on( 'click', 'a#edit', function () {
            var data = $('#courseTable').DataTable().row($(this).parents('tr')).data();
            $state.go('app.course.edit' , {id:data.id})
        } );
}])

//添加课程
myApp.controller('AddCourseController' , [
    '$scope' ,
    '$state' ,
    'addCourse' ,
    function ($scope , $state , addCourse) {
    $scope.courseData = {
        courseName:'',
        institution:'',
        intr:'',
        price:0,           //课程价格
        marketPrice:0,     //时长价格
        type:'',
        courseDuration:'',  //时长
        lesson:'',          //课时
        isTrial:'yes',         //试听课
        age:'',             //年龄阶段
        teacher:'',         //师资力量
        courseFeature:'',  //课程特征
        tags:'',
        detail:'link',          //图文详情
        detail_link:'',
        detail_note:'',
        detail_imgs:'',
        imgs:''
    };
    $scope.courseSelect = addCourse.getInstitutionSelect();     //获取所属机构

    //初始化所属机构
    $('#institute').select2({
        allowClear: false,
        minimumResultsForSearch: Infinity,
        data:$scope.courseSelect,
        placeholder: '请选择所属机构',
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
    summernote.summernote('code' , 'Hello word');   //设置默认值




        /*-初始化图片 start--*/
    $scope.imgArray = [];           //图片数组
    $scope.detail_imgArray = [];    //图文详情—图片数组
    $scope.showBorder = false;      //是否显示边框
    $scope.detail_showBorder = false;//图文详情-是否显示边框
    /*-初始化图片 end--*/



    //事件监听
    $scope.evenListener = {
        //保存按钮
        save:function () {
            console.log($scope.courseData);
            //获取富文本中数据
            var noteData = $('#summernote').summernote('code');
            console.log(noteData);
        },

        //删除图片 第二个参数:是否是图文详情
        deldescimg : function (img , isDetail) {
            if(isDetail){
                $scope.detail_imgArray.remove(img);
            }else{
                $scope.imgArray.remove(img);
            }

        },

        //上传图片
        uploadImg : function (files , isDtail) {
            //判断是否是有files
            if (!files || !files.length) {
                return;
            };

            if(isDtail){        //图文详情图片
                $scope.detail_showBorder = true;    //如果有图片就显示最外层的虚线边框
                $scope.detail_imgArray.push(files);

            }else{
                $scope.showBorder = true;
                $scope.imgArray.push(files);
            }
        }
    }
}])

//课程编辑
myApp.controller('EditCourseController' , [
    '$scope' ,
    '$state' ,
    'editCourse' ,
    function ($scope , $state , editCourse) {
        console.log($state.params.id)

        $scope.courseData = editCourse.getCourseData();                     //获取课程详情数据
        $scope.getInstitutionSelect = editCourse.getInstitutionSelect();    //获取课程选择

        //初始化所属机构
        $('#institute').select2({
            allowClear: false,
            minimumResultsForSearch: Infinity,
            data:$scope.getInstitutionSelect,
            placeholder: '请选择所属机构',
        });
        $("#institute").select2('val',$scope.courseData.institutionId);     //设置默认值


        //初始化图片上传
        $scope.imgArray = [];           //图片数组
        $scope.detail_imgArray = [];    //图文详情—图片数组
        $scope.showBorder = false;      //是否显示边框
        $scope.detail_showBorder = false;//图文详情-是否显示边框

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
                console.log($("#institute").select2("data"));
                //1.获取所选机构的值
                $scope.courseData.institution =$("#institute").select2("data")[0].text;
                $scope.courseData.institutionId =$("#institute").select2("data")[0].id;
                //2.判断图文详情是选择那个,然后将没有选择的赋值为空
                switch ($scope.courseData.detail){
                    case 'link':
                        $scope.courseData.detail_note = '';
                        $scope.courseData.detail_imgs = '';
                        break;
                    case 'note':
                        $scope.courseData.detail_link = '';
                        $scope.courseData.detail_imgs = '';
                        //获取富文本的值
                        $scope.courseData.detail_note =  $('#summernote').summernote('code');
                        break;
                    case 'photo':
                        $scope.courseData.detail_link = '';
                        $scope.courseData.detail_note = '';
                        //给图片数组赋值
                        $scope.courseData.detail_imgs =  $scope.detail_imgArray;
                        break;
                }

                console.log($scope.courseData);
            },

            //删除图片 第二个参数:是否是图文详情
            deldescimg : function (img) {
                $scope.imgArray.remove(img);
                if(!$scope.imgArray){}
            },

            //上传图片
            uploadImg : function (files ) {
                //判断是否是有files
                if (!files || !files.length) {
                    return;
                };

                $scope.showBorder = true;
                $scope.loading = true;
                $scope.imgArray.push(files);

                setTimeout(function () {
                    $scope.loading = false;
                } , 1000)
            },

            // //删除图片 第二个参数:是否是图文详情
            // deldescimg : function (img , isDetail) {
            //     if(isDetail){
            //         $scope.detail_imgArray.remove(img);
            //     }else{
            //         $scope.imgArray.remove(img);
            //     }
            // },
            //
            // //上传图片
            // uploadImg : function (files , isDtail) {
            //     //判断是否是有files
            //     if (!files || !files.length) {
            //         return;
            //     };
            //
            //     if(isDtail){        //图文详情图片
            //         $scope.detail_showBorder = true;    //如果有图片就显示最外层的虚线边框
            //         $scope.detail_loading = true;       //显示加载框
            //         $scope.detail_imgArray.push(files);
            //
            //         setTimeout(function () {
            //             $scope.detail_loading = false;
            //         } , 1000)
            //
            //     }else{
            //         $scope.showBorder = true;
            //         $scope.loading = true;
            //         $scope.imgArray.push(files);
            //
            //         setTimeout(function () {
            //             $scope.loading = false;
            //         } , 1000)
            //     }
            // }
        }

}])