const imgs = document.getElementById('imgs');
const left = document.getElementById('left');
const right = document.getElementById('right');
const autoSlide = document.getElementById('slide');

const img = document.querySelectorAll('#imgs img');

let index = 0;
function changeImage() {
    if (index > img.length - 1) {
        index = 0;
    }
    else if(index < 0 ) {
        index = img.length - 1;
    }
    imgs.style.transform = `translateX(${-index * 500}px)`;
}



autoSlide.addEventListener('click', function slide() {  
    let interval = setInterval(run, 2000);

    function run() {  
        index++;
        changeImage();
    }

    function resetInterval() {  
        clearInterval(interval);
        interval = setInterval(run, 2000);
    }
});


right.addEventListener('click', function change() {  
    index++;
    changeImage();
    // resetInterval();
});


left.addEventListener('click', function changer() {  
    index--;
    changeImage();
    // resetInterval(); 
});