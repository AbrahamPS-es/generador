let cantidad=document.getElementById('cantidad');
let boton=document.getElementById('generar');
let contrasena=document.getElementById('contrasena');
let validar=document.getElementById('validar');
const cadenaCaracteres='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){
    let numeroDigitado=parseInt(cantidad.value);
    let password='';
    if (numeroDigitado<6 || cantidad.value==''){
        alert("La cantidad de caracteres debe ser mayor a 6");
        contrasena.value='';
    }else{
        for(let i=0; i<numeroDigitado; i++){
        let caracterAleatorio=cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password+=caracterAleatorio;
        }
        contrasena.value=password;
    }
}

function val(){
    let caracteresEspeciales=/[!@#$%^&*()]/;
    if(contrasena.value==''){
        alert('No se ha generado una contraseña');
    }else{
        if(caracteresEspeciales.test(contrasena.value)){
            alert('La contraseña es FUERTE');
        }else{
            alert('La contraseña es DEBIL. No contiene caracteres especiales');
        }
    }
}

function limpiar(){
    cantidad.value='';
    contrasena.value='';
}