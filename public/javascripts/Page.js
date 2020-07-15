export default class Page {
    constructor(origin) {
        const socket = new WebSocket(`wss://${document.location.host}/api/comment`);
        document.addEventListener("DOMContentLoaded", () => {
            const usr = localStorage.getItem('user');
            console.log(usr);
            const u = JSON.parse(usr);
            if(u !== null) {
                user.innerHTML = `<a href="/edit.html">${u.nick}</a> </a><a onclick="localStorage.clear(); document.location.reload();">Выход</a>`;
                if (origin === undefined || origin === null) return;
                const commentAdd = document.getElementById("commentAdd");
                if (commentAdd !== undefined && commentAdd !== null) {
                    commentAdd.disabled = false;
                    comment.readOnly = false;
                    comment.innerHTML = '';
                    commentAdd.onclick = ev =>
                        socket.send(`{"comment": "${comment.value}", "login": "${u.email}", "origin":"${origin}"}`);
                }
            }
            socket.onopen = function(e) {
                //console.log("[open] Соединение установлено");
                //console.log("Отправляем данные на сервер");
                socket.send(`{"origin": "${origin}"}`);
            };

            socket.onmessage = function(event) {
                //console.log(`[message] Данные получены с сервера: ${event.data}`);
                try {
                    const data = JSON.parse(event.data);
                    comments.innerHTML = "";
                    for (let comment of data) {
                        const comEl = document.createElement('div');
                        comEl.classList.add('comment');
                        const date = new Date(Number.parseInt(comment.date))
                        comEl.innerHTML = `<span class="commentDescription">Author: ${comment.nick} Time: ${date.getDay() + 1}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</span> <br/> ${comment.comment}`;
                        comments.appendChild(comEl)
                    }
                } catch (e) {}
            };

            socket.onclose = function(event) {
                if (event.wasClean)
                    console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
                else
                    // например, сервер убил процесс или сеть недоступна
                    // обычно в этом случае event.code 1006
                    console.log('[close] Соединение прервано');
            };

            socket.onerror = error =>
                alert(`[error] ${error.message}`);
        });
    }
}

