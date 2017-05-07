/**
 * Created by chutaozhang on 2017/4/18.
 * 第一个参数:对象
 * 第二个参数:是否要排序
 * 第三个参数:排序的对象 ,
 */


//动态绑定数据
function dataTableInit(obj , bSort  , data , columns , columnDefs) {
    obj.DataTable({
        bAutoWidth: true,                   //是否启用自动适应列宽
        // aoColumns: [                          //设定各列宽度
        //     {"sWidth": "5%"},
        //     {"sWidth": "5%"}
        //     ],
        aLengthMenu: [20, 25, 50, -1],//也可以直接用一维数组设置数量
        searching : true,      //是否要搜索功能,如果为false那么搜索框就会被隐藏,但是也不能自定义搜索,如果想自定义搜索,并隐藏原本的搜索框,在在dom隐藏收拾框
        controlBox:false,
        info: false,            //去掉底部文字
        bSort: bSort,            //是否排序
        paging: true,           //是否分页
        columnDefs:columnDefs,
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
        select: false,           //是否选中
        responsive: true,
        rowReorder: true,
        "dom":'lrtip',//工具栏的设置
        "bAutoWidth":false,
        // data:data,
        // columns:[]
        data:data,
        columns: columns,
    });
    $("div.toolbar").html('');
}

function dataTableInitData(obj , bSort , columnDefs) {
    obj.DataTable({
        bAutoWidth: true,                   //是否启用自动适应列宽
        // aoColumns: [                          //设定各列宽度
        //     {"sWidth": "5%"},
        //     {"sWidth": "15%"},
        //     {"sWidth": "20%"},
        //     ],
        searching : true,      //是否要搜索框
        "dom":'lrtip',//工具栏的设置
        info: false,            //去掉底部文字
        bSort: bSort,            //是否排序
        paging: true,           //是否分页
        columnDefs:columnDefs,
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
        select: false,           //是否选中
        responsive: true,
        rowReorder: true,
        // "dom":'<"toolbar">frtip',//工具栏的设置
        "bAutoWidth":false,
    });
    $("div.toolbar").html('');
}


