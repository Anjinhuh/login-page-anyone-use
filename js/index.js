
function lambeCu(){
    let usuario = document.getElementById('user').value
    let senha = document.getElementById('password').value

    console.log("USUARIO? " + usuario + " SENHA? " + senha)
    if(usuario == "Juliano"){
        let uu = document.getElementById('add-message')

        uu.innerHTML= '<p class="person-logged">Logado com Sucesso!</p>'
    }
    
}

document.getElementById('button-login').onclick = function() { lambeCu()}