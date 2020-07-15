
function sent(ev) {
    ev.preventDefault();
    const res = fetch('/api/user/passdrop', {
        method: 'POST' ,
        body: JSON.stringify({email: email.value}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async r => {
        const res = await r.text();
        const obj = JSON.parse(res);
        if (obj.Error) {
            alert(obj.Error);
            return;
        }
        console.log(res);
        alert('Password successfully changed');
        document.location.href = '/';
    }).catch(err => alert(err));
}
