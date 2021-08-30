
let nome = document.querySelector('#nome');
let validNome = false;
let cargo = document.querySelector('#cargo');
let validCargo = false;
let data = document.querySelector('#data')
let estadoCivil = document.querySelector('#relacao');
let sexo = document.querySelector('#sexo');
let rua = document.querySelector('#rua');
let validRua = false
let cep = document.querySelector('#CEP');
let validCep = false
let bairro = document.querySelector('#bairro');
let validBairro = false
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');
let telefone = document.querySelector('#telefone');
let validTelefone = false
let email = document.querySelector('#email');
let validEmail = false


let linkedin = document.querySelector('#linkedin');
let identidade = document.querySelector('#identidade');
let cpf = document.querySelector('#cpf');
let validarCPF = false

let habilitacao = document.querySelector('#CNH');
let autodeclaracao = document.querySelector('#declaracao');
let deficiencia = document.querySelector('#deficiencia');
let Pcd = document.querySelector('#PCD')
let processos = document.querySelector('#processos')


nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2) {
        labelnome.setAttribute('style','color:red')
        labelnome.innerHTML = 'Nome: insira no mínimo três caracteres'
        validNome = false;
    }else {
        labelnome.setAttribute('style','color:green')
        labelnome.innerHTML = 'Nome:'
        validNome = true;
    }
})

cargo.addEventListener('keyup', () => {
    if(cargo.value.length <= 2) {
        labelCargo.setAttribute('style','color:red')
        labelCargo.innerHTML = 'Cargo: insira no mínimo três caracteres'
        validCargo = false
    }else {
        labelCargo.setAttribute('style','color:green')
        labelCargo.innerHTML = 'Cargo:'
        validCargo = true
    }
})

cep.addEventListener('keyup', () => {
    if(cep.value.length <= 7) {
        labelCEP.setAttribute('style','color:red')
        labelCEP.innerHTML = 'CEP válido com 8 dígitos'
        validCep = false
    }else {
        labelCEP.setAttribute('style','color:green')
        labelCEP.innerHTML = 'CEP:'
        validCep = true
    }
})

rua.addEventListener('keyup', () => {
    if(rua.value.length <= 4) {
        labelEndereco.setAttribute('style','color:red')
        labelEndereco.innerHTML = 'Endereço: Digite no mínimo 5 caracteres'
        validRua = false
    }else {
        labelEndereco.setAttribute('style','color:green')
        labelEndereco.innerHTML = 'Endereço:'
        validRua = true
    }
})

bairro.addEventListener('keyup', () => {
    if(bairro.value.length <= 4) {
        labelBairro.setAttribute('style','color:red')
        labelBairro.innerHTML = 'Bairro: Digite no mínimo 5 caracteres'
        validBairro = false
    }else {
        labelBairro.setAttribute('style','color:green')
        labelBairro.innerHTML = 'Bairro:'
        validBairro = true
    }
})

telefone.addEventListener('keyup', () => {
    if(telefone.value.length <= 10) {
        labelTelefone.setAttribute('style','color:red')
        labelTelefone.innerHTML = 'Telefone: DDD + Telefone'
        validTelefone = false
    }else {
        labelTelefone.setAttribute('style','color:green')
        labelTelefone.innerHTML = 'Telefone:'
        validTelefone = true
    }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 5) {
        labelEmail.setAttribute('style','color:red')
        labelEmail.innerHTML = 'Email: Digite um email válido'
        validEmail = false;
    }else {
        labelEmail.setAttribute('style','color:green')
        labelEmail.innerHTML = 'Email:'
        validEmail = true;
    }
})

cpf.addEventListener('keyup', () => {
    if(cpf.value.length <= 9) {
        labelCPF.setAttribute('style','color:red')
        labelCPF.innerHTML = 'CPF: Digite um CPF válido'
        validCPF = false;
    }else {
        labelCPF.setAttribute('style','color:green')
        labelCPF.innerHTML = 'CPF:'
        validCPF = true;
    }
})


function cadastro () {
    function validarCPF (cpf) {
        if (localStorage.item('cpf') == true) {
            console.log('CPF JÁ CADASTRADO')
        }else if (validNome || validCargo || validCep || validRua || validBairro || validTelefone || validEmail || validCPF) {
            let listaUser =JSON.parse(localStorage.getItem('ListaUser') || '[]')

            listaUser.push(
                {
                    nomeCad: nome.value,
                    cargoCad: cargo.value,
                    cepCad: cep.value,
                    ruaCad: rua.value,
                    bairroCad: bairro.value,
                    telefoneCad: telefone.value,
                    emailCad: email.value,
                    cpfCad:cpf.value,
                }
            )

            localStorage.setItem('listaUser', JSON.stringify(listaUser))

            alert('Parabéns, cadastro finalizado com sucesso')
        }else {
            alert('Tem algum campo com * vazio, por favor revise seu formulário')
        }
    }
}