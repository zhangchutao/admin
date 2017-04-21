/**
 * Created by chutaozhang on 2017/4/13.
 *
 * 路由模块
 */

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/institution/list');

    $stateProvider
        .state('root',{
            abstract:true,
            template:'<ui-view></ui-view>',
            controller: function ($localStorage, api) {
                if (!$localStorage.uuid) {
                    $localStorage.uuid = api.genuuid();
                }
            },
        })

        //登录
        .state('login',{
            parent:'root',
            url:'/login',
            templateUrl:'app/module/login/login.html',
            controller:'LoginController',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/js/md5.js',
                        ]
                    });
                }]
            }

        })


        .state('app', {
            url: '/app',
            parent:'root',
            templateUrl: 'app/templates/app.html',
            abstract: true,
            // controller:'AppController',
        })

        //机构管理
        .state('app.institution', {
            url: '/institution',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.institution.list', {
            url: '/list',
            templateUrl: 'app/module/institutionManage/list.html',
            data: { pageTitle: '机构列表' },
            controller:'InstitutionListController',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.institution.add', {
            url: '/add',
            templateUrl: 'app/module/institutionManage/edit.html',
            data: { pageTitle: '添加机构' },
            controller:'AddInstitutionController',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/jquery-tag-it/css/jquery.tagit.css',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/select2/dist/js/select2.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.institution.edit', {
            url: '/edit?id',
            templateUrl: 'app/module/institutionManage/edit.html',
            data: { pageTitle: '编辑机构' },
            controller:'EditInstitutionController',
        })

        //课程管理
        .state('app.course', {
            url: '/course',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.course.list', {
            url: '/list',
            data: { pageTitle: '课程列表' },
            templateUrl: 'app/module/courseManage/list.html',
            controller:'CourseListController',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.course.add', {
            url: '/add',
            data: { pageTitle: '添加课程' },
            templateUrl: 'app/module/courseManage/add.html',
            controller:'AddCourseController',
        })
        .state('app.course.edit', {
            url: '/edit',
            data: { pageTitle: '课程编辑' },
            templateUrl: 'app/module/courseManage/add.html',
            controller:'EditCourseController',
        })

        //活动管理
        .state('app.activity', {
            url: '/activity',
            template: '<div ui-view></div>',
            abstract: true,
        })
        .state('app.activity.list', {
            url: '/list',
            data: { pageTitle: '活动列表' },
            templateUrl: 'app/module/activityManage/list.html',
            controller:'ActivityListController',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.activity.add', {
            url: '/add',
            data: { pageTitle: '添加活动' },
            templateUrl: 'app/module/activityManage/add.html',
            controller:'AddActivityController',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/summernote/summernote.css',
                            'assets/plugins/summernote/summernote.min.js',
                            'assets/plugins/summernote/lang/summernote-zh-CN.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.activity.edit', {
            url: '/edit',
            data: { pageTitle: '活动编辑' },
            templateUrl: 'app/module/activityManage/add.html',
            controller:'EditActivityController',
        })

        //品牌管理
        .state('app.brand', {
            url: '/offer',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.brand.list', {
            url: '/list',
            data: { pageTitle: '优惠列表' },
            templateUrl: 'app/module/brandManage/list.html',
            controller:'BrandListController',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.brand.add', {
            url: '/add',
            data: { pageTitle: '添加品牌' },
            templateUrl: 'app/module/brandManage/add.html',
            controller:'AddBrandController',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/summernote/summernote.css',
                            'assets/plugins/summernote/summernote.min.js',
                            'assets/plugins/summernote/lang/summernote-zh-CN.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.brand.edit', {
            url: '/edit',
            data: { pageTitle: '品牌编辑' },
            templateUrl: 'app/module/brandManage/add.html',
            controller:'EditBrandController',
        })

        //优惠码管理
        .state('app.offerCode', {
            url: '/offerCode',
            template: '<div ui-view></div>',
            abstract: true,
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.offerCode.list', {
            url: '/list',
            data: { pageTitle: '优惠码列表' },
            templateUrl: 'app/module/offerCodeManage/list.html',
            controller:'OfferCodeListController',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.offerCode.add', {
            url: '/add',
            data: { pageTitle: '添加优惠码' },
            templateUrl: 'app/module/offerCodeManage/add.html',
            controller:'AddOfferCodeController',
        })
        .state('app.offerCode.edit', {
            url: '/edit',
            data: { pageTitle: '优惠码编辑' },
            templateUrl: 'app/module/offerCodeManage/add.html',
            controller:'EditOfferCodeController',
        })
        .state('app.offerCode.release', {
            url: '/release',
            data: { pageTitle: '优惠码发放' },
            templateUrl: 'app/module/offerCodeManage/release.html',
            controller:'ReleaseOfferCodeController',

        })

        //运营推荐管理
        .state('app.operation', {
            url: '/operation',
            template: '<div ui-view></div>',
            abstract: true,
        })
        .state('app.operation.carousel', {
            url: '/carousel',
            data: { pageTitle: '首页轮播图' },
            templateUrl: 'app/module/operationManage/carousel.html',
            controller:'CarouselController',
        })
        .state('app.operation.recommendBrand', {
            url: '/recommendCourse',
            data: { pageTitle: '推荐品牌' },
            templateUrl: 'app/module/operationManage/recommendBrand.html',
            controller:'RecommendBrandController',
        })
        .state('app.operation.popularActivities', {
            url: '/popularActivities',
            data: { pageTitle: '热门活动' },
            templateUrl: 'app/module/operationManage/popularActivities.html',
            controller:'PopularActivitiesController',
        })
        .state('app.operation.editPopularActivities', {
            url: '/editPopularActivities',
            data: { pageTitle: '热门活动编辑' },
            templateUrl: 'app/module/operationManage/editPopularActivities.html',
            controller:'EditPopularActivitiesController',
        })
        .state('app.operation.popularCourse', {
            url: '/popularCourse',
            data: { pageTitle: '热门课程' },
            templateUrl: 'app/module/operationManage/popularCourse.html',
            controller:'PopularCourseController',
        })

        //消息管理
        .state('app.news', {
            url: '/news',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.news.list', {
            url: '/list',
            data: { pageTitle: '消息列表' },
            templateUrl: 'app/module/newsManage/list.html',
            controller:'NewsListController',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.news.push', {
            url: '/push',
            data: { pageTitle: '消息推送' },
            templateUrl: 'app/module/newsManage/push.html',
            controller:'PushNewsController',
        })
        .state('app.news.detail', {
            url: '/detail',
            data: { pageTitle: '消息详情' },
            templateUrl: 'app/module/newsManage/detail.html',
            controller:'NewsDetailController',
        })

        //用户管理
        .state('app.user', {
            url: '/user',
            template: '<div ui-view></div>',
            abstract: true,
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.user.userList', {
            url: '/userList',
            data: { pageTitle: '用户列表' },
            templateUrl: 'app/module/userManage/userList.html',
            controller:'UserListController',
        })
        .state('app.user.reservationList', {
            url: '/reservationList',
            data: { pageTitle: '预约管理' },
            templateUrl: 'app/module/userManage/reservationList.html',
            controller:'ReservationListController',
        })
        .state('app.user.feedbackList', {
            url: '/feedbackList',
            data: { pageTitle: '用户反馈' },
            templateUrl: 'app/module/userManage/feedbackList.html',
            controller:'FeedbackListController',
        })


        //订单管理
        .state('app.order', {
            url: '/order',
            data: { pageTitle: '订单管理' },
            templateUrl: 'app/module/orderManage/list.html',
            controller:'OrderListController',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                        ]
                    });
                }]
            }
        })
        .state('app.detail', {
            url: '/order',
            data: { pageTitle: '订单详情' },
            templateUrl: 'app/module/orderManage/detail.html',
            controller:'OrderDetailController',
        })

        //系统管理
        .state('app.system', {
            url: '/user',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.system.list', {
        url: '/list',
        data: { pageTitle: '管理员列表' },
        templateUrl: 'app/module/systemManage/list.html',
        controller:'ManageListController',
        resolve: {
            service: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    serie: true,
                    files: [
                        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                        'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                        'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                        'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                        'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                        'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                        'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                    ]
                });
            }]
        }
        })
        .state('app.system.add', {
            url: '/add',
            data: { pageTitle: '添加管理员' },
            templateUrl: 'app/module/systemManage/add.html',
            controller:'AddManageController',
        })

        //个人设置
        .state('app.changePassword', {
            url: '/changePassword',
            data: { pageTitle: '修改密码' },
            templateUrl: 'app/module/mian/changePassword.html',
            controller:'ChangePasswordController',
        })

        .state('app.dataSetting', {
            url: '/dataSetting',
            data: { pageTitle: '修改密码' },
            templateUrl: 'app/module/mian/dataSetting.html',
            controller:'DataSettingController',
        })
}]);

myApp.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$state = $state;
    // $rootScope.setting = setting;
}]);