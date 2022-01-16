alert("Buenos días\nArme su pedido de Cervezas");

function eleccion_navegacion(seleccion){
    console.log(seleccion);
    switch(seleccion){
        case "1":
            return "Heineken";
        case "2":
            return "Budwiser";
        case "3":
            return "Quilmes";
        default:
            return "";
    }
}

function pedido(){
    let bucle = true;

    let armado_pedido = "Su pedido es:<br>----------------<br>";
    let msj_prod = "Seleccione un producto:\n1 - Heineken\n2 - Budwiser\n3 - Quilmes";
    let msj_cant = "\nIndique la cantidad:";
    let msj_final = "\n\nV - Ver Pedido\nL - Limpiar todos los datos\nS - Salir";

    let eleccion = "";
    let cerveza = "";
    let cant_sel = "";

    while (bucle == true){

        eleccion = prompt(msj_prod + msj_final);
        switch(eleccion){
            case "V":
            case "v":
                document.write(armado_pedido);
                bucle = false;
                continue;
            
            case "L":
            case "l":
                armado_pedido = "Su pedido es:<br>----------------<br>";
                alert("El pedido entero fue eliminado");
                continue;

            case "S":
            case "s":
                bucle = false;
                continue;
            default:
                cerveza = eleccion_navegacion(eleccion);
                if (cerveza == ""){
                    alert("Error en la selección, inciamos de nuevo.");
                    continue;
                }else{
                    armado_pedido += "<br>Cerveza: " + cerveza;
                }
        }

        cant_sel = prompt(msj_cant);
        armado_pedido += " - Cantidad: " + cant_sel;
    }
    return "Presione Aceptar y a continuación verá su listado.\nGracias por su visita!"
}


alert(pedido());