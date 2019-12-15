
async function sendUserData(){ //Создаём пост запрос
    let xhr = new XMLHttpRequest();
    let hashPass = await CryptoJS.MD5(password.value).toString();
    let json = JSON.stringify({
        identifier: EmInput.value,
        pass: hashPass
    });
    await xhr.open("POST", '/postExistsUser', true);
    await xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.responseType = "text";
    xhr.onreadystatechange = await function() {
        if (xhr.readyState === 4) {
            if(xhr.response === "Success") { //Чекаем как и в checkAuth
                setCookie('user', EmInput.value, new Date( (new Date()).getTime() + ( 60 * 60 * 24*24  ) ), '/' );
                setCookie('email', hashPass, new Date( (new Date()).getTime() + ( 60 * 60 * 24*24  ) ), '/' );
                localStorage.setItem('user', EmInput.value);
                localStorage.setItem('email', hashPass);
                document.location.href= '/';
                alert('Вы успешно авторизовались!');
            } else {
                alert(xhr.response);
            }
        }
    };
    await xhr.send(json);
}



