

function getForm(){

const formReg = document.getElementById('form-reg');
const formLog = document.getElementById('form-log');
const error = document.getElementById('error');

if(formReg){
    formReg.addEventListener('submit', async (e) => {
        e.preventDefault();
        const {name, password, email} = e.target;
        const response = await fetch(e.target.dataset.way, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
               name: name.value,
               password: password.value,
               email: email.value
            })
        })
        const data = await response.json();
            error.innerHTML = '';
        if(data.message === 'name') {
            error.innerHTML = 'Необходимо ввести имя!';
        }
        else if(data.message === 'email') {
            error.innerHTML = 'Необходимо ввести адрес электронной почты!';
        }
        else if(data.message === 'password') {
            error.innerHTML = 'Пароль не может быть короче трёх символов!';
        }
        else if(data.message === 'in'){
            error.innerHTML = 'Пользователь с таким адресом электронной почты уже существует!';
        }
        else if(data.message === 'ok'){
            
          window.location.assign('/');

        }
        else{
            error.innerHTML = data.message;
        }
    })
}
else if(formLog){
    formLog.addEventListener('submit', (e) => {
        e.preventDefault();
const {email, password} = e.target;
fetch(e.target.dataset.way, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
       name: name.value,
       password: password.value,
       email: email.value
    })
})
.then(value => {
return value.json();
})
.then(data => {
    if(data.message === true){
        window.location.assign('/');
    }
    else{

        error.innerHTML = 'Неверный адрес электронной почты или пароль';

    }
})
.catch(err => error.innerHTML = err.message )
    })
}

};


getForm();