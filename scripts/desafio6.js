// Clase 5. Incorporar objetos

class turns {
    constructor(profesional, date, hour, client){
        this.Profesional = profesional;
        this.date = date;
        this.hour = hour;
        this.client = client;
    }

    get_turn(){
        return `Consulta: turno para ${this.client} con el/la Doctor/a ${this.Profesional}, el día ${this.date} a las ${this.hour}hs.`;
    }

    set_turn(date, hour){
        this.date = date;
        this.hour = hour;
        this.get_turn();
    }
}

let turn1 = new turns("Agustín Pérez", "viernes 29", "18:00", "Juan Carlos Gonzalez");
let turn2 = new turns("Agustín Pérez", "jueves 28", "11:00", "Juan Pablo Garay");
let turn3 = new turns("Linus Torvalds", "lunes 25", "11:45", "Juan José Pérez");
let turn4 = new turns("Linus Torvalds", "jueves 28", "08:00", "Juan Manuel García");
let turn5 = new turns("Linus Torvalds", "martes 26", "15:00", "Juan Bautista Gómez");


function interfaz(){
    let bucle = true;
    while (bucle === true){
        let query = prompt('Seleccione el cliente para consultar su turno:\n1 - Juan Carlos Gonzalez\n2 - Juan Pablo Garay\n3 - Juan José Pérez\n4 - Juan Manuel García\n5 - Juan Bautista Gómez');
        switch(query){
            case '1':
                alert(turn1.get_turn());
                break;
            case '2':
                alert(turn2.get_turn());
                break;
            case '3':
                alert(turn3.get_turn());
                break;
            case '4':
                alert(turn4.get_turn());
                break;
            case '5':
                alert(turn5.get_turn());
                break;
            default:
                alert("No se encuentra el cliente consultado")
        }
        if (prompt("Desea seguir buscando S/N:")!="S"){
            bucle = false;
            alert("Gracias por utilizar el gestor de turnos de la clínica del doctor Nick Riviera")
        }
    }
}

interfaz()