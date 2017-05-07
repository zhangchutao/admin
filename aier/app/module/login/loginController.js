/**
 * Created by chutaozhang on 2017/4/13.
 */

myApp.controller('LoginController' , ['$scope' , '$state' ,'login' , function ($scope , $state , login) {
    $scope.loginData = {
        account:'',
        password:'',
        isCheck:false,
        errorrMes:'',
        showError:false,
    }

    $scope.login = function () {
        //逻辑:直接调用请求接口,成功跳转到默认页面,失败给errorrMes赋值,并showErrorr为true,
        $scope.loginData.showError = false;
        $scope.loginData.password = hex_md5($scope.loginData.password);
        $state.go("app.institution.list");
        // var apiret = api.act("auth/login", {
        //     account: $scope.loginData.account,
        //     password: $scope.loginData.password
        // }).then(function (ret) {
        //     if (ret.ecode == 200) {
        //         $state.go("app.institution.list")
        //     } else {
        //         $scope.loginData.errorrMes = ret.message;
        //         $scope.loginData.showError = true
        //         // sysui.error(ret.message)
        //     }
        // })

    }
}])