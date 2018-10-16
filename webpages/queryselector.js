const button_1 = document.querySelector('#button_1');
const button_2 = document.querySelector('#button_2');
const number = document.querySelector('.number')
let temp = 0;
button_1.addEventListener('click', function(){
    number.textContent = --temp;
})
button_2.addEventListener('click',function(){
    number.textContent = ++temp;
})