// Clase 5. Incorporar objetos

class turns {
    constructor(profesional, date, hour, client){
        this.Profesional = profesional;
        this.date = date;
        this.hour = hour;
        this.client = client;
    }

    get_turn(){
        return `Consulta: turno para ${this.client} con el/la profesional ${this.Profesional}, el día ${this.date} a las ${this.hour}.`;
    }

    set_turn(date, hour){
        this.date = date;
        this.hour = hour;
        this.get_turn();
    }
}

let arrayProf = ["Agustín Pérez", "Linus Torvalds", "Bill Gates"];
let arrayDays = ["Lunes","Martes","Miércoles","Jueves","Viernes"];
let arrayHours = ["08:00hs","09:00hs","10:00hs","11:00hs","12:00hs","16:00hs","17:00hs","18:00hs"];
let arrayTurns = [];

function interfaz(){
    let bucle = true;
    while (bucle === true){

        let nameClient = prompt("Bienvenido a la clínica del Dr. Nick Riviera:\nIngrese su nombre:")

        let texto = "";
        for(let drs = 0; drs < arrayProf.length; drs++){
            texto += `${(drs + 1).toString()} - ${arrayProf[drs]}\n`
        }
        let dr = Number(prompt('Seleccione el Médico Clínico para crear un turno nuevo:\n' + texto));

        texto = "";
        for(let drs = 0; drs < arrayDays.length; drs++){
            texto += `${(drs + 1).toString()} - ${arrayDays[drs]}\n`
        }
        let day = Number(prompt('Seleccione el día:\n' + texto));
        
        texto = "";
        for(let drs = 0; drs < arrayHours.length; drs++){
            texto += `${(drs + 1).toString()} - ${arrayHours[drs]}\n`
        }
        let hour = Number(prompt('Seleccione un horario: \n ' + texto));

        arrayTurns.push(new turns(arrayProf[dr - 1], arrayDays[day - 1],arrayHours[hour - 1], nameClient));

        if (prompt("¿Desea cargar otro turno? S/N:")!="S"){
            bucle = false;
            alert("Gracias por utilizar el gestor de turnos de la clínica del doctor Nick Riviera");
        }
    }
    //Imprimimos por console.log todos los turnos que se generaron
    for (let turno = 0; turno < arrayTurns.length; turno++){
        console.log(arrayTurns[turno].get_turn());
        document.write(`<h3>${arrayTurns[turno].get_turn()}</h3>`);
    }
}

interfaz()