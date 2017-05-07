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

        //逻辑处理,判断是否登录过,如果没有登录,跳转到登录页面,如果登录执行下面的代码

        var institutionListData = institutionList.getListData(); //获取表格数据数据
        $scope.institutionSelect = institutionList.getInstitutionSelect();

        $("#institutionSelect").select2({
            data:$scope.institutionSelect,
            allowClear: false,
            minimumResultsForSearch: Infinity,
            placeholder: '请选择所属品牌',
        });

        //自定义搜索
        var institutionSelect = function () {
            $('#institutionTable').DataTable().column( parseInt(1) ).search(
                $("#institutionSelect").select2("data")[0].vaule
            ).draw();
        }

        //监听选择框变化
        $('#institutionSelect').on( 'keyup click change', function () {
            institutionSelect();
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
                        return '<a id=\"edit\">编辑</a>';
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
        api.act('org/regions').then(function (ret) {
            if (ret.ecode == 200) {
                console.log(ret)
            } else {
                console.log(ret)
            }
        });
}])

//添加机构
myApp.controller('AddInstitutionController' , [
    '$scope' ,
    '$state' ,
    '$timeout' ,
    'api' ,
    'institutionData' ,
    '$timeout' ,
    function ($scope , $state , $timeout , api , institutionData , $timeout) {
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

        $scope.text = '添加机构';
        $scope.showBtn = true;                      //显示复制按钮
        $scope.isCopy = false;                      //是否复制
        $scope.copyText = '复制';
        $scope.brand= institutionData.getBrand();   //获取品牌
        $scope.modernBrowsers = institutionData.getTags()   //获取标签
        var arr = institutionData.getBusiness()[0].sub; //获取商圈

        $("#copy").select2({
            allowClear: false,
            minimumResultsForSearch: Infinity,
            data:$scope.brand,
            placeholder: '请选择要复制的机构',
        });

        //初始化所属品牌选项
        $("#brand").select2({
            allowClear: false,
            minimumResultsForSearch: Infinity,
            data:$scope.brand,
            placeholder: '请选择所属品牌',
        });
        // $("#brand").select2("val", '2'); //设置默认值


        //初始化标签选项
        $("#tags").select2({
            placeholder: "请选择所属类别" ,
            // maximumSelectionLength: 2,      //选择item数量的限制
            data:$scope.modernBrowsers,     //选项数据
            // theme: "classic",               //样式主题
            language: "es",                 //国际化
            dir: "ltr",                     //选项条目的位置,这里是从左到右,也是默认的
            // tags: true,                     //下面这两个选项是设置是否可以自定义标签,也就是选择没有,通过输入然后按空格键
            // tokenSeparators: [',', ' ']

        });


        //商圈数据解析
        $scope.area = [];       //区域数组
        $scope.address = [];    //地址数组
        for(var i = 0 ; i < arr.length ; i++){
            $scope.area.push({'id':arr[i].id, 'text':arr[i].name , 'index':i});
            $scope.addressItem = [];
            for (var y = 0 ; y < arr[i].sub.length ; y++){
                $scope.addressItem.push({'id':arr[i].sub[y].id , 'text':arr[i].sub[y].name})
            }
            $scope.address.push($scope.addressItem)
        }


        //机构商区二级联动 初始化
        $scope.businessAddress = '';                 //对应商圈显示的条目
        $scope.institutionData.businessArea = '';       //地区默认值是第一个
        $scope.institutionData.businessAddress = '';  //商圈的默认值默认是第一个数组中第一个json

        //改变省份触发的事件 [根据索引更改城市数据]
        $scope.areaChange = function(obj) {
            var index = parseInt(JSON.parse(obj).index);
            $scope.businessAddress = $scope.address[index]; //将商圈重新赋值
            $scope.institutionData.businessAddress = '';
        }

        $("#area").select2({
            allowClear: false,
            minimumResultsForSearch: Infinity,
            data:$scope.area,
            placeholder: '请选择所属品牌',
        });
        var address=  $("#addres");
        address.select2({
            allowClear: false,
            minimumResultsForSearch: Infinity,
            data:$scope.address[0],
            placeholder: '请选择所属品牌',
        });

        $("#area").on("select2:select", function (e) {
            var index = $("#area").select2("data")[0].index;
            console.log(index);
            address.empty();
            address.select2({
                allowClear: false,
                minimumResultsForSearch: Infinity,
                data:$scope.address[index],
                placeholder: '请选择所属品牌',
            });
        })



        //初始化图片
        $scope.imgArray = [];           //图片数组
        $scope.showBorder = false;      //是否显示边框

        //事件监听
        $scope.evenListener = {
            //保存按钮
            save:function () {

                //1.获取所属类别的值
                $scope.brandInfo.category =$("#category").select2("data");
                //2.获取标签的值
                //3.给图片的数值赋值
                console.log($scope.brandInfo);
            },

            //删除图片 第二个参数:是否是图文详情
            deldescimg : function (img) {
                $scope.imgArray.remove(img);
                if(!$scope.imgArray){}
            },

            //上传图片
            uploadImg : function (files) {
                console.log(files)
                //判断是否是有files
                if (!files) {
                    return;
                };

                api.upload(files)
                    .success(function (data) {
                        if (data.ecode == 200) {
                            console.log(data)
                        } else {
                            console.log(data)
                        }
                    })

                // $scope.showBorder = true;
                // $scope.loading = true;
                // $scope.imgArray.push(files);
                //
                // setTimeout(function () {
                //     $scope.loading = false;
                // } , 1000)
            },
            
            //复制监听
            copy : function () {
                $scope.isCopy = !$scope.isCopy;
                if($scope.isCopy){
                    $scope.copyText = '取消复制';
                    //将复制全都复制为空
                }else {
                    $scope.copyText = '复制';
                }
            }
        }


}])

//机构编辑
myApp.controller('EditInstitutionController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log($state.params.id);

    $scope.text = '编辑机构';
    $scope.showBtn = false; //显示复制按钮
}])

