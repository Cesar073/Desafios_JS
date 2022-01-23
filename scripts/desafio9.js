// Clase 6. Ordenar un array de objetos.

class turns {
    constructor(professional, date, hour, client){
        this.professional = professional;
        this.date = date;
        this.hour = hour;
        this.client = client;
    }

    get_turn(){
        return `Consulta: turno para ${this.client} con el/la professional ${this.professional}, el día ${this.date} a las ${this.hour}.`;
    }
}

arrayProf = ["Agustín Pérez", "Linus Torvalds", "Bill Gates"];
arrayDays = ["Lunes","Martes","Miércoles","Jueves","Viernes"];
arrayHours = ["08:00hs","09:00hs","10:00hs","11:00hs","12:00hs","16:00hs","17:00hs","18:00hs"];
arrayPatient = ["Gisel Aguiar", "Andres López","Matías Martos","Liliana Fonseca","Jorge Rivas","Marcos Leones", "Alicia Ferrero"];
arrayTurns = [];

function crate_data(){
    // Creo un arrays de objetos(turnos) para poder trabajar en su búsqueda, pero se pueden seguir agregando turnos.
    // Adicionalmente creo estas variables y array de nombres, sólo para crear varios turnos donde se repitan los professionales, clientes, horarios y días, pero no debería formar parte del programa.
    let aux_prof = 0;
    let aux_day = 0;
    let aux_Hour = 0;
    let aux_client = 0;
    for(let count = 0;count < 100; count++){
        if(aux_prof === 2){aux_prof = 0}else{aux_prof+=1};
        if(aux_day === 4){aux_day = 0}else{aux_day+=1};
        if(aux_Hour === 7){aux_Hour = 0}else{aux_Hour+=1};
        if(aux_client === 5){aux_client = 0}else{aux_client+=1};
        arrayTurns.push(new turns(arrayProf[aux_prof], arrayDays[aux_day], arrayHours[aux_Hour], arrayPatient[aux_client]))
    }
}

function aux_select_prof(){
    let text = "";
    for(let drs = 0; drs < arrayProf.length; drs++){
        text += `${(drs + 1).toString()} - ${arrayProf[drs]}\n`
    }
    return Number(prompt('Seleccione el Profesional:\n' + text)) - 1;
}
function aux_select_day(){
    let text = "";
    for(let days = 0; days < arrayDays.length; days++){
        text += `${(days + 1).toString()} - ${arrayDays[days]}\n`
    }
    return Number(prompt('Seleccione el día:\n' + text)) - 1;
}
function aux_select_hour(){
    let text = "";
    for(let hours = 0; hours < arrayHours.length; hours++){
        text += `${(hours + 1).toString()} - ${arrayHours[hours]}\n`
    }
    return Number(prompt('Seleccione un horario: \n ' + text)) - 1;
}
function aux_select_client(){
    let text = "";
    for(let client = 0; client < arrayPatient.length; client++){
        text += `${(client + 1).toString()} - ${arrayPatient[client]}\n`
    }
    return Number(prompt('Seleccione un Paciente: \n ' + text)) - 1;
}

function add_turns(){
    let nameClient = prompt("Ingrese su nombre:");
    arrayPatient.push(nameClient)

    let dr = aux_select_prof();

    let day = aux_select_day();

    let hour = aux_select_hour();

    arrayTurns.push(new turns(arrayProf[dr], arrayDays[day],arrayHours[hour], nameClient));

    //Imprimimos el turno agregado
    position = arrayTurns.length - 1
    document.write(`<h3>${arrayTurns[position].get_turn()}</h3>`);
}

function query_turns(){
    let opc = prompt("Indique cómo desea buscar un turno:\n1 - Por professional\n2 - Por paciente\n3 - Por día");
    let results;
    let opc2;
    switch(opc){
        case "1":
            opc2 = aux_select_prof();
            results = arrayTurns.filter(turn => turn.professional == arrayProf[opc2]);
            results.sort(function(a,b){if(a.client < b.client){return 1}else{return -1};});
            print_results(results, arrayProf[opc2], 1, 2, 3);
            break;
        case "2":
            opc2 = aux_select_client();
            results = arrayTurns.filter(turn => turn.client == arrayPatient[opc2]);
            results.sort(function(a,b){if(a.professional < b.professional){return 1}else{return -1};});
            print_results(results, arrayPatient[opc2], 0, 1, 2);
            break;
        case "3":
            opc2 = aux_select_day();
            results = arrayTurns.filter(turn => turn.date == arrayDays[opc2]);
            results.sort(function(a,b){if(a.hour > b.hour){return 1}else{return -1};});
            print_results(results, arrayDays[opc2], 0, 2, 3);
            break;
    }
}

function print_results(results, title, pos1, pos2, pos3){
    
    let text = "";
    for(let result of results){
        let temp_text = "<li><h3>"
        for(let count = 0; count < 3; count++){

            let select;
            switch(count){
                case 0:
                    select = pos1;
                    break;
                case 1:
                    select = pos2;
                    break;
                default:
                    select = pos3;
                    break;
            }

            switch(select){
                case 0:
                    temp_text += result.professional + " - "
                    break;
                case 1:
                    temp_text += result.date + " - "
                    break;
                case 2:
                    temp_text += result.hour + " - "
                    break;
                case 3:
                    temp_text += result.client + " - "
                    break;
            }
        }
        temp_text = temp_text.slice(0,-3);
        text += `${temp_text}</h3></li>`
    }
    document.write(`<br><h2>${title}</h2>`);
    document.write(`<ul>${text}<ul>`);
}

function interfaz(){
    let bucle = true;
    do{
        let opc = prompt("Bienvenido a la clínica del Dr. Nick Riviera\n\nIndique qué desea hacer:\n1 - Crear turno\n2 - Buscar turnos\nSale del bucle con Enter o cualquier text");
        switch(opc){
            case "1":
                add_turns();
                break;
            case "2":
                query_turns();
                // Debido a que muestro los resultados con document.write, necesito terminar el bucle para que puedan visualizarse, así que por defecto termino con el bucle.
                bucle = false;
                break;
            default:
                bucle = false;
                break;
        }
    }while(bucle === true);
        
    alert("Gracias por utilizar el gestor de turnos de la clínica del doctor Nick Riviera");
}

crate_data()
interfaz()