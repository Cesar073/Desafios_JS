// Clase 6. Ordenar un array de objetos.

class turns {
    constructor(professional, date, hour, client){
        this.professional = professional;
        this.date = date;
        this.hour = hour;
        this.client = client;
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
    for(let count = 0;count < 50; count++){
        if(aux_prof === 2){aux_prof = 0}else{aux_prof+=1};
        if(aux_day === 4){aux_day = 0}else{aux_day+=1};
        if(aux_Hour === 7){aux_Hour = 0}else{aux_Hour+=1};
        if(aux_client === 5){aux_client = 0}else{aux_client+=1};
        arrayTurns.push(new turns(arrayProf[aux_prof], arrayDays[aux_day], arrayHours[aux_Hour], arrayPatient[aux_client]))
    }
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

function print_results(results, title){
    // Ponemos de título el nombre del profesional
    let section_turns_title = document.getElementById("turns_title");
    section_turns_title.textContent = `${title}`

    // Creo un array nuevo de objetos, en función a lo que me vino en results
    // bandera para distribuir los divs de izq y derecha
    let flag = "left";
    for(let result of results){
        let turn_obj = {};
        turn_obj['pos1'] = result.date;
        turn_obj['pos2'] = result.hour;
        turn_obj['pos3'] = result.client;
        print_turns(turn_obj,flag);
        if (flag=="left"){flag="right"}else{flag="left"}
    }
}

function print_turns(data_array, flag){
    let section_turns = document.getElementById("turns");
    let section_turns_container = document.createElement("div");
    section_turns_container.innerHTML = `<div class="${flag}"><p>${data_array.pos1}</p>
                                        <p>${data_array.pos2}</p>
                                        <p>${data_array.pos3}</p></div>`
    section_turns.appendChild(section_turns_container);
}

function generate_divs(){
    results = arrayTurns.filter(turn => turn.professional == "Linus Torvalds");
    print_results(results, "Linus Torvalds");
}

crate_data();
generate_divs();
//interfaz()