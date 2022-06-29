const imgUm = document.getElementById('um');
const imgDois = document.getElementById('dois');
const imgTres = document.getElementById('tres');
const imgQuatro = document.getElementById('quatro');
let arrayImgs = [];
arrayImgs.push(imgUm, imgDois, imgTres, imgQuatro);


function changeImg() {
    arrayImgs.forEach((element) => {
        if(element.classList.contains('grande')) {
            element.classList.add('pequenos')
            element.classList.remove('grande')
        }
        if(event.target.classList.contains('pequenos')) {
            event.target.classList.remove('pequenos')
            event.target.classList.add('grande')
        }        
    })    
}
