

const number = document.getElementById('num');
const up = document.getElementById('up');
const reset = document.getElementById('reset');
const down = document.getElementById('down');

var count = 0;

function countUp() {
    count = count + 1;
    number.textContent = count;
}


function countDown() {
    count = count - 1;
    number.textContent = count;
}

function resetCount() {
    count = 0;
    number.textContent = count;
}



up.addEventListener('click', countUp);
down.addEventListener('click', countDown);
reset.addEventListener('click', resetCount);