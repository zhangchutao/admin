/**
 * Created by chutaozhang on 2017/3/8.
 */
'use strict';

var myApp = angular.module('myapp', [
    'ngStorage',
    'ui.router',
    'oc.lazyLoad',
    'ngMessages',
    'ngFileUpload',
    'myapp'
    // 'ng.ueditor'
]).config(
    [
        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
            myApp.controller = $controllerProvider.register;
            myApp.directive = $compileProvider.directive;
            myApp.filter = $filterProvider.register;
            myApp.factory = $provide.factory;
            myApp.service = $provide.service;
            myApp.constant = $provide.constant;
            myApp.value = $provide.value;
        }
    ])