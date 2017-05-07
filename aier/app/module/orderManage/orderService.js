/**
 * Created by chutaozhang on 2017/4/19.
 * 机构管理服务
 */
myApp.factory('orderList' , function () {
    var orderListData = [
        {id:'1' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'2' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'3' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'4' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'5' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'6' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'7' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'8' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'9' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'10' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'11' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'12' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'13' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'14' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'15' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'16' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
        {id:'17' , orderNum:'20170425201364' , phone:'13246707010' , money:'299' , status:'等待处理' , createTime:2016-12-16 ,payTime:2016-12-16},
    ];


    return{
        //    获取表格列表数据
        getOrderList : function () {
            return orderListData;
        },


    }
})

