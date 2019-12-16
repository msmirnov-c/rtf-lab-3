console.log(document.cookie);
let cookies = {};

document.cookie.split("; ").map(parameter => {
    const p = parameter.split("=");
    cookies[p[0]] = decodeURIComponent(p[1]);
  })

  const greetings = document.createElement('h1');

  if (cookies.email === undefined) {
    greetings.innerHTML = "Hello, guest";
    document.getElementById('auth').hidden = false;
    document.getElementById('reg').hidden = false;
    document.getElementById('logout').hidden = true;

  } else {
    greetings.innerHTML = "Hello, " + cookies.name + ' ' + cookies.surname;
    document.getElementById('auth').hidden = true;
    document.getElementById('reg').hidden = true;
    document.getElementById('logout').hidden = false;
  }
  document.querySelector('header').after(greetings);

  console.log(cookies)