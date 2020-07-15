function showMenu() {
    const navs = document.getElementsByClassName('nav-item');
    [...navs].forEach((e, ind) => {
        if(e.style.visibility === 'visible')
        {
            const anim = e.animate([{top: 10 + ind * 6 + 'vh'}, {top: '10vh'}], {duration: 200});
            anim.onfinish = () => {
                e.style.visibility =  'hidden';
                e.style.top = '10vh';
            };
        }
        else
        {
            e.style.visibility = 'visible';
            const anim = e.animate([{top: '10vh'}, {top: 10 + ind * 6 + 'vh'}], {duration: 200});
            anim.onfinish = () => {
                e.style.top = 10 + ind * 6 + 'vh';
            };
        }
    });
}
