const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

var load = 0;


let int = setInterval(blurring, 30);
function blurring() {
    load++;


    if(load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = 1 - (load / 100);
    bg.style.filter = `blur(${(1 - load / 100) * 30}px)`;
};
