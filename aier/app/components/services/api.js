
myApp.service('api', function ($http, $q, $localStorage, Upload, $state) {
        this.debug = function (msg) {
            if (getEnv().debug) {
                console.log('[DEBUG]', msg);
            }
        };
        /**
         * 执行API请求
         * @param act 请求的接口名称
         * @param query 请求的数组
         * @returns Promise{*}
         */
        this.act = function (act, query) {
            var url = getEnv().server + "/" + getEnv().module + "/" + act;
            var query_id = S4();
            var params = {
                device_id: $localStorage.uuid,
                client_type: 'web',
                version: getEnv().version,
                query_id: query_id,
                data: JSON.stringify(query)
            };
            var defer = $q.defer();
            if (getEnv().debug) {
                console.log('[REQUEST]', query_id, url, params);
            }
            $http.post(url, params)
                .success(function (data) {
                    if (getEnv().debug) {
                        console.log('[RESPONSE]', data.query_id, data);
                    }
                    switch (data.ecode) {
                        case 120004:
                            $state.go("login");
                            defer.reject(data);
                            break;
                        default :
                            defer.resolve(data);
                    }
                })
                .error(function () {
                    console.log('网络请求发生错误');
                });
            return defer.promise;
        };

        var S4 = function () {
            return (((1 + Math.random()) * 0x10000 * Date.parse(new Date())) | 0).toString(16).substring(1);
        };
        /**
         * 生成客户端唯一UUID
         * @returns {string}
         */
        this.genuuid = function () {
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        };

        /**
         * 上传请求
         * @param file 文件框
         * @param path 服务器存储位置
         * @returns Obj{*} 可调用.success().error()
         */
        this.upload = function (file, path) {
            var params = {
                device_id: $localStorage.uuid,
                client_type: getEnv().module.toLowerCase(),
                version: getEnv().version,
                os_info: 'browser',
                model: 'computer',
                network: 'wifi',
                channel: 'offical',
                data: JSON.stringify({path: path})
            };
            if (file && !file.$error) {
                params = {
                    url: getEnv().server + "/" + getEnv().module + '/upload',
                    file: file,
                    fields: params,
                    sendFieldsAs: 'json-blob',
                    method: 'POST'
                };
                if (getEnv().debug) {
                    console.log('[UPLOAD]', params);
                }
                return Upload.upload(params);
            } else {
                return false;
            }
        }
    });
