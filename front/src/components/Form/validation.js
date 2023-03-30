const regexUsername =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
const regexPassword =  /\d/;
const regexPassword2 = /^[\s\S]{6,10}$/;

export function validate (userData){
    let errors = {};

if(!userData.username) errors.username = "El usuario no puede estar vacío";
else if(userData.username.length > 36) errors.username = "El usuario no debe tener más de 35 caracteres";
else if(!regexUsername.test(userData.username))  errors.username = "El usuario tiene que ser un email";
else errors.username = "";

if(!regexPassword.test(userData.password)) errors.password = "Debe tener al menos un dígito"
else if(!regexPassword2.test(userData.password)) errors.password = "El password debe tener entre 6 y 10 caracteres"
else errors.password = "";

return errors;
}