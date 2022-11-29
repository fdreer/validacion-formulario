const d = document;
const inputs = d.querySelectorAll('input');

const nameInput = d.querySelector('.input-name');
const emailInput = d.querySelector('.input-email');
const password_1Input = d.querySelector('.input-password_1');
const password_2Input = d.querySelector('.input-password_2');
const checkboxInput = d.querySelector('.input-checkbox');


d.addEventListener('DOMContentLoaded', ()=>{

    nameInput.addEventListener('keyup', ()=>{
        
        pintarErrores(nameInput, validarNombre(nameInput.value));
    })

    emailInput.addEventListener('keyup', ()=>{
        
        pintarErrores(emailInput, validarNombre(emailInput.value));
        
        if (emailInput.value === '') {
            emailInput.classList.remove('box-shadow-error');
        }
    })

})


function obtenerDatosInputs() {
    
    const dataUser = {
        name:'',
        email:'',
        password_1:'',
        password_2:'',
        terminos: false
    }

    dataUser.name = nameInput.value;
    dataUser.email = emailInput.value;
    dataUser.password_1 = password_1Input.value;
    dataUser.password_2 = password_2Input.value;
    dataUser.terminos = checkboxInput.checked;

    return dataUser;
}


function pintarErrores(input, validacion) {
    
    if (!validacion) {
        input.classList.remove('box-shadow-normal');
        input.classList.add('box-shadow-error');
    } else {
        input.classList.remove('box-shadow-error');
        input.classList.add('box-shadow-normal');
    }
}

function validarNombre(dataUserNombre) {
    
    const regex = new RegExp("^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$");
    
    return regex.test(dataUserNombre) || dataUserNombre === '';
}

function validarEmail(dataUserEmail) {

    const regex = new RegExp("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$");
    
    return regex.test(dataUserEmail) || dataUserEmail === '';
}

function validarPassword(params) {
    
}

function validarTerminos(params) {
    
}