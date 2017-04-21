/**
 * Created by chutaozhang on 2017/4/13.
 */

//课程列表
myApp.controller('CourseListController' , ['$scope' , '$state' , function ($scope , $state) {


    //初始化选择框
    $('.selectpicker').selectpicker('render');
    //自定义搜索
    var institutionSelect = function () {
        $('#courseTable').DataTable().column( parseInt(0) ).search(
            $("#institutionSelect").val()
        ).draw();
    }


    //dataTable配置
    angular.element(document).ready(function () {
        if ($('#courseTable').length !== 0) {
            $('#courseTable').DataTable({
                bAutoWidth: true,                   //是否启用自动适应列宽
                // aoColumns: [                          //设定各列宽度
                //     {"sWidth": "5%"},
                //     {"sWidth": "5%"}
                //     ],
                searching : true,      //是否要搜索功能,如果为false那么搜索框就会被隐藏,但是也不能自定义搜索,如果想自定义搜索,并隐藏原本的搜索框,在在dom隐藏收拾框
                controlBox:false,
                info: false,            //去掉底部文字
                bSort: true,            //是否排序
                paging: true,           //是否分页
                columnDefs:[{           //设置哪列排序,哪列不排序
                    'targets' : [0,1,2,3,4,5,7],    //除第六，都默认不排序
                    'orderable' : false
                }],
                'language':{            //语言设置
                    "sLoadingRecords": "载入中...",
                    "sInfoThousands":"",
                    "search":"搜索:",
                    "lengthMenu": "",
                    "zeroRecords": "占时没有数据!",    //没哟数据时内容区域的显示
                    "info": "",       //"info": "Showing page _PAGE_ of _PAGES_",当有数据时,在左下角显示的文字
                    "infoEmpty": "",                //没有数据时左下脚的文字显示
                    "infoFiltered": "",  //(filtered from _MAX_ total records) 搜索的时候,在左下角显示的文字
                    "paginate":{
                        first:"第一页",
                        previous:"上一页",
                        next:"下一页",
                        last:"末页"
                    },

                },
                select: true,           //是否选中
                responsive: true,
                rowReorder: true,
                "dom":'lrtip',//工具栏的设置
                "bAutoWidth":false
            });
            $("div.toolbar").html('');
            //自定义搜索
            $('#institutionSelect').on( 'keyup click change', function () {
                institutionSelect();
            } );
        }
    });
}])

//添加课程
myApp.controller('AddCourseController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('添加课程')
    $scope.imgArray = [];
    $scope.deldescimg = function (img) {
        $scope.imgArray.remove(img);
    };

    $scope.uploadImg = function (files) {
        if (!files || !files.length) {
            return;
        }
        if (files.length > 1) {
            angular.forEach(files, function (item) {
                var image = [];
                image.push(item);
                $scope.imgArray.push(image);
            })

        } else {
            $scope.imgArray.push(files);
        }

        console.log($scope.imgArray)

    };

    $scope.imgs={
        id:'1',
    }

    $scope.save = function () {
        console.log($scope.imgs.id);
    }
}])

//课程编辑
myApp.controller('EditCourseController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('课程编辑')
}])