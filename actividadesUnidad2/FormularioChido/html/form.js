const regBtn = document.getElementById('register');
const nameI = document.getElementById('nameInput');
const lastNameI = document.getElementById('lastNameInput');
const mailI = document.getElementById('mailInput');
const birthdayI = document.getElementById('birthdayInput');
const userI = document.getElementById('usernameInput');
const passwordI = document.getElementById('passwordInput');
const document2 =document.getElementById('registrationConfirmed');

regBtn.addEventListener('click', (y) =>
{
    let messages = [];
    if(!mailI.value.includes("@")){
        messages.push("No está completo el correo");
        mailInput.style.borderColor = "red";
    }
    const today = new Date();
    const birthdate = new Date(birthdayI.value)
    let age = today.getFullYear() - birthdate.getFullYear();
    let monthDif = today.getMonth() - birthdate.getMonth();
    if(monthDif <0 ||(monthDif === 0 && today.getDate() < birthdate.getDate())){
        age--;
    }
    if(age<13){
        messages.push("Tienes que tener 13 años para registrarte");
        birthdayInput.style.borderColor = "red";
    }
    if(userI.value.length>=30){
        messages.push("El username debe ser menor a 30 caracteres");
        usernameInput.style.borderColor = "red";
    }
    const specialChars = /[#@!$%&*()_=]/;
    if(!specialChars.test(passwordI.value)){
        messages.push("La contraseña debe contener caracteres especiales como #,!,$,etc");
        passwordInput.style.borderColor = "red";
    }
    
    if(passwordI.value.length<8){
        messages.push("La contraseña es de mínimo 8 caracteres");
        passwordInput.style.borderColor = "red";
    }
    const numbers = /[0-9]/;
    if(!numbers.test(passwordI.value)){
        messages.push("La contraseña debe contener números");
        passwordInput.style.borderColor = "red";
    }
    const uppercases = /[A-Z]/;
    if(!uppercases.test(passwordI.value)){
        messages.push("La contraseña debe contener mayúsculas");
        passwordInput.style.borderColor = "red";
    }
    if(messages.length>0){
        y.preventDefault();
        alert(messages.join('. '));
    }
    else{
        alert(`Hola ${nameI.value + " "+ lastNameI.value} te has registrado! Te contactaremos por medio de ${mailI.value}. Tu nombre de usuario: ${userI.value} y tu fecha de nacimiento: ${birthdayI.value} se han guardado.`);
    }
    

})