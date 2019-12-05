document.addEventListener("DOMContentLoaded", () => {
    const usr = localStorage.getItem('user');
    console.log(usr);
    const u = JSON.parse(usr);
    if(u !== null)
        user.innerHTML = `${u.nick}/<a onclick="localStorage.clear(); document.location.reload();">Sign out</a>`
});

async function onsent() {
    if (passconf.value !== pass.value) {
        passMess.style.visibility = "visible";
        return;
    }
    await getData('/api/user/add/');
}

async function getData(adress = '/api/user/') {
    const passHash = CryptoJS.MD5(pass.value).toString();
    const data = {
        email: email.value ,
        nick: nick.value ,
        pass: passHash
    };
    const r = await fetch( adress, {
        method: 'POST' ,
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
            'Content-Type': 'application/json'
        }//formData.toString()
    }).then(async r => {
        const res = await r.text();
        console.log(res);
        localStorage.setItem('user', res);
        document.location.href = '/';
    }).catch(err => console.log(err));
}
