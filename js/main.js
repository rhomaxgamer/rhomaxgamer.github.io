function mostrarAlerta(){
    alert ('Hizo Click')
}

function hacerClick(){
    let elemento = document.getElementsByClassName('titulo')[0];
    elemento.addEventListener('click', mostrarAlerta, false);
}
window.addEventListener('load',hacerClick,false);