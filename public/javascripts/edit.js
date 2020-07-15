

function passCh(event) {
    event.preventDefault();
    /*
    const oldPass = document.createElement('input');
    oldPass.name = 'pass';
    oldPass.id = 'oldPass';
    oldPass.type = 'password';
    oldPass.placeholder = 'Enter old password';*/
    const newPassInp = document.createElement('input');
    newPassInp.type = 'password';
    newPassInp.id = 'newPassInp';
    newPassInp.placeholder = 'Enter new password';
    event.target.after(newPassInp);
    //event.target.after(oldPass);
    event.target.innerHTML = 'Hide';
    event.target.onclick = passHide;
    checkChanges();
}

function passHide(event) {
    event.preventDefault();
    newPassInp.remove();
    //oldPass.remove();
    event.target.innerHTML = 'Change password';
    event.target.onclick = passCh;
    checkChanges();
}

function checkChanges() {
    const ch = hasChanges();
    confB.disabled = !ch;// ? "" : "disabled";
}

function hasChanges() {
    const el =document.getElementById('newPassInp');
    return el !== null || email.value !== oldEmail.value || nick.value !== oldNick.value;
}

function sendData(event) {
    event.preventDefault();
    //pass.value = CryptoJS.MD5(password.value).toString();
    const newpass = document.getElementById('newPassInp');
    //newPass.value = newpass ? CryptoJS.MD5(newpass.value).toString() : '';
    fetch("/api/user/change", {
        method: 'POST' ,
        body: JSON.stringify({newNick: nick.value, pass: CryptoJS.MD5(password.value).toString(),
            newEmail: email.value, oldEmail: oldEmail.value, newPass: newpass ? CryptoJS.MD5(newpass.value).toString() : ''}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async r => {
        const res = await r.text();
        const obj = JSON.parse(res);
        if (obj.Error !== undefined) {
            alert(obj.Error);
            return;
        }
        console.log(res);
        localStorage.setItem('user' , res);
        document.location.href = '/';
    }).catch(err => alert(err));

}

//module.exports = {passCh, passHide, checkChanges, sendData};
