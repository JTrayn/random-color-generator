
let masterContainer = document.querySelector(".master-container");
let grid = document.createElement('div');
grid.classList.add('grid');
masterContainer.appendChild(grid);
grid.style.background = 'lightgrey';
grid.style.height = '200px';
grid.style.width = '200px';
grid.innerHTML = `<div class=" a"><div class="pix a a1"></div><div class="pix a a2"></div><div class="pix a a3"></div><div class="pix a a4"></div></div>`;
grid.innerHTML += `<div class=" b"><div class="pix b b1"></div><div class="pix b b2"></div><div class="pix b b3"></div><div class="pix b b4"></div></div>`;
grid.innerHTML += `<div class=" c"><div class="pix c c1"></div><div class="pix c c2"></div><div class="pix c c3"></div><div class="pix c c4"></div></div>`;
grid.innerHTML += `<div class=" d"><div class="pix d d1"></div><div class="pix d d2"></div><div class="pix d d3"></div><div class="pix d d4"></div></div>`;
let pixelNodeList = document.querySelectorAll('.pix');
for(let i of pixelNodeList) {
    i.style.height = '50px';
    i.style.width = '50px';
}
let pixelArray = ['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2', 'd3', 'd4'];
let animate = true;
let buttonTwo = document.querySelector('.button2');
let buttonOne = document.querySelector('.button1');
let buttonTwoText = buttonTwo.textContent;
buttonTwo.addEventListener("click", () => {
    animatePixels();
    buttonTwo.textContent = 'FASTER!!!';
});
buttonOne.addEventListener("click", () => {
    animate = !animate;
    buttonTwo.textContent = buttonTwoText;
});





function createRandomColor() {
    const HEX_VALUES = '0123456789ABCDEF';
    let randomColor = '';
    for (let i = 0; i < 6; i++) {
        randomColor += HEX_VALUES[Math.floor(Math.random() * 16)];
    }
    return '#' + randomColor;
}
function chooseRandomPixel(array = []) {
    let chosenPixel = Math.floor(Math.random() * array.length);
    return chosenPixel;
}
function changePixelColor() {

    pixelNodeList[chooseRandomPixel(pixelArray)].style.background = 
                                                    createRandomColor();
}
async function animatePixels() {
    animate = true;

    while(animate === true) {
        await sleep(50);
        changePixelColor();
    }
}
function sleep(ms) {
    return new Promise(resolve => 
        setTimeout(resolve, ms));
}
