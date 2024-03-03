const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confir_password = document.getElementById("confirm-password");

const submit = document.getElementById("btn")


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

const validateInputs = () => {
    const usernameValue = userName.Value.trim();
    const emailValue = email.Value.trim();
    const password = password.Value.trim();
    const confir_password = confir_password.Value.trim();

    if (usernameValue === '') {
        setError(username, 'This is required')
    } else {
        setSuccess(username);
    }
    if(passwordValue=== ''){
        setError(password, 'password is required')

    }else if(passwordValue.length<8){
        setError(password, 'password must be at least 8 character')
    }else {
        setSuccess(password);
    }
    if(confir_password=== ''){
        setError(confir_password, 'please enter confirm  password')
    }

    const setError=(element,message)=>{
        const inputControl=element.parentElement;
        const errorDisplay=inputControl.querySelector('.erro');
        errorDisplay.innerText=message;


        inputControl.classList.add('error');
        inputControl.classList.remove('sucess');

    }


}