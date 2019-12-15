//действие при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    String.prototype.replaceAll = function(search, replace){
        return this.split(search).join(replace);
    };
    console.log(document.cookie);
    //получение логина из кук
    const login = document.cookie.split('; ').map(c => c.split('=')).find(c => c[0] === 'login')[1];
    //получение ошибки из кук
    const err = document.cookie.split('; ').map(c => c.split('=')).find(c => c[0] === 'err')[1];
    if(!err || err === '') {
        if(login && login !== '')//если пользователь авторизован
            buts.innerHTML =
            `<b>${login}</b>
            <button class="ni" onclick="document.cookie = 'login='; document.location.reload();">Выход</button>`
    }
    else {//если была ошибка - она выводиться
        alert(err.replaceAll('%20', ' '));
        document.cookie = 'err=';
    }
});
