const FormElemetn = document.querySelector("#Form")
const EmailInput = document.querySelector("#EmailInput")
const PasswordInput = document.querySelector("#PasswordInput")
const ShowPasswordButtn = document.querySelector("#VisivelButton")
const HidePasswordButtn = document.querySelector("#InvisivelButton")
const ErroBox = document.querySelector("#ErrorBox")

FormElemetn.addEventListener("submit", (e) =>{
    e.preventDefault()

    if(validarInputs()===true){
        ErroBox.style.display = "none"
    }
})

ShowPasswordButtn.addEventListener("click", (e) =>{
    PasswordInput.type = "text"

    HidePasswordButtn.style.display = "block"
    ShowPasswordButtn.style.display = "none"
})

HidePasswordButtn.addEventListener("click", (e) =>{
    PasswordInput.type = "password"

    HidePasswordButtn.style.display = "none"
    ShowPasswordButtn.style.display = "block"
})

function validarInputs(){
    const EmailValue = EmailInput.value 
    const PasswordValue = PasswordInput.value

    if (EmailValue === ''){
        ShowErroBox();
        
        EmailInput.style.borderColor = "#ff020249"
    }

    else{
        EmailInput.style.borderColor = "#2ea043"
    }

    if (PasswordValue === " "){
        ShowErroBox();

        PasswordInput.style.borderColor = "#ff020249"
    }

    else if (PasswordValue.length < 6){
        ShowErroBox();

        PasswordInput.style.borderColor = "#ff020249"
    }

    else{
        PasswordInput.style.borderColor = "#2ea043"

        return true;
    }

}

function ShowErroBox(){
    ErroBox.style.display = "flex"
}