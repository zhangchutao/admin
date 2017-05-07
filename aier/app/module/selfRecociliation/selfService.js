/**
 * Created by chutaozhang on 2017/4/21.
 *
 */

//自助对账列表
myApp.factory('selfList' , function () {
    var Unsettlement = [
        {id:'1' , date:'今日' , buyNum:'10' , shopNum:'10' , money:'572.00' },
        {id:'2' , date:'昨日' , buyNum:'10' , shopNum:'10' , money:'572.00' },
        {id:'3' , date:'本周' , buyNum:'10' , shopNum:'10' , money:'572.00' },
        {id:'4' , date:'本月' , buyNum:'10' , shopNum:'10' , money:'572.00' },
    ];

    var settlementDate = [
        {id:'1' , date:'2017-03-25' , buyNum:'10' , shopNum:'10' , money:'572.00' },
    ]

    return{
        //获取未结算列表
        getUnsettlement : function () {
            return Unsettlement;
        },

        //获取每月结算日
        getSettlementDate : function () {
            return settlementDate;
        }
    }
});

