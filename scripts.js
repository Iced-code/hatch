let count = 0;
const mainDiv = document.getElementById("mainDiv");
const counter = document.getElementById("count");

function updateCounter(){
    count += 1;
    mainDiv.style.backgroundColor = `rgb(${211-(10*count)}, 211, 211)`;
    counter.innerText = count;
}