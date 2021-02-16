function randomRGB(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}

const helloLetters = document.querySelectorAll('.letter');

const intervalId = setInterval(function() {
    for(let i = 0; i < helloLetters.length; i++){
        helloLetters[i].style.color = randomRGB(); 
   }
}, 1000)