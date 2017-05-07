/**
 * Created by chutaozhang on 2017/4/19.
 * 机构管理服务
 */
myApp.factory('operationManage' , function () {
    var  course= [
        {id:1 , text:'小马快跑'},
        {id:2 , text:'科瑞机器人'},
        {id:3 , text:'多多熊'},
        {id:4 , text:'七田真'},
    ];

    var brand = [
        {id:1 , text:'小马快跑'},
        {id:2 , text:'科瑞机器人'},
        {id:3 , text:'多多熊'},
        {id:4 , text:'七田真'},];


    var popularCourse = [
        {sort:1 , course:'小马快跑' , courseId:'2'},
        {sort:2 , course:'多多熊' , courseId:'1'},
        {sort:3 , course:'七田真' , courseId:'3'},
    ];

    var popularActivity = [
        {sort:1 , activityId:1},
        {sort:2 , activityId:3},
        {sort:3 , activityId:2},
    ];

    var recommendBrand = [
        {id:'1' , sort:1 ,img:'https://files.ier100.com/b/index_ads_imgs/d34e6e710cbb6d2121bb888ffb7b7f00.jpeg' , brandId:1 , brand:'小马快跑'},
        {id:'2' , sort:2 ,img:'https://files.ier100.com/b/index_ads_imgs/d34e6e710cbb6d2121bb888ffb7b7f00.jpeg' , brandId:3 , brand:'科瑞机器人'},
        {id:'3' , sort:3 ,img:'https://files.ier100.com/b/index_ads_imgs/d34e6e710cbb6d2121bb888ffb7b7f00.jpeg' , brandId:2 , brand:'多多熊'},
        {id:'4' , sort:4 ,img:'https://files.ier100.com/b/index_ads_imgs/d34e6e710cbb6d2121bb888ffb7b7f00.jpeg' , brandId:4 , brand:'七田真'},
    ]


    return{
        //获取课程选项
        getCourse : function () {
            return course;
        },

        //获取品牌
        getBran : function () {
            return brand;
        },

        //获取热门课程
        getPopularCourse : function () {
            return popularCourse;
        },
        //获取热门活动
        getPopularActivity : function () {
            return popularActivity;
        },

        //获取推荐品牌
        getRecommendBrand : function () {
            return recommendBrand;
        }
    }
})

