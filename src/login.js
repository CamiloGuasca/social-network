const users = window.localStorage;


for (let index = 1; index < 10; index++) {
    
    console.log(JSON.parse(users.getItem(index)));
    
}

const validar = () =>{
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    if(user == "camilo" && pass == "1234"){
        window.location.replace("../index.html");
    }else{
        alert("Usuario y/o contraseña incorrectos");
    }
}

// Homework
/*
    1. Validar contraseña
        1.1 minimo 8 caracteres de longitud
        1.2 incluir minimo un simbolo )(/&%$#"!)
        1.3 Mayscula y minuscula (1)
        1.4 N+umero
    2. Validar usuarios registrados en localStorage.
        2.1 diferente correo
    3. Crear cuenta en 000webhost.com
    4. mySQL workbench / XAMPP
*/