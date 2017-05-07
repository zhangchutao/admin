/**
 * Created by chutaozhang on 2017/4/21.
 *
 * 活动管理服务
 */
myApp.factory('activityList' , function () {
    var activityList = [
        {id:'1' , name:'小马快跑pony课' , institution:'小马快跑' , type:'pony课时非常非常好的早教课' , startTime:'2016-12-04' , endTime:'2016-12-04'},
        {id:'2' , name:'小马快跑pony课' , institution:'小马快跑' , type:'pony课时非常非常好的早教课' , startTime:'2016-12-04' , endTime:'2016-12-04'},
        {id:'3' , name:'小马快跑pony课' , institution:'小马快跑' , type:'pony课时非常非常好的早教课' , startTime:'2016-12-04' , endTime:'2016-12-04'},
        {id:'4' , name:'小马快跑pony课' , institution:'小马快跑' , type:'pony课时非常非常好的早教课' , startTime:'2016-12-04' , endTime:'2016-12-04'},
        {id:'5' , name:'小马快跑pony课' , institution:'小马快跑' , type:'pony课时非常非常好的早教课' , startTime:'2016-12-04' , endTime:'2016-12-04'},
        {id:'6' , name:'小马快跑pony课' , institution:'小马快跑' , type:'pony课时非常非常好的早教课' , startTime:'2016-12-04' , endTime:'2016-12-04'},
        {id:'7' , name:'小马快跑pony课' , institution:'小马快跑' , type:'pony课时非常非常好的早教课' , startTime:'2016-12-04' , endTime:'2016-12-04'},
    ];

    return{
        //    获取表格列表数据
        getActivityList : function () {
            return activityList;
        },
    }
});


//添加活动
myApp.factory('addActivity' , function () {
    //所属机构
    var institutionSelect = [
        {id:'1' , text:'科瑞机器人'},
        {id:'2' , text:'小马快跑'},
        {id:'3' , text:'多多熊'},
    ];
    //活动类别
    var activityType= [
        {id:'1' , text:'可购买'},
        {id:'2' , text:'免费报名'},
        {id:'3' , text:'文章'},
    ]
    return{
        //获取所属机构
        getInstitutionSelect : function () {
            return institutionSelect;
        },

        //获取活动类别
        getActivityType : function () {
            return activityType;
        }

    }
});