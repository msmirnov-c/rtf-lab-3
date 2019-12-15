
async function getUserData(){ // Создаём post запрос
   let xhr = new XMLHttpRequest();
   let hashPass = await CryptoJS.MD5(password.value).toString();
    let json = JSON.stringify({
        email: EmInput.value,
        nick: LogInput.value,
        pass: hashPass
    });
    await xhr.open("POST", '/postNewUser', true);
    await xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.responseType = "text";
    xhr.onreadystatechange = await function() {
        if (xhr.readyState === 4) { // Смотрим статус выполнения
            if(xhr.response === "Success") { // Если всё хорошо - устанавливаем куки и local storage
                setCookie('user', EmInput.value, new Date( (new Date()).getTime() + ( 60 * 60 * 24*24  ) ), '/' );
                setCookie('email', hashPass, new Date( (new Date()).getTime() + ( 60 * 60 * 24*24  ) ), '/' );
                localStorage.setItem('user', EmInput.value);
                localStorage.setItem('email', hashPass);
                document.location.href= '/';
                alert('Вы успешно зарегистрировались!');
            } else {
                alert(xhr.response); // пример вывода: 404: Not Found
                location.reload(); //Перезагружаем, чтобы ошибка не мешала запросу
            }
        }
    };
    await xhr.send(json);
}
