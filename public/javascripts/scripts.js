
document.addEventListener("DOMContentLoaded", () => {
    const login = sessionStorage.getItem('login');
    if(login)
    {
        buts.innerHTML =
            `<b>${login}</b>
            <button class="ni" onclick="sessionStorage.clear(); document.location.reload();">Выход</button>`
    }
});

async function reg(ev) {
    ev.preventDefault();
    const res = await fetch('/api/reg',
    {
        method: 'POST' ,
        body: JSON.stringify({login: lg.value, psw: psw.value}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const t = await res.text();
    const obj = JSON.parse(t);
    if(!obj)
    {
        alert('Ошибка: ' + t);
        return ;
    }
    sessionStorage.setItem('login', obj.login);
    document.location.href = '/';
}

async function auth(ev) {
    ev.preventDefault();
    const res = await fetch('/api/auth',
        {
            method: 'POST' ,
            body: JSON.stringify({login: lg.value, psw: psw.value}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    const t = await res.text();
    const obj = JSON.parse(t);
    if(!obj)
    {
        alert('Ошибка: ' + t);
        return ;
    }
    sessionStorage.setItem('login', obj.login);
    document.location.href = '/';
}
