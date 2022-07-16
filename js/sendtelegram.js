//bot token
var telegram_bot_id = "5539531338:AAE9Lv_BCobg_ZoDIIIQJvr-3G82I4YbwNM"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 833371351; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  phone = document.getElementById("phone").value;
  // message = document.getElementById("message").value;
  message = "Ism Familiyasi: " + u_name + "\nTelfon raqami: " + phone;
};
var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  // document.getElementById("message").value = "";
  return false;
};
