const now = new Date();
let greetings = "Доброго времени суток, ";
if (now.getHours() >= 0 && now.getHours() < 6) {
    greetings = "Доброй ночи, ";
} else if (now.getHours() >= 6 && now.getHours() < 12) {
    greetings = "Доброе утро, ";
} else if (now.getHours() >= 12 && now.getHours() < 18) {
    greetings = "Добрый день, ";
} else if (now.getHours() >= 18 && now.getHours() < 24) {
    greetings = "Добрый вечер, ";
}

if (cookie != "") {
    let login;
    const cookies = cookie.split(';');
    cookies.map(param => {
        if (param.startsWith('login')) {
            login = param.slice(6);
        }
    });
    
    greetings += login + "!";
} else {
    greetings += "уважаемый Гость!";
}

const userBlock = document.querySelector('#user-block');

const message = document.createElement('h1');
message.id = "greetings"
message.innerHTML = greetings;

userBlock.append(message);