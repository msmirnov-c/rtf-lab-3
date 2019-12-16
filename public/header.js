const cookie = document.cookie;

let header = document.createElement('div');
header.id = "header";

let headerContent = document.createElement('div');
headerContent.id = "header-content";

header.append(headerContent);

let anchors = [
    document.createElement('a'),
    document.createElement('a'),
    document.createElement('a'),
    document.createElement('a')
];

anchors[0].href = "/";
anchors[0].id = "logo";
anchors[0].innerHTML = "Главная";

anchors[1].href = "authorization";
anchors[1].id = "login";
anchors[1].innerHTML = "Войти";

anchors[2].href = "reg";
anchors[2].id = "reg";
anchors[2].innerHTML = "Регистрация";

anchors[3].href = "logout";
anchors[3].id = "logout";
anchors[3].innerHTML = "Выйти";

anchors.map(node => {
    node.className = "header-link";
    headerContent.append(node);
});

document.body.prepend(header);

if (cookie !== "" && !cookie.match('bad')) {
    document.querySelector('#login').style.display = 'none';
    document.querySelector('#reg').style.display = 'none';
    document.querySelector('#logout').style.display = 'initial';
} else {
    document.querySelector('#login').style.display = 'initial';
    document.querySelector('#reg').style.display = 'initial';
    document.querySelector('#logout').style.display = 'none';
}