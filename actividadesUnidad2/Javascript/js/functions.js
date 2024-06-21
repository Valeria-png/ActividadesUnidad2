const btnSave = document.getElementById('saveBtn');
const inputName = document.getElementById('nameInput');
const inputLastName = document.getElementById('lastNameInput');
const inputLastName2 = document.getElementById('lastNameInput2');
const inputAge = document.getElementById('ageInput');
const inputPhone = document.getElementById('phoneInput');
const inputDate = document.getElementById('date');
const inputGender = document.getElementsByName('genderV');
btnSave.addEventListener('click', () => {
    const content =document.createElement('p');
    content.innerHTML = `Hola ${inputName.value + ' '+ inputLastName.value+ ' '+ inputLastName2.value}. Tienes ${inputAge.value} años y tu número de teléfono es ${inputPhone.value}`;
    const content2 =document.createElement('p');
    content2.innerHTML = `La fecha de hoy es ${inputDate.value} y eres ${inputGender.value}`;
    document.body.appendChild(content);
    document.body.appendChild(content2);
})      