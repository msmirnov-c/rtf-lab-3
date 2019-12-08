async function registerNewUser(ev) {
    ev.preventDefault();
    if (passconf.value !== pass.value)
        passMess.style.visibility = "visible";
    else
        await getUserData(null,'/api/user/add/');
}

async function getUserData(ev, adress = '/api/user/') {
    if(ev !== null && ev !== undefined)
        ev.preventDefault();
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
        }
    }).then(async r => {
        const res = await r.text();
        console.log(res);
        localStorage.setItem('user', res);
        document.location.href = '/';
    }).catch(err => console.log(err));
}

function setEmailInput() {
    email.style.display = 'inline';
    emaillabel.className = 'activeInput';
    nicklabel.className = 'passiveInput';
    nick.style.display = 'none';
    nick.value = '';
}

function setNickInput() {
    nick.style.display = 'inline';
    nicklabel.className = 'activeInput';
    emaillabel.className = 'passiveInput';
    email.style.display = 'none';
    email.value = '';
}
