if (cookie !== "") {
    const params = cookie.split('; ');
    params.map(param => {
        if (param.startsWith('login')) {
            document.querySelector('#login').style.visibility = 'hidden';
            document.querySelector('#reg').style.visibility = 'hidden';
            document.querySelector('#logout').style.visibility = 'visible';
        }
    })
}

const moveHowItWorks = () => {
    document.querySelector('#howitworks').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

const moveHowItIsUsed = () => {
    document.querySelector('#howitisused').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

const moveHistory = () => {
    document.querySelector('#history').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

const moveUp = () => {
    document.querySelector('#header').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}