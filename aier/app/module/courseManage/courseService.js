/**
 * Created by chutaozhang on 2017/4/21.
 *
 * 课程管理服务
 */
myApp.factory('courseList' , function () {
    var courseList = [
        {id:'1' , name:'小马快跑pony课' , institution:'小马快跑' , desc:'pony课时非常非常好的早教课' , pirce:99 , marketPrice:199 , creatTime:'2016-12-04'},
        {id:'2' , name:'小马快跑pony课' , institution:'小马快跑' , desc:'pony课时非常非常好的早教课' , pirce:99 , marketPrice:199 , creatTime:'2016-12-04'},
        {id:'3' , name:'小马快跑pony课' , institution:'小马快跑' , desc:'pony课时非常非常好的早教课' , pirce:99 , marketPrice:199 , creatTime:'2016-12-04'},
        {id:'4' , name:'小马快跑pony课' , institution:'小马快跑' , desc:'pony课时非常非常好的早教课' , pirce:99 , marketPrice:199 , creatTime:'2016-12-04'},
        {id:'5' , name:'小马快跑pony课' , institution:'小马快跑' , desc:'pony课时非常非常好的早教课' , pirce:99 , marketPrice:199 , creatTime:'2016-12-04'},
        {id:'6' , name:'小马快跑pony课' , institution:'小马快跑' , desc:'pony课时非常非常好的早教课' , pirce:99 , marketPrice:199 , creatTime:'2016-12-04'},
    ];

    var institutionSelect = [
        {id:'0' , text:'全部' , vaule:''},
        {id:'1' , text:'科瑞机器人' , vaule:'科瑞机器人'},
        {id:'2' , text:'小马快跑' , vaule:'小马快跑'},
        {id:'3' , text:'多多熊' , vaule:'多多熊'},
    ]
    return{
        //    获取表格列表数据
        getCourseList : function () {
            return courseList;
        },

        getInstitutionSelect : function () {
            return institutionSelect;
        }

    }
})

//添加课程
myApp.factory('addCourse' , function () {
    //获取所属机构
    var institutionSelect = [
        {id:'1' , text:'科瑞机器人'},
        {id:'2' , text:'小马快跑'},
        {id:'3' , text:'多多熊'},
    ]
    return{
        //获取所属机构
        getInstitutionSelect : function () {
            return institutionSelect;
        }

    }
});

//课程编辑
myApp.factory('editCourse' , function () {
    //获取所属机构
    var institutionSelect = [
        {id:'1' , text:'科瑞机器人'},
        {id:'2' , text:'小马快跑'},
        {id:'3' , text:'多多熊'},
    ]
    //获取课程详情
    var courseData ={
        courseName:'小马快跑pony课程',
        institution:'小马快跑',
        institutionId:'2',
        intr:'小马快跑小马快跑是',
        price:120,           //课程价格
        marketPrice:300,     //时长价格
        type:'试听课',
        courseDuration:3600,  //时长
        lesson:3,          //课时
        isTrial:'yes',         //试听课
        age:'0-6',             //年龄阶段
        teacher:'师资力量非常强大',         //师资力量
        courseFeature:'外教教学 | 提高专注力',  //课程特征
        tags:'消费提示消费提示',
        detail:'link',          //图文详情
        detail_link:'http://www.baidu.com',
        detail_note:'',
        detail_imgs:'',
        imgs:''
    }
    return{
        //获取所属机构
        getCourseData : function () {
            return courseData;
        },

        getInstitutionSelect : function(){
            return institutionSelect;
        }

    }
});

