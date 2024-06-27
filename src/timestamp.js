var d = new Date();
var year = d.getFullYear();
var date = d.getDate();
var month = d.getMonth();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();

if(hour < 10){
    hour = "0" + hour;   
}
if(minute < 10){
    minute = "0" + minute;   
}
if(second < 10){
    second = "0" + second;   
}

var time = date+""+month+""+year+""+hour+""+minute+""+second;
var a = {
    TIME: time
}
export {a}
