let div = document.getElementById("div_contenedor");
let boton = document.getElementById("btn__ppal");

boton.addEventListener("mouseover", evento_over);
boton.addEventListener("mouseout", evento_out);
boton.addEventListener("mousedown", evento_down);
boton.addEventListener("mouseup", evento_up);

sessionStorage.setItem('apretado', '0');

function evento_over(){
    if (sessionStorage.getItem('apretado') == 0){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = `<p>evento OVER del botón</p>`
        div.appendChild(parrafo);
    }
}

function evento_out(){
    if (sessionStorage.getItem('apretado') == 0){
        let parrafo = document.createElement("p");
        parrafo.innerHTML = `<p>evento OUT del botón</p>`
        div.appendChild(parrafo);
    }
}

function eliminaOut(){
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function evento_down(){
    if (sessionStorage.getItem('apretado') == '0'){
        boton.innerText ="Suelta para crear el input";
        sessionStorage.setItem('apretado', '1');
    }else{
        boton.innerText ="No funciona más, queda la prueba del ENTER en el input";
    }
}

function evento_up(){
    if (sessionStorage.getItem('apretado') == '1'){
        console.log("que up");
        boton.innerText ="Escribe en el input y presiona ENTER";
        eliminaOut();
        creaForm();
    }
}

function creaForm(){
    if (sessionStorage.getItem('apretado') == 1){
        let nuevo_div = document.createElement("div");
        nuevo_div.innerHTML = `<input id="mi_input" type="text">`
        div.appendChild(nuevo_div);
        sessionStorage.setItem('apretado',2);
        _input = document.getElementById("mi_input");
        _input.addEventListener("change", evento_change_input);
    }
}

function evento_change_input(){
    alert("Terminamos el programa con este ENTER, hasta la prox!");
}