
async function CheckAuth() {  // Проверка авторизации
    if (getCookie('user') !== null && getCookie('email') !== null) {
        let xhr = new XMLHttpRequest();    //Есть ли данные в куках?
        let json = JSON.stringify({
            identifier: getCookie('user'),  // Создаём пост запрос для проверки существования такого пользователя
            pass: getCookie('email')
        });
        await xhr.open("POST", '/postExistsUser', true);
        await xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.responseType = "text";
        xhr.onreadystatechange = await function () {
            if (xhr.readyState === 4) {
                if (xhr.response === "Success") {
                    while (MainNav.firstChild) {  // Если всё норм. Меняем кнопки в навбаре
                        MainNav.removeChild(MainNav.firstChild);
                    }
                    let user = document.createElement('div');
                    user.innerHTML = getCookie('user');
                    user.id = 'User';
                    MainNav.appendChild(user);
                    let ExitButton = document.createElement('div');
                    let exitPrevButton = document.createElement('div');
                    ExitButton.className = "NavBarButton";
                    exitPrevButton.className = "NavBarButtonText";
                    exitPrevButton.innerHTML = 'Выйти';
                    ExitButton.appendChild(exitPrevButton);
                    ExitButton.onclick = function (){
                        deleteAllCookies();
                        localStorage.clear();
                        location.reload();
                    };
                    MainNav.appendChild( ExitButton);
                } else {               // Если не норм, то чистим всё
                    localStorage.clear();
                    deleteAllCookies();
                }
            }
        };
        await xhr.send(json);
        SpinSystem();      //Запускаем анимацию
    }
}
