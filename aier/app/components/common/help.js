/**
 * Created by chutaozhang on 2017/4/22.
 *
 *
 */

//给数组对象定义方法
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};


//时间装换
function get_unix_time(dateStr) {
    var newstr = dateStr.replace(/-/g, '-');
    var date = new Date(newstr);
    var time_str = date.getTime().toString();
    return time_str.substr(0, 10);
}


//
//绑定字典内容到指定的Select控件
function BindSelect(ctrlName, data) {
    var control = $('#' + ctrlName);
    //设置Select2的处理
    control.select2({
        allowClear: true,
        formatResult: formatResult,
        formatSelection: formatSelection,
        escapeMarkup: function (m) {
            return m;
        }
    });

    //绑定Ajax的内容
    control.empty();//清空下拉框
    console.log(data);
    $.each(data, function (i, item) {

        control.append("<option value='" + item.id + "'>&nbsp;" + item.text + "</option>");
    });
}
