console.log(document.cookie);

let h = (new Date()).getHours();                  
if (h > 3 && h <  12) document.getElementById("hour").innerHTML = "Доброе утро, ";                    
if (h > 11 && h <  19) document.getElementById("hour").innerHTML ="Добрый день,";                   
if (h > 18 && h <  24) document.getElementById("hour").innerHTML = "Добрый вечер,";                 
if (h > 23 || h <  4 ) document.getElementById("hour").innerHTML = "Привет полуночникам,";


let cookies = {};

document.cookie.split("; ").map(parameter => {
    const p = parameter.split("=");
    cookies[p[0]] = decodeURIComponent(p[1]);
  })

  const greetings = document.createElement('h1');

  if (cookies.email === undefined) {
    document.getElementById("greeting").innerHTML = "Гость";
    document.getElementById('auth').hidden = false;
    document.getElementById('reg').hidden = false;
    document.getElementById('logout').hidden = true;

  } else {
    document.getElementById("greeting").innerHTML = "" + cookies.name + ' ' + cookies.surname;
    document.getElementById('auth').hidden = true;
    document.getElementById('reg').hidden = true;
    document.getElementById('logout').hidden = false;
  }
  document.querySelector('header').after(greetings);

  console.log(cookies)