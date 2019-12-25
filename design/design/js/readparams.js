var urlParams = new URLSearchParams(window.location.search);
var suxx = urlParams.get('succ');

if (suxx === 'reg'){
    alert('Вы успешно зарегались');
    window.location.replace("/");
}

if (suxx === 'auth'){
    alert('Вы успешно залогинились');
    window.location.replace("/");
}