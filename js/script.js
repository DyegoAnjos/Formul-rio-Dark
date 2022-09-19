const form = document.getElementById('form')
const nome = document.getElementById('nome')
const senha = document.getElementById('senha')



form.addEventListener("submit", (e) => {
    e.preventDefault()
    validarinputs()
})

function validarinputs() {
    const nomeValor = nome.value
    const senhaValor = senha.value

    if (nomeValor === ''){
        setarErroPara (nome,"O nome é obrigatório.")
    }

    else{
        setarSucessoPara(nome)
    }

    if (senhaValor === ''){
        setarErroPara(senha, "A senha é obrigatório")
    }

    else if (senhaValor.length < 6) {
        setarErroPara(senha, "No mínimo 6 caracteres.")
    }

    else{
        setarSucessoPara(senha)
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