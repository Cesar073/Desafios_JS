// Este script va a representar lo que me gustaría que haya en una base de datos. Básicamente cargo todo en el localStorage
// cada vez que se inicia la página, por ende coloco el script en el inicio del archivo HTML, pero habría que tener en cuenta
// que en un proyecto completo dichas líneas de código no existirían porque estaría esta info en una db.
// Por otro lado, hago una comprobación de la existencia de los datos para que sólo se creen la primera vez y no me
// sobrescriba los datos cargados con anterioridad, para que se mantengan las modificaciones que realice el usuario.

// NOTA: para facilitar el control resumo el dato de los horarios de los profesionales:
// prof0 = Agustín Pérez => [lun a mie = mañana] [jue y vie = tarde]
// prof1 = Linus Torvalds => [sólo tarde]
// prof2 = Bill Gates => [todos los horarios]

const prof0 = {
    name: "Agustín Pérez",
    specialty: "Traumatología",
    mon_work_shedule: ["08:30hs","09:00hs","09:30hs","10:00hs","10:30hs","11:00hs","11:30hs","12:00hs"],
    tue_work_shedule: ["08:30hs","09:00hs","09:30hs","10:00hs","10:30hs","11:00hs","11:30hs","12:00hs"],
    wed_work_shedule: ["08:30hs","09:00hs","09:30hs","10:00hs","10:30hs","11:00hs","11:30hs","12:00hs"],
    thu_work_shedule: ["16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
    fri_work_shedule: ["16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
}

const prof1 = {
    name: "Linus Torvalds",
    specialty: "Traumatología",
    mon_work_shedule: ["16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
    tue_work_shedule: ["16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
    wed_work_shedule: ["16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
    thu_work_shedule: ["16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
    fri_work_shedule: ["16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
}

const prof2 = {
    name: "Bill Gates",
    specialty: "Traumatología",
    mon_work_shedule: ["08:30hs","09:00hs","09:30hs","10:00hs","10:30hs","11:00hs","11:30hs","12:00hs","16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
    tue_work_shedule: ["08:30hs","09:00hs","09:30hs","10:00hs","10:30hs","11:00hs","11:30hs","12:00hs","16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
    wed_work_shedule: ["08:30hs","09:00hs","09:30hs","10:00hs","10:30hs","11:00hs","11:30hs","12:00hs","16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
    thu_work_shedule: ["08:30hs","09:00hs","09:30hs","10:00hs","10:30hs","11:00hs","11:30hs","12:00hs","16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
    fri_work_shedule: ["08:30hs","09:00hs","09:30hs","10:00hs","10:30hs","11:00hs","11:30hs","12:00hs","16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"],
}

let arrayDays = ["Lunes","Martes","Miércoles","Jueves","Viernes"];
let arrayHours = ["08:30hs","09:00hs","09:30hs","10:00hs","10:30hs","11:00hs","11:30hs","12:00hs","16:00hs","16:30hs","17:00hs","17:30hs","18:00hs","18:30hs"];
let arrayPatients = ["Gisel Aguiar", "Andres López","Matías Martos","Liliana Fonseca","Jorge Rivas","Marcos Leones", "Alicia Ferrero"];
let user = {name: "admin",
            pass: "123456",
        }

// Subimos al localStorage el JSON con los datos
if (localStorage.length > 0){

}else{
    const _prof0 = JSON.stringify(prof0);
    const _prof1 = JSON.stringify(prof1);
    const _prof2 = JSON.stringify(prof2);
    const _arrayDays = JSON.stringify(arrayDays);
    const _arrayHours = JSON.stringify(arrayHours);
    const _arrayPatients = JSON.stringify(arrayPatients);
    const _user = JSON.stringify(user);

    localStorage.setItem("prof0", _prof0);
    localStorage.setItem("prof1", _prof1);
    localStorage.setItem("prof2", _prof2);
    localStorage.setItem("arrayDays", _arrayDays);
    localStorage.setItem("arrayHours", _arrayHours);
    localStorage.setItem("arrayPatients", _arrayPatients);
    localStorage.setItem("user",_user);
}