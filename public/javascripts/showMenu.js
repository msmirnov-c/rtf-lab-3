function showMenu() {
    const navs = document.getElementsByClassName('nav-item');
    [...navs].forEach(e => e.style.display = e.style.display === 'flex' ? 'none' : 'flex');
}
