document.querySelector('#loginexists').style.display = 'none';
document.querySelector('#bademail').style.display = 'none';
document.querySelector('#badpass').style.display = 'none';
document.querySelector('#reg').style.display = 'none';

if (cookie !== "") {
    const params = cookie.split('; ');
    const inputs = document.querySelectorAll('input');
    params.map(param => {
        if (param.startsWith('loginexists')) {
            document.querySelector('#loginexists').style.display = 'initial';
        }

        if (param.startsWith('bademail')) {
            document.querySelector('#bademail').style.display = 'initial';
        }

        if (param.startsWith('badpass')) {
            document.querySelector('#badpass').style.display = 'initial';
        }
    })
}