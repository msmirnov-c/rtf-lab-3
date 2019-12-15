let cookie = document.cookie.split(";").reduce((cookieObject, cookieString) => {
  let splitCookie = cookieString.split("=");
  try {
    cookieObject[splitCookie[0].trim()] = decodeURIComponent(splitCookie[1]);
  } catch (error) {
    cookieObject[splitCookie[0].trim()] = splitCookie[1];
  }
  return cookieObject;
}, []);

var IsAuth = cookie.email != undefined;

console.log(cookie);

const Btn_save= document.getElementById("userName");
const btn_login = document.querySelector(".logIn-btn");
const btn_logout = document.querySelector(".logOut-btn");
const text = document.getElementById("text");

if (IsAuth) {
    Btn_save.style.display = "inline-block";
    btn_logout.style.display = "inline-block";
    btn_login.style.display = "none";
    text.style.display = "none"

} else {
    Btn_save.style.display = "none";
    btn_logout.style.display = "none";
    btn_login.style.display = "inline-block";
    text.style.display = "inline-block"
}

