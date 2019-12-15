document.querySelector('p').style.visibility = 'hidden';
document.querySelector('#login').style.display = 'none';

if (cookie !== "" && cookie.match('badlogin')) {
    const params = cookie.split('; ');
    params.map(param => {
        if (param.startsWith('badlogin')) {
            const login = param.slice(9);
            document.querySelector('input').value = login;
        
            document.querySelector('p').style.visibility = 'visible';
        }
    })
} 
