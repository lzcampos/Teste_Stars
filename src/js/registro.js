let inputs = {
    name:document.getElementById('input-username'),
    email:document.getElementById('input-email'),
    telefone:document.getElementById('input-phone'),
    senha:document.getElementById('input-password')
};

let btnRegistro = document.getElementById('btnRegistro');

function makeObject(input){
    return {
        'codigo': getCodigo(),
        'name': input.name.value,
        'email': input.email.value,
        'telefone': input.telefone.value,
        'senha': input.senha.value    
    };
}

function getCodigo(){
    return ++Object.keys(localStorage).length;
}

function checkUser(input){
    let bool = true;
    let items = {...localStorage};
    for(item in items){
        if(input['email'].value === item){
            bool = false;
        }
    }
    return bool;
}

function checkInputs(input){
    let bool = true;
    for(prop in input){
        if(input[prop].value === ""){
            bool = false;
        }
    }
    return bool;
}

window.onload = () => {
    btnRegistro.addEventListener('click', () => {
        if(checkInputs(inputs)){
            if(checkUser(inputs)){
                let userValues = makeObject(inputs);
                localStorage.setItem(userValues.email, JSON.stringify(userValues));
                alert("Usuário cadastrado com sucesso!");
                window.location.href = "../../index.html";
            } else {
                alert("E-mail já cadastrado.");
            }
        } else{
            alert("É necessário preencher todos os campos. ");
        }
    });
}