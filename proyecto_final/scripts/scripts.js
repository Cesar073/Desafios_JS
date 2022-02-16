// Clase 6. Ordenar un array de objetos.

_input0 = document.getElementById("input_professional");
_input1 = document.getElementById("input_day");
_input2 = document.getElementById("input_specialization");

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

class professional{
    constructor(professional){
        this.professional = professional;
        this.monday = [];
        this.tuesday = [];
        this.wednesday = [];
        this.thursday = [];
        this.friday = [];
    }
    set_hours(day, hour){
        switch(day){
            case 0:
                this.monday.push(hour)
            case 1:
                this.tuesday.push(hour)
            case 2:
                this.wednesday.push(hour)
            case 3:
                this.thursday.push(hour)
            case 4:
                this.friday.push(hour)
        }
    }
    get_hours(day){
        switch (day){
            case 0:
                return this.monday;
            case 1:
                return this.tuesday;
            case 2:
                return this.wednesday;
            case 3:
                return this.thursday;
            case 4:
                return this.friday;
        }
    }
}

arrayProf = ["Agustín Pérez", "Linus Torvalds", "Bill Gates"];
arrayDays = ["Lunes","Martes","Miércoles","Jueves","Viernes"];
arrayHours = ["08:30hs","09:00hs","09:30hs","10:00hs","10:30hs","11:00hs","11:30hs","12:00hs","16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"];
arrayPatient = ["Gisel Aguiar", "Andres López","Matías Martos","Liliana Fonseca","Jorge Rivas","Marcos Leones", "Alicia Ferrero"];
arrayTurns = [];
arrayTurnsProf = [];

let prof0 = new professional("Agustín Pérez")
let prof1 = new professional("Linus Torvalds")
let prof2 = new professional("Bill Gates")

function crate_data(){
    // Creo un arrays de objetos(turnos) para poder trabajar en su búsqueda, pero se pueden seguir agregando turnos.
    // Adicionalmente creo estas variables y array de nombres, sólo para crear varios turnos donde se repitan los professionales, clientes, horarios y días, pero no debería formar parte del programa.
    let aux_prof = 0;
    let aux_day = 0;
    let aux_Hour = 0;
    let aux_client = 0;
    for(let count = 0;count < 30; count++){
        if(aux_prof === 2){aux_prof = 0}else{aux_prof+=1};
        if(aux_day === 4){aux_day = 0}else{aux_day+=1};
        if(aux_Hour === 13){aux_Hour = 0}else{aux_Hour+=1};
        if(aux_client === 5){aux_client = 0}else{aux_client+=1};
        arrayTurns.push(new turns(arrayProf[aux_prof], arrayDays[aux_day], arrayHours[aux_Hour], arrayPatient[aux_client]))
        switch(aux_prof){
            case 0:
                prof0.set_hours(aux_day, arrayHours[aux_Hour]);
                break;
            case 1:
                prof1.set_hours(aux_day, arrayHours[aux_Hour]);
                break;
            case 2:
                prof2.set_hours(aux_day, arrayHours[aux_Hour]);
                break;
        }
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
    let section_turns_title = document.getElementById("turns_title");
    section_turns_title.textContent = `${title}`
    for(let result of results){
        let turn_obj = {};
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
                    switch(count){
                        case 0:
                            turn_obj['pos1'] = result.professional;
                            break
                        case 1:
                            turn_obj['pos2'] = result.professional;
                            break
                        default:
                            turn_obj['pos3'] = result.professional;
                            break
                    }                    
                    break;
                case 1:
                    switch(count){
                        case 0:
                            turn_obj['pos1'] = result.date;
                            break
                        case 1:
                            turn_obj['pos2'] = result.date;
                            break
                        default:
                            turn_obj['pos3'] = result.date;
                            break
                    }
                    break;
                case 2:
                    switch(count){
                        case 0:
                            turn_obj['pos1'] = result.hour;
                            break
                        case 1:
                            turn_obj['pos2'] = result.hour;
                            break
                        default:
                            turn_obj['pos3'] = result.hour;
                            break
                    }
                    break;
                case 3:
                    switch(count){
                        case 0:
                            turn_obj['pos1'] = result.client2;
                            break
                        case 1:
                            turn_obj['pos2'] = result.client;
                            break
                        default:
                            turn_obj['pos3'] = result.client;
                            break
                    }
                    break;
            }
        }
        print_turns(turn_obj);
    }
}

function print_turns(data_array){
    let section_turns = document.getElementById("turns");
    let section_turns_container = document.createElement("div");
    section_turns_container.innerHTML = `<p>${data_array.pos1}<br>
                                        ${data_array.pos2}<br>
                                        ${data_array.pos3}<p>`
    section_turns.appendChild(section_turns_container);
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
                bucle = false;
                break;
            default:
                bucle = false;
                break;
        }
    }while(bucle === true);
        
    alert("Gracias por utilizar el gestor de turnos de la clínica del doctor Nick Riviera");
}

function search_prof(prof){
    let position = prof0.professional.indexOf(prof);
    console.log(`position = ${position}`)
    if (position >= 0){
        console.log("Posición 0")
        fill_data(0);
        return true;
    }else{
        position = prof1.professional.indexOf(prof);
        if (position >= 0){
            console.log("Posición 1")
            fill_data(1);
            return true;
        }else{
            position = prof2.professional.indexOf(prof);
            if (position >= 0){
                console.log("Posición 2")
                fill_data(2);
                return true;
            }else{
                return false;
            }
        }
    }
}

function fill_data(prof){
    let _search_prof;
    switch(prof){
        case 0:
            _search_prof = prof0;
            break;
        case 1:
            _search_prof = prof1;
            break;
        case 2:
            _search_prof = prof2;
            break;
    }
    for (let count = 0; count < 5; count++){
        console.log(`Profesional buscado = ${_search_prof.professional}`);
        console.log(`Chusmeando si el prof tiene turnos: ${prof1.monday}`)
        let row_hor = document.getElementById("row__hor");
        let insert_div = document.createElement("div");
        let texto = "";
        for (let i of arrayHours){
            switch (count){
                case 0:
                    if (_search_prof.monday.includes(i) == true){
                        texto += `<p class="horario_true">${i}</p>`;
                    }else{
                        texto += `<p class="horario_false">${i}</p>`;
                    }
                    break;
                case 1:
                    if (_search_prof.tuesday.includes(i) == true){
                        texto += `<p class="horario_true">${i}</p>`;
                    }else{
                        texto += `<p class="horario_false">${i}</p>`;
                    }
                    break;
                case 2:
                    if (_search_prof.wednesday.includes(i) == true){
                        texto += `<p class="horario_true">${i}</p>`;
                    }else{
                        texto += `<p class="horario_false">${i}</p>`;
                    }
                    break;
                case 3:
                    if (_search_prof.thursday.includes(i) == true){
                        texto += `<p class="horario_true">${i}</p>`;
                    }else{
                        texto += `<p class="horario_false">${i}</p>`;
                    }
                    break;
                case 4:
                    if (_search_prof.friday.includes(i) == true){
                        texto += `<p class="horario_true">${i}</p>`;
                    }else{
                        texto += `<p class="horario_false">${i}</p>`;
                    }
                    break;
            }
        }
        insert_div.innerHTML = texto;
        console.log(`El texto que me quedó:\n${texto}`);
        row_hor.appendChild(insert_div);
    }
}

function evento_change_input_0(){
    let value = document.getElementById("input_professional").value;
    console.log(`Paso 1: value = ${value}`);
    if (value != ""){
        let retorno = search_prof(value);
        console.log(`Paso 2: ${retorno}`);

        if (retorno == false){
            alert("No se encontró el valor buscado");
        }
    }
}

function evento_change_input_1(){
    let value = document.getElementById("input_day").value;
    console.log(`Paso 1: value = ${value}`);
    if (value != ""){
        alert("En construcción");
    }
}

function evento_change_input_2(){
    let value = document.getElementById("input_specialization").value;
    console.log(`Paso 1: value = ${value}`);
    if (value != ""){
        alert("En construcción");
    }
}

_input0.addEventListener("change", evento_change_input_0);
_input1.addEventListener("change", evento_change_input_1);
_input2.addEventListener("change", evento_change_input_2);
crate_data();
// interfaz()
