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

const userBlock = document.querySelector('#user-block');

const userInfo = document.createElement('div');
userInfo.id = 'user-block-info';

const greetingsBlock = document.createElement('div');
greetingsBlock.id = "greetings-block";

const cookies = {};
if (cookie !== "") {
    cookie.split('; ').map(param => {
        const paramParts = decodeURIComponent(param).split('=')
        cookies[paramParts[0]] = paramParts[1];
    });

    const img = document.createElement('img');
    img.id = "arrow-img";
    img.src = "../public/images/arrow.png";

    const mainInfo = document.createElement('div');
    mainInfo.id = "main-user-info";
    userInfo.append(mainInfo);

    const aboutInfo = document.createElement('div');
    aboutInfo.id = "about-user-info";
    userInfo.append(aboutInfo);

    const fisrtName = document.createElement('p');
    fisrtName.innerHTML = "<b>Имя</b>: " + cookies.firstName;
    
    const secondName = document.createElement('p');
    secondName.innerHTML = "<b>Фамилия</b>: " + cookies.secondName;
    
    const email = document.createElement('p');
    email.innerHTML = "<b>E-mail:</b> " + cookies.email;
    
    const about = document.createElement('p');
    about.innerHTML = cookies.about;

    mainInfo.append(fisrtName);
    mainInfo.append(secondName);
    mainInfo.append(email);
    aboutInfo.append(about);

    greetingsBlock.append(img);
}

if (cookies.login !== undefined) {
    greetings += cookies.login + "!";
} else {
    greetings += "уважаемый Гость!";
}

const greetingsMsg = document.createElement('h1');
greetingsMsg.id = "greetings";
greetingsMsg.innerHTML = greetings;

greetingsBlock.append(greetingsMsg);

userBlock.append(greetingsBlock);

const showInfo = () => {
    if (cookies.login !== undefined) {
        if (!document.querySelector('#user-block-info')) {
            userBlock.append(userInfo);
            document.querySelector('#arrow-img').style.animation = "rotate 0.5s";
            document.querySelector('#arrow-img').style.transform = "scaleY(-1)"
        } else {
            userBlock.removeChild(userInfo);
            document.querySelector('#arrow-img').style.animation = "rotateBack 0.5s";
            document.querySelector('#arrow-img').style.transform = "scaleY(1)"
        }
    }
}