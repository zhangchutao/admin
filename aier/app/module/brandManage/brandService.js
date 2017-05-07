/**
 * Created by chutaozhang on 2017/4/21.
 *
 * 活动管理服务
 */
myApp.factory('brandList' , function () {
    var brandList = [
        {id:'1' , name:'小马快跑pony课' ,  createTime:'2016-12-04'},
        {id:'2' , name:'小马快跑pony课' ,  createTime:'2016-12-04'},
        {id:'3' , name:'小马快跑pony课' ,  createTime:'2016-12-04'},
        {id:'4' , name:'小马快跑pony课' ,  createTime:'2016-12-04'},
        {id:'5' , name:'小马快跑pony课' ,  createTime:'2016-12-04'},
    ];

    return{
        //    获取表格列表数据
        getBrandList : function () {
            return brandList;
        },


    }
})

//添加品牌
myApp.factory('addBrand' , function () {
    var categoryData = [
        {id:'1' , text:'亲子'},
        {id:'2' , text:'幼儿教育'},
        {id:'3' , text:'大脑开发'},
        {id:'4' , text:'艺术启蒙'},
        {id:'5' , text:'体适能'},
        {id:'6' , text:'机器人'},
    ];

    return{
        //获取所属类别
        getCategoryData : function () {
            return categoryData;
        },


    }
})

//编辑品牌
myApp.factory('editBrand' , function () {
    var categoryData = [
        {id:'1' , text:'亲子'},
        {id:'2' , text:'幼儿教育'},
        {id:'3' , text:'大脑开发'},
        {id:'4' , text:'艺术启蒙'},
        {id:'5' , text:'体适能'},
        {id:'6' , text:'机器人'},
    ];
    var brandInfo = {
        name:'小马快跑',
        category:['2' , '1'],
        age:'0-4',
        intr:'小马快跑是一家很好的早教机构',
        feature:'小马快跑啊',
        cover:'',
        logo:'',
    }

    return{
        //获取品牌信息
        getBrandInfo : function () {
            return brandInfo;
        },
        //获取所属类别
        getCategoryData : function () {
            return categoryData;
        },

    }
})