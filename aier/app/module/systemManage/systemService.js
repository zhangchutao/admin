/**
 * Created by chutaozhang on 2017/4/19.
 * 机构管理服务
 */
myApp.factory('systemList' , function () {
    var systemListData = [
        {id:'1' , email:'zhagnchutao@qq.com' , phone:'13246707010' , account:'天赐' , status:'已启用'},
        {id:'2' , email:'zhagnchutao@qq.com' , phone:'13246707010' , account:'天赐' , status:'已启用'},
        {id:'3' , email:'zhagnchutao@qq.com' , phone:'13246707010' , account:'天赐' , status:'已启用'},
        {id:'4' , email:'zhagnchutao@qq.com' , phone:'13246707010' , account:'天赐' , status:'已启用'},
        {id:'5' , email:'zhagnchutao@qq.com' , phone:'13246707010' , account:'天赐' , status:'已启用'},
        {id:'6' , email:'zhagnchutao@qq.com' , phone:'13246707010' , account:'天赐' , status:'已启用'},
        {id:'7' , email:'zhagnchutao@qq.com' , phone:'13246707010' , account:'天赐' , status:'已启用'},
    ];

    return{
        //    获取表格列表数据
        getSystemList : function () {
            return systemListData;
        },

    }
})

