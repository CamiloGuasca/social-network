
const formulario = document.getElementById('formulario_registro');


const usersPersisted = window.localStorage;

console.log(usersPersisted);

let aux = 0;
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const user = document.getElementById('user').value;
    const pass1 = document.getElementById('pass1').value;
    const pass2 = document.getElementById('pass2').value;
    const email= document.getElementById('email').value;
    const date = document.getElementById('date').value;

    if(validar(pass1,pass2)){
        const usuario={
            user,
            password: pass1,
            email,
            bornDate: date
        };
        // JSON - Java Script Object Notation
        usersPersisted.setItem(aux, JSON.stringify(usuario));
        aux++;


        // Redirigir o notificar del registro exitoso.
    }else{
        alert('Contraseñas no coinciden');
    }
});

const validar = (pass1,pass2) =>{
    if(pass1==pass2){
        return true;
    }else{
       return false;
    }
}
