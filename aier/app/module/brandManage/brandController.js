/**
 * Created by chutaozhang on 2017/4/13.
 */

//品牌列表
myApp.controller('BrandListController' , [
    '$scope' ,
    '$state' ,
    'brandList',
    function ($scope , $state , brandList) {
        $scope.brandList = brandList.getBrandList(); //获取表格数据数据

        //初始化datatables
        var table = $('#brandTable');
        var columns = [
            { data: "id" },
            { data: "name" },
            { data: "createTime" },
            { data: null },
        ];
        var columnDefs = [
            {
                targets: 3,
                render: function (data, type, row, meta) {
                    return '<a id=\"edit\">编辑</a>';
                }
            },
            { "orderable": false, "targets": 3 },
        ];
        if (table.length !== 0) {
            dataTableInit(table ,false , $scope.brandList , columns ,columnDefs )
        }

        //编辑点击事件
        $('#brandTable tbody').on( 'click', 'a#edit', function () {
            var data = $('#brandTable').DataTable().row($(this).parents('tr')).data();
            $state.go('app.brand.edit' , {id:data.id})
        } );

}])

//添加品牌
myApp.controller('AddBrandController' , [
    '$scope' ,
    '$state' ,
    'addBrand' ,
    '$timeout' ,
    function ($scope , $state , addBrand , $timeout) {
        $scope.brandInfo = {
            name:'',
            category:'',
            age:'',
            intr:'',
            feature:'',
            cover:'',
            logo:'',
        }

        $scope.categoryData =  addBrand.getCategoryData();  //获取所属类别

        //初始化选择框
        var selectControl = $("#category");
        $("#category").select2({
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
            placeholder: '请编辑品牌特色',
            //图片处理,加上改回调,那么图片上传就会走该回调,然后在添加图片进去
            // callbacks: {
            //     onImageUpload: function(files, editor, $editable) {
            //         console.log(files)
            //         // $('#summernote').summernote('insertImage', files);
            //     }
            // }
        });
        // summernote.summernote('code' , 'Hello word');   //设置默认值


        /*-初始化图片 start--*/
        $scope.imgArray = [];           //图片数组
        $scope.showBorder = false;      //是否显示边框
        $scope.showAddImgs = true;      //显示添加图片
        /*-初始化图片 end--*/



        //事件监听
        $scope.evenListener = {
            //保存按钮
            save:function () {

                //1.获取类别的值
                $scope.brandInfo.category =$("#category").select2("data");
                console.log($scope.brandInfo.category);
                //2.获取特色
                $scope.brandInfo.feature = $('#summernote').summernote('code');
                //3.将品牌封面图片赋值
                $scope.brandInfo.cover = $scope.imgArray;
                //4.将品牌logo图赋值
                $scope.brandInfo.logo = $scope.logo_curImg;

                console.log($scope.brandInfo);
            },

            //删除图片 第二个参数:是否是图文详情
            deldescimg : function (islogo , img) {
                if(islogo){ //logo图片
                    $scope.logo_curImg = '';
                    $scope.showAddImgs = true;
                }else{
                    $scope.imgArray.remove(img);
                    if(!$scope.imgArray){

                    }
                }

            },

            //上传图片
            uploadImg : function (files , islogo) {
                //判断是否是有files
                if (!files || !files.length) {
                    return;
                };

                if(islogo){        //logo图片
                    $scope.logo_loading = true;
                    $scope.logo_curImg = files;
                    if($scope.logo_curImg){
                        $scope.showAddImgs = false;
                    }else {
                        $scope.showAddImgs = true;
                    }

                    setTimeout(function () {
                        $scope.logo_loading = false;
                    } , 1000)

                }else{
                    $scope.showBorder = true;
                    $scope.loading = true;
                    $scope.imgArray.push(files);

                    setTimeout(function () {
                        $scope.loading = false;
                    } , 1000)
                }
            }
        }
}])

//品牌编辑
myApp.controller('EditBrandController' , [
    '$scope' ,
    '$state' ,
    'editBrand' ,
    '$timeout' ,
    function ($scope , $state , editBrand , $timeout) {
        console.log($state.params.id);

        $scope.brandInfo = editBrand.getBrandInfo();    //获取品牌信息
        $scope.categoryData =  editBrand.getCategoryData();  //获取所属类别

        //初始化选择框
        var selectControl = $("#category");
        $("#category").select2({
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
        $("#category").val($scope.brandInfo.category).trigger("change") //设置多个选项默认值
        // $("#category").select2('val',);     //设置单个选项默认值

        /*---富文本初始化 start---*/
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
            placeholder: '请编辑品牌特色',
            //图片处理,加上改回调,那么图片上传就会走该回调,然后在添加图片进去
            // callbacks: {
            //     onImageUpload: function(files, editor, $editable) {
            //         console.log(files)
            //         // $('#summernote').summernote('insertImage', files);
            //     }
            // }
        });
        summernote.summernote('code' , $scope.brandInfo.feature);   //设置默认值

        //初始化图片上传
        $scope.imgArray = [];           //图片数组
        $scope.showBorder = false;      //是否显示边框
        $scope.showAddImgs = true;      //显示添加图片

        //事件监听
        $scope.evenListener = {
            //保存按钮
            save:function () {

                //1.获取类别的值
                $scope.brandInfo.category =$("#category").select2("data");
                console.log($scope.brandInfo.category);
                //2.获取特色
                $scope.brandInfo.feature = $('#summernote').summernote('code');
                //3.将品牌封面图片赋值
                $scope.brandInfo.cover = $scope.imgArray;
                //4.将品牌logo图赋值
                $scope.brandInfo.logo = $scope.logo_curImg;

                console.log($scope.brandInfo);
            },

            //删除图片 第二个参数:是否是图文详情
            deldescimg : function (islogo , img) {
                if(islogo){ //logo图片
                    $scope.logo_curImg = '';
                    $scope.showAddImgs = true;
                }else{
                    $scope.imgArray.remove(img);
                    if(!$scope.imgArray){

                    }
                }

            },

            //上传图片
            uploadImg : function (files , islogo) {
                //判断是否是有files
                if (!files || !files.length) {
                    return;
                };

                if(islogo){        //logo图片
                    $scope.logo_loading = true;
                    $scope.logo_curImg = files;
                    if($scope.logo_curImg){
                        $scope.showAddImgs = false;
                    }else {
                        $scope.showAddImgs = true;
                    }

                    setTimeout(function () {
                        $scope.logo_loading = false;
                    } , 1000)

                }else{
                    $scope.showBorder = true;
                    $scope.loading = true;
                    $scope.imgArray.push(files);

                    setTimeout(function () {
                        $scope.loading = false;
                    } , 1000)
                }
            }
        }
}])
