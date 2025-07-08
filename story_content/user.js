window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();

// Putting it together
let dateString = day + "/" + month + "/" + year;

//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("todaysDate", dateString);
player.SetVar("month", month);
player.SetVar("ngaythi", day);
}

window.Script2 = function()
{
  //Storyline JavaScript – Gửi tài khoản/mật khẩu, nhận kết quả
var player = GetPlayer();
var username = player.GetVar("username");
var password = player.GetVar("password");

fetch("https://script.google.com/macros/s/AKfycbxxxxx/exec?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password))
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      player.SetVar("hoten", data.hoten);
      player.SetVar("login_ok", true); // báo thành công
    } else {
      player.SetVar("hoten", "");
      player.SetVar("login_ok", false); // báo lỗi đăng nhập
    }
  })
  .catch(error => {
    console.error("Lỗi:", error);
    player.SetVar("login_ok", false);
  });
}

window.Script3 = function()
{
  // Get Date  Info
let currentDate = new Date();
let year = currentDate.getFullYear();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let ss = currentDate.getSeconds();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
//Combine both
let dateString = day+"/"+month+"/"+year+" "+hours+":"+minutes+":"+ss;
//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("time1", dateString);
}

window.Script4 = function()
{
  var player = GetPlayer();
var hten = player.GetVar("hoten");
var mathi = player.GetVar("mathi");
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, function(l) {
    return l.toUpperCase();
  });
}
hten = titleCase(hten);
var lop = player.GetVar("lop");
lop = lop.toUpperCase();
var diemluu = player.GetVar("diem");
let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let ss = currentTime.getSeconds();
let dateString = day+"/"+month+"/"+year+" "+hours+":"+minutes+":"+ss;
var formData = new FormData();
formData.append("Name", hten);
formData.append("Class", lop);
formData.append("Score", diemluu);
formData.append("Mathi", mathi);
formData.append("Time", dateString);
var request = new XMLHttpRequest();
request.open("POST","https://script.google.com/macros/s/AKfycbwiwPnVP9Hu816RUWIenoo9nGHJoWioFr4wy8Y8EGzRo4yc9YbI_mwCsZNrRmHSc9s1/exec");
request.send(formData);
}

window.Script5 = function()
{
  var player = GetPlayer();
var hten = player.GetVar("hoten");
var mathi = player.GetVar("mathi");
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, function(l) {
    return l.toUpperCase();
  });
}
hten = titleCase(hten);
var lop = player.GetVar("lop");
lop = lop.toUpperCase();
var diemluu = player.GetVar("diem");
let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let ss = currentTime.getSeconds();
let dateString = day+"/"+month+"/"+year+" "+hours+":"+minutes+":"+ss;
var formData = new FormData();
formData.append("Name", hten);
formData.append("Class", lop);
formData.append("Score", diemluu);
formData.append("Mathi", mathi);
formData.append("Time", dateString);
var request = new XMLHttpRequest();
request.open("POST","https://script.google.com/macros/s/AKfycbwiwPnVP9Hu816RUWIenoo9nGHJoWioFr4wy8Y8EGzRo4yc9YbI_mwCsZNrRmHSc9s1/exec");
request.send(formData);
}

};
