function obtieneMonto(){
    let monto = Number(prompt("Ingrese el monto total del vehículo:"));
    return monto;
}

function obtieneSeguro(){
    let bucle = true;
    while(bucle == true){
        let seguro = prompt("Ingrese el numero del seguro que desea contratar:\n\n1 - Básico\n2 - Intermedio\n3 - Premium");
        if (seguro == "1" || seguro == "2" || seguro == "3"){
            return seguro;
        }
        alert("Debe ingresar un número del 1 al 3.");
    }
}

function calculaSeguro(monto, seguro){
    let seg, cobertura, costo, porcentaje;

    switch(seguro){
        case "1":
            seg = "Básico";
            cobertura = "Contra Terceros";
            porcentaje = 2.5;
            costo = (monto * (porcentaje / 100)) / 12;
            break;
        case "2":
            seg = "Intermedio";
            cobertura = "Contra Terceros y cristales";
            porcentaje = 5;
            costo = (monto * (porcentaje / 100)) / 12;
            break;
        case "3":
            seg = "Premium";
            cobertura = "Contra todo riesgo";
            porcentaje = 8;
            costo = (monto * (porcentaje / 100)) / 12;
            break;
    }

    return "El seguro que usted contrató es: " + seg + "<br>Cobertura: " + cobertura + "<br>Costo mensual: $ " + costo + "<br><br>El cálculo de su seguro se obtiene del " + porcentaje + "% del total de su vehículo dividido 12."; 
}

function orquestador(){
    alert("Bienvenido al cotizador de seguros");
    let monto = obtieneMonto();
    let seguro = obtieneSeguro();
    document.write(calculaSeguro(monto, seguro));
}

orquestador();