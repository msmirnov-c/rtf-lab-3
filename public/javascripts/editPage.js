
import Page from "/javascripts/Page.js";
const page = new Page();
document.addEventListener('DOMContentLoaded' ,() => {
  const obj = JSON.parse(localStorage.getItem('user'));
  if(obj)
  {
      oldNick.value = obj.nick;
      nick.value = obj.nick;
      oldEmail.value = obj.email;
      email.value = obj.email;
  }
  else
      document.location.href = '/';
});
