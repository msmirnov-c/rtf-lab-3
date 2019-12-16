document.addEventListener("DOMContentLoaded", () => {
    String.prototype.replaceAll = function(search, replace){
        return this.split(search).join(replace);
    };
    console.log(document.cookie);
    //получение логина 
    const login = document.cookie.split('; ').map(c => c.split('=')).find(c => c[0] === 'login')[1];
    //получение ошибки 
    const err = document.cookie.split('; ').map(c => c.split('=')).find(c => c[0] === 'err')[1];
    if(!err || err === '') {
        if(login && login !== '')
            buts.innerHTML =
            `<b>${login}</b>
            <button class="ni" onclick="document.cookie = 'login='; document.location.reload();">Выход</button>`
    }
    else {
        alert(err.replaceAll('%20', ' '));
        document.cookie = 'err=';
    }
});
