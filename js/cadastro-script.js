const form = document.getElementById('form')
const nome = document.getElementById('nome')
const senha = document.getElementById('senha')
const email = document.getElementById('email')
const idade = document.getElementById('idade')
form.addEventListener("submit", (e) => {
    e.preventDefault()
    validarinputs()
})

function validarinputs(){
    const nomeValor = nome.value
    const senhaValor = senha.value
    const emailValor = email.value
    const idadeValor = idade.value

    //Validar Nome
    if (nomeValor === ''){
        setarErroPara (nome, "O nome é obrigatório")
    }

    else{
        setarSucessoPara(nome)
    }

    // Validar Senha
    if (senhaValor === ''){
        setarErroPara(senha, "A senha é obrigatório")
    }

    else if (senhaValor.length < 6){
        setarErroPara(senha, "No mínimo 6 caracteres")
    }

    else{
        setarSucessoPara(senha)
    }

    //Validar Email
    if(emailValor === ''){
        setarErroPara (email, "O email é obrigatório")
    }

    else{
        setarSucessoPara (email)
    }

    //Validar Idade
    if (idadeValor === ''){
        setarErroPara (idade, "A idade é obrigatório")
    }

    else if (idadeValor < 14){
        setarErroPara (idade, "A idade mínima é de 14 anos")
    }

    else{
        setarSucessoPara(idade)
    }
}

function setarErroPara (input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    small.innerText = message
    formControl.className = 'erro'
}

function setarSucessoPara(input){
    const formControl = input.parentElement

    formControl.className = 'fomrContrls sucesso'
}