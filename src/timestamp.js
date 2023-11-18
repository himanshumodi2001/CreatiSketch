var timestamp = Date.now();
var dateObject = new Date(timestamp);
var date = dateObject.getDate();
var month = dateObject.getMonth();
var year = dateObject.getFullYear();
var hour = dateObject.getHours();
var minute = dateObject.getMinutes();
var second = dateObject.getSeconds();
var time = date+""+month+""+year+""+hour+""+minute+""+second;
var a = {
    TIME: time
}
export {a}