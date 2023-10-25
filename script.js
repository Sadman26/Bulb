let onbtn = document.getElementById('on');
let offbtn = document.getElementById('off');
let arr = [];
let fun1 = () => {
    document.getElementById('bulb').style.backgroundColor = "yellow";
    let tm = new Date().toLocaleTimeString();
    let dat = {
        status: "on",
        time: tm
    }
    let status = document.getElementById('lol').innerHTML = "ON"
    arr.push(dat);
    console.log(arr);
}
let fun2 = () => {
    document.getElementById('bulb').style.backgroundColor = "rgb(183, 225, 236)";
    let tm = new Date().toLocaleTimeString();
    let status = document.getElementById('lol').innerHTML = "OFF"
    let dat = {
        status: "off",
        time: tm
    }
    arr.push(dat);
    console.log(arr);
}
onbtn.addEventListener('click', fun1);
offbtn.addEventListener('click', fun2);
