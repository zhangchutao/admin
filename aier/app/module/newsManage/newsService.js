/**
 * Created by chutaozhang on 2017/4/19.
 * 机构管理服务
 */
myApp.factory('newsList' , function () {
    var newsListData = [
        {id:'1' , title:'艾儿五一南山海岸亲子活动' , pushTime:'2016-12-04'},
        {id:'2' , title:'艾儿五一南山海岸亲子活动' , pushTime:'2016-12-04'},
        {id:'3' , title:'艾儿五一南山海岸亲子活动' , pushTime:'2016-12-04'},
        {id:'4' , title:'艾儿五一南山海岸亲子活动' , pushTime:'2016-12-04'},
        {id:'5' , title:'艾儿五一南山海岸亲子活动' , pushTime:'2016-12-04'},
    ];

    return{
        //    获取表格列表数据
        getListData : function () {
            return newsListData;
        },

    }
})

