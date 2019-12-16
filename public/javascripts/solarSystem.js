
let g = false;
let year = 0;
function SpinSystem(){
    let start = Date.now();
    var i = 0;
    let a = 0.2;
    let x;
    let y;
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        planet.style.left = Math.cos(timePassed * 0.0044 * a) * (-8) + 3 + 'em';
        planet.style.top = Math.sin(timePassed * 0.0044 * a) * (8) + 'em';
        y = parseInt(planet.style.top.substr(0,3), 10);
        if(y > 0 && g) //"1.0002em"
        {
            i++;
            yearCounter.innerHTML = "Прошло лет: " + i;
            g = false;
        }
        if(y < 0) //"1.0002em"
        {
            g = true;
        }
        if(i===1000000)
            clearInterval(timer);
        moon.style.left = Math.cos(timePassed * 0.01 * a) * (-16) + 5  +'px';
        moon.style.top = Math.sin(timePassed * 0.01 * a) * (16) + 5 + 'px';
        mercury.style.left = Math.cos(timePassed * 0.018 * a) * (-4) + 5.3 + 'em';
        mercury.style.top = Math.sin(timePassed * 0.018 * a) * (4) + 'em';
        venus.style.left = Math.cos(timePassed * 0.0065 * a) * (-6) + 4.36 + 'em';
        venus.style.top = Math.sin(timePassed * 0.0065 * a) * (6) + 'em';
        mars.style.left = Math.cos(timePassed * 0.0025 * a ) * (-12) + 1.7 + 'em';
        mars.style.top = Math.sin(timePassed * 0.0025 * a) * (12) + 'em';
        jupiter.style.left = Math.cos(timePassed * 0.0003635 * a) * (-16) + 0.3 + 'em';
        jupiter.style.top = Math.sin(timePassed * 0.0003635 * a) * (16) + 'em';
        saturn.style.left = Math.cos(timePassed * 0.0001514 * a) * (-20) -2 + 'em';
        saturn.style.top = Math.sin(timePassed * 0.0001514 * a) * (20) + 'em';
        uranus.style.left = Math.cos(timePassed * 0.0000523 * a) * (-24) -3.8 + 'em';
        uranus.style.top = Math.sin(timePassed * 0.0000523 * a) * (24) + 'em';
        neptune.style.left = Math.cos(timePassed * 0.0000341 * a) * (-26) -5 + 'em';
        neptune.style.top = Math.sin(timePassed * 0.0000341 * a) * (26) + 'em';
    }, 1);
};
