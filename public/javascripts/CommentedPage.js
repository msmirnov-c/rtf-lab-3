export default class CommentedPage {
    constructor(origin) {
        const socket = new WebSocket(`ws://${document.location.host}/api/comment`);
        document.addEventListener("DOMContentLoaded", () => {
            const usr = localStorage.getItem('user');
            console.log(usr);
            const u = JSON.parse(usr);
            if(u !== null)
                user.innerHTML = `${u.nick}/<a onclick="localStorage.clear(); document.location.reload();">Sign out</a>`;
            if(origin === undefined || origin === null) return;

            socket.onopen = function(e) {
                console.log("[open] Соединение установлено");
                console.log("Отправляем данные на сервер");
                socket.send(`{"origin": "${origin}"}`);
            };

            socket.onmessage = function(event) {
                console.log(`[message] Данные получены с сервера: ${event.data}`);
                try {
                    const data = JSON.parse(event.data);
                    for (let comment of data) {
                        const comEl = document.createElement('div');
                        comEl.classList.add('comment');
                        comEl.innerHTML = `${comment.nick} ${new Date(Number.parseInt(comment.date))} <br/> ${comment.comment}`;
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
