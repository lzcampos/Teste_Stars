let inputs = {
    email:document.getElementById('input-email'),
    senha:document.getElementById('input-password')
};

let btnLogin = document.getElementById('btnLogin');

function checkInputs(input){
    let bool = true;
    for(prop in input){
        if(input[prop].value === ""){
            bool = false;
        }
    }
    return bool;
}

function checkUser(input){
    let bool = false;
    let items = {...localStorage};
    for(item in items){
        let user = JSON.parse(localStorage.getItem(item));
        if(user['email'] === input['email'].value && user['senha'] === input['senha'].value){
            bool = true;
            break;
        }
    }
    return bool;
}

window.onload = () =>{
    btnLogin.addEventListener('click', () =>{
        if(checkInputs(inputs)){
            if(checkUser(inputs)){
                sessionStorage.setItem('codigoSessao', JSON.parse(localStorage.getItem(inputs.email.value))['codigo']);
                window.location.href = "src/pages/listagem.html";
            } else {
                alert("Usuário não cadastrado.")
            }
        } else {
            alert("É necessário preencher todos os campos.")
        }
    });
};