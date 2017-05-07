/**
 * 表单验证相关指令
 */
'use strict';
/***
 validation module
 有关表单验证
 ***/

//**********************数字验证
var INTEGER_REGEXP = /^\-?\d+$/;
myApp.directive('integer', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.integer = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                if (INTEGER_REGEXP.test(viewValue)) {
                    // 匹配成功，直接ruturn
                    return true;
                }
                // it is invalid
                return false;
            };
        }
    };
});
//特殊字符  （只能是英文、中文、数字和下划线）
var ADRR_REGEXP=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
myApp.directive('specialchar',function(){
    return {
        require:'ngModel',
        link:function(scope,elem,attr,ctrl){
            ctrl.$validators.specialchar = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                if (ADRR_REGEXP.test(viewValue)) {  //test()函数返回一个布尔值，用于指示在所搜索的字符串中是否存在正则表达式模式对应的匹配
                    // it is valid
                    return true;
                }
                // it is invalid
                return false;
            };
        }
    }
});
//*************************qq验证
var QQ_REGEXP=/^[1-9]{1}\d{5,18}$/;
myApp.directive('qq', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.qq = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }

                if (QQ_REGEXP.test(viewValue)) {
                    // it is valid
                    return true;
                }

                // it is invalid
                return false;
            };
        }
    };
});

//**************************手机号码或固定电话验证
var CN_PHONE_REGEXP = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
myApp.directive('phone', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            //这里的
            ctrl.$validators.phone = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                if (CN_PHONE_REGEXP.test(viewValue)) {
                    // it is valid
                    return true;
                }
                // it is invalid
                return false;
            };
        }
    };
});

//***********************中国身份证号验证
var CN_ID_REGEXP_SIMPLE1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
var CN_ID_REGEXP_SIMPLE2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
myApp.directive('idcard', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.idcard = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                if (CN_ID_REGEXP_SIMPLE1.test(viewValue) || CN_ID_REGEXP_SIMPLE2.test(viewValue)) {
                    // it is valid
                    return true;
                }
                // it is invalid
                return false;
            };
        }
    };
});

//*****************银行卡验证
var BANK_REGEXP_SIMPLE1 = /^\d{16}$/;
var BANK_REGEXP_SIMPLE2 = /^\d{19}$/;
myApp.directive('bankcard', function(){
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.bankcard = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                if (BANK_REGEXP_SIMPLE1.test(viewValue) || BANK_REGEXP_SIMPLE2.test(viewValue)) {
                    // it is valid
                    return true;
                }
                // it is invalid
                return false;
            };
        }
    };
});

//*******************验证码
var VALIDACODE_REGEXP=/^\d{6}$/;
myApp.directive('validacode', function(){
    return{
        require:'ngModel',
        link:function(scope,elm,attrs,ctrl){
            ctrl.$validators.validacode= function(modelValue,viewValue){
                if(ctrl.$isEmpty(modelValue)){
                    return true;
                }
                if(VALIDACODE_REGEXP.test(viewValue)){
                    return true;
                }
                return false;
            }
        }
    }
});

//*************邮箱验证
var EMAIL_REGEXP = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$/;
myApp.directive('email', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.email = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                if (EMAIL_REGEXP.test(viewValue)) {
                    // it is valid
                    return true;
                }
                // it is invalid
                return false;
            };
        }
    };
});

//**************手机和邮箱
myApp.directive('emailphone', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.emailphone = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                if (EMAIL_REGEXP.test(viewValue)) {
                    // it is valid
                    return true;
                }
                if(CN_PHONE_REGEXP.test(viewValue)){
                    // it is invalid
                    return true;
                }
                return false;
            };
        }
    };
});

//*********************6~16位数字和字母组合的字符验证
var INTEGER_LETTER_REGEXP = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
myApp.directive('integerletter', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.integerletter = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                if (INTEGER_LETTER_REGEXP.test(viewValue)) {
                    // it is valid
                    return true;
                }
                // it is invalid
                return false;
            };
        }
    };
});

/*
 <input type="text" name="fruitName" ng-model="data.fruitName" blacklist="coconuts,bananas,pears" required/>
 */
myApp.directive('blacklist', function (){
    return {
        require: 'ngModel',
        link: function(scope, elem, attr, ngModel) {
            var blacklist = attr.blacklist.split(',');

            //For DOM -> model validation
            ngModel.$parsers.unshift(function(value) {
                var valid = blacklist.indexOf(value) === -1;
                ngModel.$setValidity('blacklist', valid);
                return valid ? value : undefined;
            });
            //For model -> DOM validation
            ngModel.$formatters.unshift(function(value) {
                ngModel.$setValidity('blacklist', blacklist.indexOf(value) === -1);
                return value;
            });
        }
    };
});

//****************字符匹配验证
myApp.directive('match', function ($parse){
    return {
        require: '?ngModel',
        restrict: 'A',
        link: function(scope, elem, attrs, ctrl) {
            if(!ctrl) {
                if(console && console.warn){
                    console.warn('Match validation requires ngModel to be on the element');
                }
                return;
            }
            var matchGetter = $parse(attrs.match);
            var caselessGetter = $parse(attrs.matchCaseless);
            var noMatchGetter = $parse(attrs.notMatch);

            scope.$watch(getMatchValue, function(){
                ctrl.$$parseAndValidate();
            });

            ctrl.$validators.match = function(){
                var match = getMatchValue();
                var notMatch = noMatchGetter(scope);
                var value;

                if(caselessGetter(scope)){
                    value = angular.lowercase(ctrl.$viewValue) === angular.lowercase(match);
                }else{
                    value = ctrl.$viewValue === match;
                }
                value ^= notMatch;
                return !!value;
            };
            function getMatchValue(){
                var match = matchGetter(scope);
                if(angular.isObject(match) && match.hasOwnProperty('$viewValue')){
                    match = match.$viewValue;
                }
                return match;
            }
        }
    };
});

// 限制数字输入
myApp.directive('validateNumber', ['$http', function  ($http) {
    return {
        restrict: "A",
        require: 'ngModel',
        scope: {
            format: "@",
        },
        link: function  (scope,ele,attr,ctrl) {
            ctrl.$validators.numberFormat = function(modelValue, viewValue) {
                var regex = new RegExp(scope.format);
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                
                if (regex.test(viewValue)) {
                    // it is valid
                    return true;
                }
                // it is invalid
                return false;
            }
        }
    }
}])


//ng-repeat渲染完毕监听
myApp.directive('onFinishRenderFilters', function ($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});

//默认图片
myApp.filter('upload', function ($rootScope) {
    return function (input) {
        if (input != null && input != "" && $rootScope.upload_domain != null) {
            return $rootScope.upload_domain + input;
        }
        return "backend/img/user-12.jpg";
    }
});