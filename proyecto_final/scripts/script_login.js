//let open_login = document.getElementById("btn_login");
// let input_user = document.getElementById("input_user");
// let input_pass = document.getElementById("input_pass");
// let btn_access = document.getElementById("btn_access");
// let btn_create_user = document.getElementById("btn_create_user");
let modal_login = document.querySelectorAll(".modal_login")[0];


$('#btn_login').click((e)=> {
    e.preventDefault();
    modal_login.style.opacity = "1";
    modal_login.style.visibility = "visible";
});

let close_login = () => {
    $('#input_user').val("");
    $('#input_pass').val("");
    modal_login.style.opacity = "0";
    modal_login.style.visibility = "hidden";
}
// Observa si hay datos en ambos inputs y devuevle TRUE,
// de lo contrario da un aviso que está faltando algún dato
let check_data_inputs = () => {
    if (($('#input_user').val() != "") && ($('#input_pass').val()!="")){return true;}else{
        $('#login_msj_error').show();
    }
}

let query_identity = () => {
    if (check_data_inputs() == true){
        const users = JSON.parse(localStorage.getItem("user"));
        if (($('#input_user').val() == users['name']) && ($('#input_pass').val() == users['pass'])){
            $('#btn_login').text(user['name']);
            close_login();
        }else{
            if ($("#login_msj_error").length){$("#modal_warning").empty();};
            $("#modal_warning").append(`<p id="login_msj_error">
                                        Error en el Usuario o Contraseña</p>`);
            $("#login_msj_error").delay(2000).fadeOut(400);
        }
    }else{
        if ($("#login_msj_error").length){$("#modal_warning").empty();};
        $("#modal_warning").append(`<p id="login_msj_error">
                                    Llene ambos campos</p>`);
        $("#login_msj_error").delay(2000).fadeOut(400);
    }
}


$('#btn_access').click(query_identity);
$('#btn_create_user').click(close_login);
$('#btn_modal_X').click(close_login);
localStorage.setItem("carritoStorage", JSON.stringify(carrito));