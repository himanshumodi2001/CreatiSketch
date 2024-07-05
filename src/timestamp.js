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

if(date < 10){
    date = "0" + date;   
}
if(month < 10){
    month = "0" + month;   
}

var time = date+""+month+""+year+""+hour+""+minute+""+second;
var a = {
    TIME: time
}
export {a}
