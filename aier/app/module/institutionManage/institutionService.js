/**
 * Created by chutaozhang on 2017/4/19.
 * 机构管理服务
 */
myApp.factory('institutionList' , function () {
    var institutionListData = [
        {id:'1' , name:'科瑞机器人' , area:'南山区' , business:'海岸城' , approve:false , phone:'13246707010' , creatTime:'2016-12-04'},
        {id:'2' , name:'科瑞机器人' , area:'南山区' , business:'海岸城' , approve:false , phone:'13246707010' , creatTime:'2016-12-04'},
        {id:'3' , name:'科瑞机器人' , area:'南山区' , business:'海岸城' , approve:false , phone:'13246707010' , creatTime:'2016-12-04'},
        {id:'4' , name:'科瑞机器人' , area:'南山区' , business:'海岸城' , approve:false , phone:'13246707010' , creatTime:'2016-12-04'},
        {id:'5' , name:'小马快跑' , area:'南山区' , business:'海岸城' , approve:false , phone:'13246707010' , creatTime:'2016-12-04'},
        {id:'6' , name:'科瑞机器人' , area:'南山区' , business:'海岸城' , approve:false , phone:'13246707010' , creatTime:'2016-12-04'},
        {id:'7' , name:'科瑞机器人' , area:'南山区' , business:'海岸城' , approve:false , phone:'13246707010' , creatTime:'2016-12-04'},
        {id:'8' , name:'科瑞机器人' , area:'南山区' , business:'海岸城' , approve:false , phone:'13246707010' , creatTime:'2016-12-04'},
    ];

    var institutionSelect = [
        {id:'1' , institution:'科瑞机器人'},
        {id:'2' , institution:'小马快跑'},
        {id:'3' , institution:'多多熊'},
    ]
    return{
        //    获取表格列表数据
        getListData : function () {
            return institutionListData;
        },

        getInstitutionSelect : function () {
            return institutionSelect;
        }

    }
})


myApp.factory('institutionData' , function () {
    var getBrand = [
        {id:'1' , text:'科瑞机器人'},
        {id:'1' , text:'小马快跑'},
        {id:'1' , text:'多多熊'},
    ];
    var getBusiness =[
        {
            "id": 1,
            "name": "深圳市",
            "sub": [
                {
                    "id": 2,
                    "name": "罗湖区",
                    "sub": [
                        {
                            "id": 12,
                            "name": "国贸/金光华"
                        },
                        {
                            "id": 13,
                            "name": "东门/水贝"
                        },
                        {
                            "id": 14,
                            "name": "万象城/Kkmall"
                        },
                        {
                            "id": 15,
                            "name": "笋岗/银湖"
                        },
                        {
                            "id": 16,
                            "name": "翠竹/东湖"
                        },
                        {
                            "id": 17,
                            "name": "莲塘/梧桐山"
                        },
                        {
                            "id": 18,
                            "name": "黄贝岭/田贝"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "福田区",
                    "sub": [
                        {
                            "id": 19,
                            "name": "市民中心"
                        },
                        {
                            "id": 20,
                            "name": "香蜜湖"
                        },
                        {
                            "id": 21,
                            "name": "华强北/华强南"
                        },
                        {
                            "id": 22,
                            "name": "上沙/下沙"
                        },
                        {
                            "id": 23,
                            "name": "益田/福田保税区"
                        },
                        {
                            "id": 24,
                            "name": "车公庙/竹子林"
                        },
                        {
                            "id": 25,
                            "name": "景田"
                        },
                        {
                            "id": 26,
                            "name": "八卦岭/园岭"
                        },
                        {
                            "id": 27,
                            "name": "皇岗/水围"
                        },
                        {
                            "id": 28,
                            "name": "梅林"
                        },
                        {
                            "id": 29,
                            "name": "新洲/石厦"
                        },
                        {
                            "id": 30,
                            "name": "CBD中心区"
                        },
                        {
                            "id": 31,
                            "name": "荔枝公园片区"
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "南山区",
                    "sub": [
                        {
                            "id": 32,
                            "name": "华侨城"
                        },
                        {
                            "id": 33,
                            "name": "白石洲/益田假日"
                        },
                        {
                            "id": 34,
                            "name": "科技园"
                        },
                        {
                            "id": 35,
                            "name": "欢乐海岸"
                        },
                        {
                            "id": 36,
                            "name": "南山中心区/海岸城"
                        },
                        {
                            "id": 37,
                            "name": "南头/桃园"
                        },
                        {
                            "id": 38,
                            "name": "前海"
                        },
                        {
                            "id": 39,
                            "name": "南油"
                        },
                        {
                            "id": 40,
                            "name": "蛇口/后海"
                        },
                        {
                            "id": 41,
                            "name": "西丽"
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "宝安区",
                    "sub": [
                        {
                            "id": 42,
                            "name": "宝安中心区"
                        },
                        {
                            "id": 43,
                            "name": "西乡"
                        },
                        {
                            "id": 44,
                            "name": "灵芝"
                        },
                        {
                            "id": 45,
                            "name": "新安"
                        },
                        {
                            "id": 46,
                            "name": "沙井"
                        },
                        {
                            "id": 47,
                            "name": "福永"
                        },
                        {
                            "id": 48,
                            "name": "石岩"
                        },
                        {
                            "id": 49,
                            "name": "固戍/桃源居"
                        },
                        {
                            "id": 50,
                            "name": "松岗"
                        },
                        {
                            "id": 51,
                            "name": "翻身"
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "龙岗区",
                    "sub": [
                        {
                            "id": 52,
                            "name": "龙岗中心区"
                        },
                        {
                            "id": 53,
                            "name": "布吉"
                        },
                        {
                            "id": 54,
                            "name": "坂田"
                        },
                        {
                            "id": 55,
                            "name": "横岗"
                        },
                        {
                            "id": 56,
                            "name": "平湖"
                        },
                        {
                            "id": 57,
                            "name": "大运"
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "盐田区",
                    "sub": [
                        {
                            "id": 58,
                            "name": "盐田"
                        }
                    ]
                },
                {
                    "id": 8,
                    "name": "龙华新区",
                    "sub": [
                        {
                            "id": 59,
                            "name": "民治"
                        },
                        {
                            "id": 60,
                            "name": "梅林关"
                        },
                        {
                            "id": 61,
                            "name": "观澜"
                        },
                        {
                            "id": 62,
                            "name": "大浪"
                        },
                        {
                            "id": 63,
                            "name": "龙华"
                        }
                    ]
                },
                {
                    "id": 9,
                    "name": "光明新区",
                    "sub": [
                        {
                            "id": 64,
                            "name": "公明"
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "大鹏新区",
                    "sub": [
                        {
                            "id": 65,
                            "name": "大鹏"
                        }
                    ]
                },
                {
                    "id": 11,
                    "name": "坪山新区",
                    "sub": [
                        {
                            "id": 66,
                            "name": "坪山"
                        }
                    ]
                }
            ]
        }
    ];
    var tags = [
        { id:"1",text: "亲子"},
        { id:"2",text: "幼儿教育"},
        { id:"3",text: "大脑开发"},
        { id:"4",text: "艺术启蒙"},
        { id:"5",text: "体适能"},
        { id:"6",text: "机器人"},
    ];
    return{
        //获取品牌
        getBrand : function () {
            return getBrand;
        },

        //获取商圈
        getBusiness : function () {
            return getBusiness;
        },

        getTags : function () {
            return tags;
        }

    }
})