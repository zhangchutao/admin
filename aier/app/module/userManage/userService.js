/**
 * Created by chutaozhang on 2017/4/19.
 * 机构管理服务
 */
myApp.factory('userList' , function () {
    var userListData = [
        {id:'1' , phone:'13246707010' , name:'如意' , institution:'童心飞扬(益田)青少年宫' , loginUpTime:2016-12-16},
        {id:'2' , phone:'13246707010' , name:'如意' , institution:'童心飞扬(益田)青少年宫' , loginUpTime:2016-12-16},
        {id:'3' , phone:'13246707010' , name:'如意' , institution:'童心飞扬(益田)青少年宫' , loginUpTime:2016-12-16},
        {id:'4' , phone:'13246707010' , name:'如意' , institution:'童心飞扬(益田)青少年宫' , loginUpTime:2016-12-16},
        {id:'5' , phone:'13246707010' , name:'如意' , institution:'童心飞扬(益田)青少年宫' , loginUpTime:2016-12-16},
        {id:'6' , phone:'13246707010' , name:'如意' , institution:'童心飞扬(益田)青少年宫' , loginUpTime:2016-12-16},
        {id:'7' , phone:'13246707010' , name:'如意' , institution:'童心飞扬(益田)青少年宫' , loginUpTime:2016-12-16},
    ];

    var reservationListData = [
        {id:'1' , phone:'13246707010' , reservationListreservationList:'科瑞机器人' , reservedTime:'2016-12-26', status:'等待处理'},
        {id:'2' , phone:'13246707010' , institution:'科瑞机器人' , reservedTime:'2016-12-26', status:'等待处理'},
        {id:'3' , phone:'13246707010' , institution:'科瑞机器人' , reservedTime:'2016-12-26', status:'等待处理'},
        {id:'4' , phone:'13246707010' , institution:'科瑞机器人' , reservedTime:'2016-12-26', status:'等待处理'},
        {id:'5' , phone:'13246707010' , institution:'科瑞机器人' , reservedTime:'2016-12-26', status:'等待处理'},
        {id:'6' , phone:'13246707010' , institution:'科瑞机器人' , reservedTime:'2016-12-26', status:'等待处理'},
        {id:'7' , phone:'13246707010' , institution:'科瑞机器人' , reservedTime:'2016-12-26', status:'等待处理'},
    ];

    var feedbackListData = [
        {id:'1' , content:'app出现了bug' , feedbackTime:'2016-12-26' , status:'等待处理'},
        {id:'2' , content:'app出现了bug' , feedbackTime:'2016-12-26' , status:'等待处理'},
        {id:'3' , content:'app出现了bug' , feedbackTime:'2016-12-26' , status:'等待处理'},
        {id:'4' , content:'app出现了bug' , feedbackTime:'2016-12-26' , status:'等待处理'},
        {id:'5' , content:'app出现了bug' , feedbackTime:'2016-12-26' , status:'等待处理'},
        {id:'6' , content:'app出现了bug' , feedbackTime:'2016-12-26' , status:'等待处理'},
        {id:'7' , content:'app出现了bug' , feedbackTime:'2016-12-26' , status:'等待处理'},
    ]

    return{
        //    获取表格列表数据
        getUserList : function () {
            return userListData;
        },

        getReservationList : function () {
            return reservationListData;
        },

        getFeedbackList : function () {
            return feedbackListData;
        }

    }
})

