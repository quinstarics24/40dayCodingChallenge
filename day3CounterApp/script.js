let count = 0 ;
const countDisplay = document.getElementById("count");

function increase () {
    count++;
    countDisplay.textContent = count;
}

function decrease () {
    count--;
    countDisplay.textContent = count;
}

function reset () {
    count = 0;
    countDisplay.textContent = count;
}
