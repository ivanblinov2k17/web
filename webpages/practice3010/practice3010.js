//const object = JSON.parse(response)
//object.main.temp - 273
const input = document.querySelector(".inp")
const button = document.querySelector(".butt")
const div = document.querySelector(".di")
const xhr = new XMLHttpRequest()
button.addEventListener('click', function(){
    xhr.open('GET',`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=021d1fbef7403d32bf662f1881a44606`)
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status===200){
            console.log(xhr.responseText)
            div.textContent = JSON.parse(xhr.responseText).main.temp-273
        }
    }
    xhr.send()
})
