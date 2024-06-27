var d = new Date();
var year = d.getFullYear();
var date = d.getDate();
var month = d.getMonth();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
var time = date+""+month+""+year+""+hour+""+minute+""+second;
var a = {
    TIME: time
}
export {a}
