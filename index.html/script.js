
function  (elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.array.forEach((Letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += Letra;
        }, 75 * i);
    });





const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit",(event) => {
    event.preventDefault();


//vericação do nome correto
if (nameInput.value === ""){
    alert("Por favor, preencha o seu nome");
    return;
}

//Verificar se o e-mail está preenchido e se é válido

if(emailInput.value ==="" || !isEmailValid(emailInput.value)){
    alert("por favor, preencha o seu email");
    return;
}

//Se estiver correto enviar formulário

form.submit();
});

//Fução que valida o e-mail
function isEmailValid(email){
    //cria uma regex para validar e-mail
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.text(email)){
        return true;
    }
    return false;
}}