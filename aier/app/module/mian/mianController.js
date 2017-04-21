/**
 * Created by chutaozhang on 2017/4/19.
 */

//退出登录
myApp.controller('appController' , ['$scope' , '$state' , '$rootScope' , function ($scope , $state , $rootScope) {
    //ngInclude内容重新加载的时候触发事件
    $scope.$on('$includeContentLoaded', function() {
        //最大限度滑动
        handleSlimScroll();
    });
    //ngView内容被重新加载时,
    $scope.$on('$viewContentLoaded', function() {
    });
    //路由状态变化发生前触发的事件
    $scope.$on('$stateChangeStart', function() {
        // reset layout setting
        //已加载该页面的时候,滑到最顶部
        App.scrollTop();
        $('.pace .pace-progress').addClass('hide');
        $('.pace').removeClass('pace-inactive');
    });
    //路由状态变化正确触发事件
    $scope.$on('$stateChangeSuccess', function() {
        //重新启动pack
        Pace.restart();
        App.initPageLoad();
        App.initSidebarSelection();
        App.initSidebarMobileSelection();
        setTimeout(function() {
            App.initLocalStorage();
            App.initComponent();
        },0);
    });
    //路由状态没找到的时候触发事件
    $scope.$on('$stateNotFound', function() {
        Pace.stop();
    });
    //路由状态变化发生错误时触发事件
    $scope.$on('$stateChangeError', function() {
        Pace.stop();
    });

    //这个根路由,路由的每次跳转都会执行该控制器,所以在这里判断是否登录过,如果没有登录则跳转到的登录界面
    console.log('每次路由的跳转都会执行该控制器,在这里判断是否登录')

}])

myApp.controller('pageLoaderController', function($scope, $rootScope, $state) {
    App.initPageLoad(); //该方法是隐藏加载框
});

//头部控制器
myApp.controller('headerController', function($scope, $rootScope, $state) {
        console.log('头部控制器');

        //退出登录点击事件
        $scope.LoginOut = function () {
            //逻辑,调用退出接口 , 成功,跳转到的登录界面
            $state.go('login');
        }

});

//左侧菜单控制器
myApp.controller('sidebarController', function($scope, $rootScope, $state) {
    App.initSidebar();
});

//更改密码
myApp.controller('ChangePasswordController' , ['$scope' , '$state' , function ($scope , $state) {
    $scope.changPasswordData = {
        curPassword:'',
        newPassword:'',
        aNewPassword:'',
        errorMes:'',
        showError:false,
    }
    console.log('更改密码');

    $scope.changPassword = function () {
        //将密码加密,然后调用接口,
        // 成功,将输入框的值清空
        // 失败,给errorMes赋值,给showError赋值为true

    }

}])

//资料设置
myApp.controller('DataSettingController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('资料设置')

    $scope.dataSettingData = {
        account:'',
        name:'',
        phoneNum:'',
        imgUrl:'',
    }

    //
}])


