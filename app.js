const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexValue = '#';
    for(i = 0; i < 6; i++){
        hexValue += hex[randomNumnber()];
    }
    document.body.style.backgroundColor = hexValue;
    color.textContent = hexValue;
});

function randomNumnber(){
    return Math.floor(Math.random() * hex.length)
};