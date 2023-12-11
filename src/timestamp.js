const timestamp = Date.now();
const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth();
const year = dateObject.getFullYear();
const hour = dateObject.getHours();
const minute = dateObject.getMinutes();
const second = dateObject.getSeconds();
const time = date+""+month+""+year+""+hour+""+minute+""+second;
const a = {
    TIME: time
}
export {a}
