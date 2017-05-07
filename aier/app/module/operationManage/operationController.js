/**
 * Created by chutaozhang on 2017/4/13.
 */

//首页轮播图
myApp.controller('CarouselController' , ['$scope' , '$state' , function ($scope , $state) {
    console.log('首页轮播图')
}])

//推荐课程
myApp.controller('RecommendBrandController' , [
    '$scope' ,
    '$state' ,
    'operationManage' ,
    function ($scope , $state , operationManage) {

        $scope.shoeAdd = false;
        $scope.brand = operationManage.getBran();                   //获取品牌
        $scope.recommendBrand = operationManage.getRecommendBrand();//获取推荐品牌
        $scope.addRecommendBrandArr = [];                            //新添加推荐课程

        //新廷加条目渲染完毕监听
        $scope.$on('ngRepeatFinished' , function (ngRepeatFinishedEvent) {
            for(var i = 0 ; i < $scope.addRecommendBrandArr.length ; i++){
                var id = "#recommendBrand"+i;
                $(id).select2({
                    allowClear: false,
                    minimumResultsForSearch: Infinity,
                    data:$scope.brand,
                    placeholder: '请选择所属品牌',
                });
                // $(id).select2("val", 选项的id); //设置默认值
            }
        })

        //添加热门课程事件
        $scope.everListener = {
            //添加事件
            addPopularCourse : function (files) {
                if (!files || !files.length) {
                    return;
                }
                $scope.shoeAdd = true;      //显示添加的容器
                $scope.addRecommendBrandInfo = {id:'' , sort:'' ,img:files , brandId:'' , brand:''};
                $scope.addRecommendBrandArr.push($scope.addRecommendBrandInfo);
            },

            //删除事件 ,第一个参数:是条目的id, 第二个参数:布尔类型,是的新添加的条目还是原本的条目
            delBrand : function (data , flag) {
                if(flag){       //true 为之前添加的条目
                    $scope.recommendBrand.remove(data) ;      //remove 方法是自己给数组对象定义的,在的array.js
                }else{
                    $scope.addRecommendBrandArr.remove(data) ;
                }
            },

            //保存点击按钮
            save : function () {
                //获取每条新添加的条目的值
                for(var i = 0 ; i < $scope.addRecommendBrandArr.length ; i++){
                    $scope.addRecommendBrandArr[i].brand = $("#recommendBrand"+i).select2("data")[0].text;
                }
                console.log($scope.recommendBrand);
                console.log($scope.addRecommendBrandArr);
            }
        }


}])

//热门活动
myApp.controller('PopularActivitiesController' , [
    '$scope' ,
    '$state' ,
    'operationManage',
    function ($scope , $state , operationManage) {

        $scope.shoeAdd = false;
        $scope.popularActivity = operationManage.getPopularActivity();  //获取热门活动
        $scope.addPopularActivityArr = [];                            //新添加热门活动的数组
        console.log($scope.popularActivity);

        //添加热门事件
        $scope.everListener = {
            //添加事件
            addPopularActivity : function () {
                console.log('择地')
                $scope.shoeAdd = true;      //显示添加的容器
                $scope.addActivityInfo = {sort:'' , activityId:''};
                $scope.addPopularActivityArr.push($scope.addActivityInfo);
            },

            //删除事件 ,第一个参数:是条目的id, 第二个参数:布尔类型,是的新添加的条目还是原本的条目
            delActivity : function (data , flag) {
                if(flag){       //true 为之前添加的条目
                    $scope.popularActivity.remove(data) ;      //remove 方法是自己给数组对象定义的,在的array.js
                }else{
                    $scope.popularActivity.remove(data) ;
                }
            },

            //保存点击按钮
            save : function () {
                console.log($scope.popularActivity);
                console.log($scope.addPopularActivityArr);
            }
        }
}])

//热门活动编辑
myApp.controller('EditPopularActivitiesController' , [
    '$scope' ,
    '$state' ,
    'operationManage',
    function ($scope , $state , operationManage) {

}])

//热门课程
myApp.controller('PopularCourseController' , [
    '$scope' ,
    '$state' ,
    'operationManage' ,
    '$timeout' ,
    function ($scope , $state , operationManage , $timeout) {

        $scope.shoeAdd = false;
        $scope.course = operationManage.getCourse();                //获取课程
        $scope.popularCourse = operationManage.getPopularCourse();  //获取热门课程
        $scope.addPopularCourseArr = [];                            //新添加课程的数组

        //新廷加条目渲染完毕监听
        $scope.$on('ngRepeatFinished' , function (ngRepeatFinishedEvent) {
            for(var i = 0 ; i < $scope.addPopularCourseArr.length ; i++){
                var id = "#popularCourse"+i;
                $(id).select2({
                    allowClear: false,
                    minimumResultsForSearch: Infinity,
                    data:$scope.course,
                    placeholder: '请选择所属品牌',
                });
                // $(id).select2("val", 选项的id); //设置默认值
            }
        })

        //添加热门课程事件
        $scope.everListener = {
            //添加事件
            addPopularCourse : function () {
            $scope.shoeAdd = true;      //显示添加的容器
            $scope.addCourseInfo = {sort:'' , course:'' , courseId:''}
            $scope.addPopularCourseArr.push($scope.addCourseInfo);
            },

            //删除事件 ,第一个参数:是条目的id, 第二个参数:布尔类型,是的新添加的条目还是原本的条目
            delCourse : function (data , flag) {
                if(flag){       //true 为之前添加的条目
                    $scope.popularCourse.remove(data) ;      //remove 方法是自己给数组对象定义的,在的array.js
                }else{
                    $scope.addPopularCourseArr.remove(data) ;
                }
            },

            //保存点击按钮
            save : function () {
                //获取每条新添加的条目的值
                for(var i = 0 ; i < $scope.addPopularCourseArr.length ; i++){
                    $scope.addPopularCourseArr[i].course = $("#popularCourse"+i).select2("data")[0].text;
                }
                console.log($scope.popularCourse);
                console.log($scope.addPopularCourseArr);
            }
        }



}])