function showMenu() {
    const navs = document.getElementsByClassName('nav-item');
    [...navs].forEach((e, ind) => {/*
        e.style.visibility = e.style.visibility === 'visible' ? 'hidden' : 'visible'; //.display === 'flex' ? 'none' : 'flex';
        e.style.top = e.style.visibility === 'hidden' ? 10 :( 10 + ind * 6 + 'vh');*/
        if(e.style.visibility === 'visible')
        {
            //e.style.top =  10 + 'hv';
            const anim = e.animate([{top: 10 + ind * 6 + 'vh'}, {top: '10vh'}], {duration: 200});
            anim.onfinish = () => {
                e.style.visibility =  'hidden';
                e.style.top = '10vh';
            };
            /*setTimeout(() =>
                e.style.visibility =  'hidden', 1000);*/
        }
        else
        {
            e.style.visibility = 'visible'; //.display === 'flex' ? 'none' : 'flex';
            //e.style.top =  10 + ind * 6 + 'vh';
            const anim = e.animate([{top: '10vh'}, {top: 10 + ind * 6 + 'vh'}], {duration: 200});
            anim.onfinish = () => {
                e.style.top = 10 + ind * 6 + 'vh';
            };
        }
    });
}
