/**
 * Created by chutaozhang on 2017/4/25.
 */
myApp.factory('mianService' , function () {
    var accountInfo = {
        account:'zhangchutao@qq.com',
        name:'天赐',
        phone:13246707010,
        avatar:'',
    }
    ;

    return{
        // 获取账号信息
        getAccountInfo : function () {
            return accountInfo;
        },

    }
})