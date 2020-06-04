const validar = () =>{
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    if(user == "camilo" && pass == "1234"){
        window.location.replace("../index.html");
    }else{
        alert("Usuario y/o contraseña incorrectos");
    }
}
