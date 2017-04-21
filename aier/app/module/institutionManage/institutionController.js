/**
 * Created by chutaozhang on 2017/4/13.
 */

//机构列表
myApp.controller('InstitutionListController' , [
    '$scope' ,
    '$state' ,
    'institutionList' ,
    'api' ,
    '$timeout',
    function ($scope , $state , institutionList , api , $timeout) {

    //dataTable配置
    // angular.element(document).ready(function () {
    //     if ($('#data-table').length !== 0) {
    //         $('#data-table').DataTable({
    //             bAutoWidth: true,                   //是否启用自动适应列宽
    //             // aoColumns: [                          //设定各列宽度
    //             //     {"sWidth": "5%"},
    //             //     {"sWidth": "15%"},
    //             //     {"sWidth": "20%"},
    //             //     ],
    //             searching : false,      //是否要搜索框
    //             info: false,            //去掉底部文字
    //             bSort: true,            //是否排序
    //             paging: true,           //是否分页
    //             columnDefs:[{           //设置哪列排序,哪列不排序
    //                 'targets' : [0,1,2,3,4,5,7],    //除第六，都默认不排序
    //                 'orderable' : false
    //             }],
    //             'language':{            //语言设置
    //                 "sLoadingRecords": "载入中...",
    //                 "sInfoThousands":"",
    //                 "search":"搜索:",
    //                 "lengthMenu": "",
    //                 "zeroRecords": "占时没有数据!",    //没哟数据时内容区域的显示
    //                 "info": "",       //"info": "Showing page _PAGE_ of _PAGES_",当有数据时,在左下角显示的文字
    //                 "infoEmpty": "",                //没有数据时左下脚的文字显示
    //                 "infoFiltered": "",  //(filtered from _MAX_ total records) 搜索的时候,在左下角显示的文字
    //                 "paginate":{
    //                     first:"第一页",
    //                     previous:"上一页",
    //                     next:"下一页",
    //                     last:"末页"
    //                 },
    //
    //             },
    //             select: true,           //是否选中
    //             responsive: true,
    //             rowReorder: true,
    //             "dom":'<"toolbar">frtip',//工具栏的设置
    //             "bAutoWidth":false
    //         });
    //         $("div.toolbar").html('');
    //
    //     }
    // });
    angular.element(document).ready(function () {
        //逻辑处理,判断是否登录过,如果没有登录,跳转到登录页面,如果登录执行下面的代码

        var institutionListData = institutionList.getListData(); //获取表格数据数据
        $scope.institutionSelect = institutionList.getInstitutionSelect();

        //自定义搜索
        var institutionSelect = function () {
            $('#institutionTable').DataTable().column( parseInt(1) ).search(
                $("#institutionSelect").val()
            ).draw();
        }

        //监听选择框变化
        $('#institutionSelect').on( 'keyup click change', function () {
            institutionSelect();
            console.log( $("#institutionSelect").val())
        } );

        //初始化datatables
        var table = $('#institutionTable');
        var columns = [
            { data: "id" },
            { data: "name" },
            { data: "area" },
            { data: "business" },
            { data: "approve" },
            { data: "phone" },
            { data: "creatTime" },
            { data: null },
        ];
        var columnDefs = [
                {
                    targets: 7,
                    render: function (data, type, row, meta) {
                        return '<a id=\"edit\"  href=\"#\">编辑</a>';
                    }
                },
                { "orderable": false, "targets": 7 },
            ];
        if (table.length !== 0) {
            dataTableInit(table ,false , institutionListData , columns ,columnDefs )
        }

        //编辑点击事件
        $('#institutionTable tbody').on( 'click', 'a#edit', function () {
            var data = $('#institutionTable').DataTable().row($(this).parents('tr')).data();
            $state.go('app.institution.edit' , {id:data.id})
        } );

        //接口
        // api.act('org/regions').then(function (ret) {
        //     if (ret.ecode == 200) {
        //         console.log(ret)
        //     } else {
        //         console.log(ret)
        //     }
        // });
    });
}])

//添加机构
myApp.controller('AddInstitutionController' , ['$scope' , '$state' , '$timeout' , 'api' , 'institutionData' ,  function ($scope , $state , $timeout , api , institutionData) {
    //标签初始化
    // $('#jquery-tagIt-default').tagit({
    //     availableTags: [""],
    //     caseSensitive:true,
    //     allowDuplicates:false,  //
    //     tagLimit:10,        //标签的数量
    //     afterTagAdded:function (event , ui) {
    //         console.log(event)
    //         console.log(ui);
    //     }
    //
    // });
    console.log('添加机构');
    $scope.institutionData = {
        name:'',
        brand:'',
        businessArea:'',
        businessAddress:'',
        address:'',
        latitudeLongitude:'',
        studentNum:'',
        contact:'',
        tags:'',
        gifts:'',
        desc:'',
        certification:'yes',
        imgs:''
    }

    $scope.brand= institutionData.getBrand();   //获取品牌
    $scope.modernBrowsers = institutionData.getTags()   //获取标签
    var arr = institutionData.getBusiness()[0].sub; //获取商圈
    $scope.area = [];
    $scope.address = [];
    for(var i = 0 ; i < arr.length ; i++){
        $scope.area.push({'id':arr[i].id, 'text':arr[i].name , 'index':i});
        $scope.addressItem = [];
        for (var y = 0 ; y < arr[i].sub.length ; y++){
            $scope.addressItem.push({'id':arr[i].sub[y].id , 'text':arr[i].sub[y].name})
        }
        $scope.address.push($scope.addressItem)
    }


    //保存按钮点击事件
    $scope.save = function () {
        //获取
        var str = $(".js-example-basic-single").val();
        var texe = $(".js-example-basic-single option:selected").text();
        console.log(str)
        console.log($scope.institutionData)
    }





    /*机构商区二级联动*/
    $scope.businessAddress = '';                 //对应商圈显示的条目
    $scope.institutionData.businessArea = '';       //地区默认值是第一个
    $scope.institutionData.businessAddress = '';  //商圈的默认值默认是第一个数组中第一个json

    //改变省份触发的事件 [根据索引更改城市数据]
    $scope.areaChange = function(obj) {
        var index = parseInt(JSON.parse(obj).index);
        $scope.businessAddress = $scope.address[index]; //将商圈重新赋值
        $scope.institutionData.businessAddress = '';
    }
    //改变城市触发的事件
    $scope.addressChange = function(index) {
    }




    /*上传图片*/
    $scope.imgArray = [];
    $scope.curImg = '';     //当前图片
    $scope.perImg = '';     //上一张图片
    $scope.deldescimg = function (img) {
        $scope.imgArray.remove(img);
    };
    $scope.uploadImg = function (files) {
        $scope.loading = true;
        //判断是否是有files
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
            $scope.curImg = files;
            //判断是不是第一张图片,不是才将上一张图片添加到数组中
            if($scope.perImg){
                $scope.imgArray.push($scope.perImg);
                // $scope.imgArray.reverse()
            }
            $scope.perImg = $scope.curImg;
        }

        setTimeout(function () {
            $scope.loading = false;
        } , 1000)

        console.log($scope.imgArray)

    };


    //初始化所属品牌
    $(".brand").select2({
        placeholder: '请选择所属品牌',
        allowClear: false,
        minimumResultsForSearch: Infinity,
        data:$scope.brand,
    });
    //初始化商区
    $(".businessArea").select2({
        allowClear: false,
        minimumResultsForSearch: Infinity,
        data:$scope.area,
    });
    $(".businessAddress").select2({
        allowClear: false,
        minimumResultsForSearch: Infinity,
        data:$scope.brand,
    });

    $(".businessArea").on("select2:select", function (e) {
        var areaId = $(".businessArea").val();

    })

    // $(".brand").select2('val','1')
    $(".js-example-basic-single").select2({
        placeholder: "请选择所属类别" ,
        // maximumSelectionLength: 2,      //选择item数量的限制
        data:$scope.modernBrowsers,     //选项数据
        // theme: "classic",               //样式主题
        language: "es",                 //国际化
        dir: "ltr",                     //选项条目的位置,这里是从左到右,也是默认的
        // tags: true,                     //下面这两个选项是设置是否可以自定义标签,也就是选择没有,通过输入然后按空格键
        // tokenSeparators: [',', ' ']

    });
    //选择框监听事件
    $(".js-example-basic-single").on("select2:select", function (e) {
        console.log("select2:select", e.params.data);
        $scope.institutionData.tags = $(".js-example-basic-single").val();
    })


}])

//机构编辑
myApp.controller('EditInstitutionController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('编辑机构');
    console.log($state.params.id);
}])

