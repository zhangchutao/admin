/**
 * Created by chutaozhang on 2017/4/21.
 *
 * 活动管理服务
 */
myApp.factory('offerCodeList' , function () {
    var offerCodeList = [
        {id:'1' , name:'小马快跑pony课' , status:'正常' , validPeriod:'2017-04-14'},
        {id:'2' , name:'小马快跑pony课' , status:'正常' , validPeriod:'2017-04-14'},
        {id:'3' , name:'小马快跑pony课' , status:'正常' , validPeriod:'2017-04-14'},
        {id:'4' , name:'小马快跑pony课' , status:'正常' , validPeriod:'2017-04-14'},
        {id:'5' , name:'小马快跑pony课' , status:'正常' , validPeriod:'2017-04-14'},
        {id:'6' , name:'小马快跑pony课' , status:'正常' , validPeriod:'2017-04-14'},
        {id:'7' , name:'小马快跑pony课' , status:'正常' , validPeriod:'2017-04-14'},
    ];

    return{
        //    获取表格列表数据
        getOfferCodeList : function () {
            return offerCodeList;
        },


    }
})

//添加优惠码
myApp.factory('addofferCode' , function () {
    //指定课程
    var courseSelect = [
        {id:1 , text:'小马快跑pyon课程'},
        {id:2, text:'科瑞机器人skitck'},
    ];

    var applicableShop = [
        {id:1 , text:'小马快跑'},
        {id:1 , text:'多多熊'},
        {id:1 , text:'科瑞机器人'},
        {id:1 , text:'七田真'},
    ]

    return{
        //获取指定课程
        getCourseSelect : function () {
            return courseSelect;
        },

        //获取使用门店
        getApplicableShop :function () {
            return applicableShop;
        }


    }
});

//优惠码编辑
myApp.factory('editOfferCode' , function () {
    var courseSelect = [
        {id:1 , text:'小马快跑pyon课程'},
        {id:2, text:'科瑞机器人skitck'},
    ];

    var applicableShop = [
        {id:1 , text:'小马快跑'},
        {id:2 , text:'多多熊'},
        {id:3 , text:'科瑞机器人'},
        {id:4 , text:'七田真'},
    ];

    var offerCodeData = {
            offerCodeTitle:'小马课程99块活动',
            course:'小马快跑pyon课程',
            courseId:1,
            startTime:'2017-04-22',
            endTime:'2017-04-24',
            shop:['1' , '2'],
            rule_befer:1000,
            rule_after:100,
            desc:'这是一个非常性价比的活动'
        }

    return{
        //获取优惠码详情
        getOfferCodeData : function () {
            return offerCodeData;
        },

        //获取指定课程
        getCourseSelect : function () {
            return courseSelect;
        },

        //获取使用门店
        getApplicableShop :function () {
            return applicableShop;
        }
    }
})

//推送优惠码
myApp.factory('releaseOfferCode' , function () {
    //优惠码标题
    var offerCodeTitle = [
        {id:1 , text:'小马课程99块活动'},
        {id:2, text:'科瑞机器人免费试听课'},
    ];

    return{
        //获取优惠码标题
        getOfferCodeTitle : function () {
            return offerCodeTitle;
        },
    }
})