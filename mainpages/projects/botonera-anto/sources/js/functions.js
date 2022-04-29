function reproducir(audio){
    const sonido = new Audio(audio);
    sonido.play();
    sonido.loop = false; 
    //sonido.playbackRate = 2; 
}

function mostrarMsj(){
    alert('A')
}

function mensajeDs(){
    let elemento = document.getElementById('cws-img');
    elemento.addEventListener("mouseover", mostrarMsj, false)
}

window.addEventListener('load', mensajeDs, false)