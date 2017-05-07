/**
 * Created by chutaozhang on 2017/4/13.
 */

//自助对账
myApp.controller('SelfListController' , [
    '$scope' ,
    '$state' ,
    'selfList',
    function ($scope , $state , selfList) {
        //进入控制器之前要判断是用户是否是机构用户,否者跳转到首页()

        $scope.Unsettlement = selfList.getUnsettlement();   //获取未结算
        $scope.settlementDate = selfList.getSettlementDate(); //获取每月结算金额


}])
