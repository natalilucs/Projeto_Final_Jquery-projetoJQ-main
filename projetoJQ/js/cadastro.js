function horasp() {
    var relogio = document.getElementById("hora-atual");
    var data_atual = new Date().toLocaleString("PT", { timeZone: "America/Sao_Paulo" });
    var ajusteHora = data_atual.replace(", ", " - ");
    relogio.innerHTML = ajusteHora;
}

setInterval(horasp, 1000);

// #region Validações

var valor = 0;
var flag = new Array(10)

$(document).ready(function () {
    $("#formulario").focusin(function () {
        $("input").css({ backgroundColor: "rgb(233, 233, 233)" });//Jquery
    })
    $("#formulario").focusout(function () {
        $("input").css({ backgroundColor: "inherit"});//Jquery
    })
});



for (i = 0; i < 11; i++) {
    flag[i] = 0
}

function valida_nome(x) {

    var nome = x.value

    if (isNaN(nome)) {
        x.style.border = "2px solid green"
        if (flag[0] == 0) {
            valor++;
            prog()
            flag[0] = 1
        }
        return true;

    }

    else {
        x.style.border = "2px solid red"
        if (flag[0] == 1) {
            prog_white()
            flag[0] = 0
        }

        return false;
    }

}

function valida_cpf(x) {
    var cpf_valor = x.value;

    if (cpf_valor.length == 14) {
        x.style.border = "2px solid green"
        if (flag[1] == 0) {
            valor++;
            prog()
            flag[1] = 1
        }
        return true;
    }

    else {
        x.style.border = "2px solid red"
        if (flag[1] == 1) {
            prog_white()
            flag[1] = 0
        }
        return false;
    }
}

function valida_altura(x) {
    var altura = Number(x.value);

    if (altura > 0 && altura < 2.30) {

        x.style.border = "2px solid green"
        if (flag[2] == 0) {
            valor++;
            prog()
            flag[2] = 1
        }
        return true
    }

    else {
        x.style.border = "2px solid red"
        if (flag[2] == 1) {
            prog_white()
            flag[2] = 0
        }
        return false

    }
}

function valida_peso(x) {
    var peso = Number(x.value);

    if (peso > 0 && peso < 500) {
        x.style.border = "2px solid green"
        if (flag[3] == 0) {
            valor++;
            prog()
            flag[3] = 1
        }
        return true
    }

    else {
        x.style.border = "2px solid red"
        if (flag[3] == 1) {
            prog_white()
            flag[3] = 0
        }
        return false

    }
}

function valida_sus(x) {
    var sus = x.value;

    if (sus.length == 18) {
        x.style.border = "2px solid green"
        if (flag[4] == 0) {
            valor++;
            prog()
            flag[4] = 1
        }
        return true
    }

    else {
        x.style.border = "2px solid red"
        if (flag[4] == 1) {
            prog_white()
            flag[4] = 0
        }
        return false
    }
}

function valida_idade(x) {
    var idade = calculaIdade(x.value);
    if (idade > 130 || idade == " " || idade <= 0) {
        x.style.border = "2px solid red"
        if (flag[5] == 1) {
            prog_white()
            flag[5] = 0
        }
        return false;
    } else {
        x.style.border = "2px solid green"
        if (flag[5] == 0) {
            valor++;
            prog()
            flag[5] = 1
        }
        return true;
    }
}

function valida_email(field) {
    var usuario = field.value.substring(0, field.value.indexOf("@"));
    var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        field.style.border = "2px solid green"
        if (flag[6] == 0) {
            valor++;
            prog()
            flag[6] = 1
        }
        return true;
    }
    else {
        field.style.border = "2px solid red"
        if (flag[6] == 1) {
            prog_white()
            flag[6] = 0
        }
        return false;
    }
}

function valida_sexo(x) {

    if (x.value == "") {
        x.style.border = "2px solid red"
        $("#se-gestante").slideUp()
        if (flag[7] == 1) {
            prog_white()
            flag[7] = 0
        }
        return false;

    }
    else if (x.value == "do sexo feminino") {
        x.style.border = "2px solid green"
        if (flag[7] == 0) {
            valor++;
            prog()
            flag[7] = 1
        }
        $("#se-gestante").slideDown()
        return true;
    }

    else if (x.value == "do sexo masculino") {
        x.style.border = "2px solid green"
        if (flag[7] == 0) {
            valor++;
            prog()
            flag[7] = 1
        }
        $("#se-gestante").slideUp()
        return true;
    }

}

function valida_etnia(x) {
    if (x.value == "") {
        x.style.border = "2px solid red"
        if (flag[8] == 1) {
            prog_white()
            flag[8] = 0
        }
        return false;
    }
    else {
        x.style.border = "2px solid green"
        if (flag[8] == 0) {
            valor++;
            prog()
            flag[8] = 1
        }
        return true;
    }
}

var emprego = 0;
function valida_profissao(x) {
    valore = x.value

    switch (valore) {
        case "Profissional do Sistema Único de Assistência Social (Suas)":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 1;
            return true
            

        case "Trabalhadores da educação do ensino básico em exercício nos ambientes escolares;":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 1;
            return true;

        case "Coveiros, atendentes e agentes funerários;":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 1;
            return true;

        case "Profissional que trabalha em farmácias;":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 1;
            return true;

        case "Oficiais de justiça;":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 1;
            return true;

        case "Profissional de limpeza pública;":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 1;
            return true;

        case "Empregados domésticos;":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 1;
            return true;

        case "Taxistas, mototaxistas, motoristas de aplicativos;":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 1;
            return true;

        case "Trabalhadores do transporte coletivo urbano;":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 1;
            return true;

        case "Bancários;":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 1;
            return true;

        case "Entregadores de aplicativos.":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 1;
            return true;

        case "Outros":
            if(flag[9] == 0){
                valor++;
                prog()
                flag[9] = 1
            }
            emprego = 0;
            return true;


        case "":
            if(flag[9] == 1){
                prog_white()
                flag[9] = 0
            }
            emprego = 0;
            return false;

        
        
    }
}

function valida_comorbidade(x){
    var recebe = x.value    


    if (recebe == "sim") {
        x.style.border = "2px solid green"
        $("#se-comorbi").slideDown()//Jquery
        if (flag[10] == 0) {
            valor++;
            prog()
            flag[10] = 1 
        }
        return true;
    }

    else if(recebe == "nao"){
        x.style.border = "2px solid green"
        $("#se-comorbi").slideUp()//Jquery
        if (flag[10] == 0) {
            valor++;
            prog()
            flag[10] = 1 
        }
        return true;

    }

    else if(recebe == "") {
        x.style.border = "2px solid red"
        $("#se-comorbi").slideUp()
        if (flag[10] == 1) {
            prog_white()
            flag[10] = 0
            
        }
        return false;

    }
    
}

// #region Máscaras e Cálculos

function fMasc(objeto, mascara) {
    obj = objeto;
    masc = mascara;
    setTimeout("fMascEx()", 1);
}

function fMascEx() {
    obj.value = masc(obj.value);
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf;
}

function mSUS(sus) {
    sus = sus.replace(/\D/g, "")
    sus = sus.replace(/(\d{3})(\d)/, "$1 $2")
    sus = sus.replace(/(\d{4})(\d)/, "$1 $2")
    sus = sus.replace(/(\d{4})(\d)/, "$1 $2")
    sus = sus.replace(/(\d{4})(\d)$/)
    return sus;
}

function mALTURA(altu) {
    altu = altu.replace(/\D/g, "")
    altu = altu.replace(/(\d{1})(\d)/, "$1.$2")
    altu = altu.replace(/(.\d{2})\d+?$/, '$1')
    return altu;
}

function calculaIMC(peso, altura) {
    imc = peso / (altura * altura);
    console.log(imc)


    if (imc >= 30.0) {

        return imc

    }

    else {
        return imc

    }
}

var recebe_idade;
function calculaIdade(dataNasc) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('-');
    var anoNasc = anoNascParts[0];
    var mesNasc = anoNascParts[1];
    var diaNasc = anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1;
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
    if (mesAtual < mesNasc) {
        idade--;
    } else {
        //Se estiver no mes do nascimento, verificar o dia
        if (mesAtual == mesNasc) {
            if (new Date().getDate() < diaNasc) {
                //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                idade--;
            }
        }
    }
    recebe_idade = idade;
    return idade;
}

// #endregion

// #endregion

class Pessoa { //classe pessoa, todos os objetos pessoa seguirão esse modelo 

    constructor(nome_construtor, email_construtor, data_nascimento_construtor, cpf_construtor, sexo_construtor, imc_construtor, idade_construtor, verifica_construtor) {
        this.nome = nome_construtor; //no objeto pessoa(i) todos os this.variável vão receber o parametro na ordem do construtor 
        this.email = email_construtor;
        this.data_nascimento = data_nascimento_construtor;
        this.cpf = cpf_construtor;
        this.sexo = sexo_construtor;
        this.idade = idade_construtor;
        this.imc = imc_construtor;
        this.verifica = verifica_construtor;
    }
    //Ola (nome ) , seu login é (email) , você tem (idade) se define como uma pessoa do sexo(sexo) e pode usar (CPF) como senha"
    mostrar_dados() {
        return `<h3>Olá ${this.nome},<h3><br>
        <p>Você tem ${this.idade} anos de idade, se define como uma pessoa ${this.sexo}</p><br>
        Seu IMC é ${this.imc}<br>
        Seu grupo de vacinação: ${this.verifica}`
    }
}

function enviar_dados() {
    var nome_input = document.getElementById("nome"); //está recebendo dados do input
    var cpf_input = document.getElementById("cpf");
    var email_input = document.getElementById("email");
    var data_nascimento_input = document.getElementById("data_nascimento");
    var sexo_input = document.getElementById("sexo");
    var peso_input = document.getElementById("peso");
    var altura_input = document.getElementById("altura");
    var profissao_input = document.getElementById("profissao");
    var etnia_input = document.getElementById("etnia");
    var sus_input = document.getElementById("sus");
    var comorbidade_input = document.getElementById("comorbs");

    var formValido = true;

    //validando todos os dados do input segundo as funções valida

    if (!valida_nome(nome_input)) {
        formValido = false;
    }

    if (!valida_cpf(cpf_input)) {
        formValido = false;
    }

    if (!valida_idade(data_nascimento_input)) {
        formValido = false;
    }

    if(!valida_profissao(profissao_input)){
        formValido = false;
    }

    if (!valida_email(email_input)) {
        formValido = false;
    }

    if (!valida_sexo(sexo_input)) {
        formValido = false;
    }

    if(!valida_etnia(etnia_input)){
        formValido = false;
    }

    if(!valida_sus(sus_input)){
        formValido = false;
    }

    if(!valida_comorbidade(comorbidade_input)){
        formValido = false;
    }

    //se qualquer erro retorna falso e não envia o form

    if (!formValido) {
        alert("Dados Inválidos! Por favor, verifique os campos em vermelho e tente novamente.")
        return formValido;
    }
    else {
        //mostrar div  do form válido em verde com os dados da pessoa
        var nome = nome_input.value.toUpperCase();
        var cpf = cpf_input.value;
        var email = email_input.value;
        var dataNascimento = data_nascimento_input.value;
        var idade = calculaIdade(data_nascimento_input.value);
        var sexo = sexo_input.value;
        var peso = peso_input.value;
        var altura = altura_input.value;
        var imc = calculaIMC(peso, altura);
        var result = imc.toFixed(2)
        var verifica = grupos_idade(idade)

        //variavél novo objeto - pessoa_1 está recebendo uma instância da classe pessoa tornando-se um objeto  (pessoa_1.nome, pessoa_1.email, etcccc)     
        var pessoa_1 = new Pessoa(nome, email, dataNascimento, cpf, sexo, result, idade, verifica);

        document.getElementById("center").innerHTML = pessoa_1.mostrar_dados(); //imprimindo os dados se tudo estiver correto 
        document.getElementById("print").innerHTML = ""; //limpando a mensagem de erro quando dados corretos 
        return true;
    }
}

$(document).ready(function () { //Jquery
    $("#se-gestante").slideUp()
    $("#se-comorbi").slideUp()

})

$(document).ready(function () {
    $("#comorbs_sim").mouseup(function () { //Jquery
        
        
    })
})

$(document).ready(function () {
    $("#comorbs_nao").mouseup(function () { //Jquery
        $("#se-comorbi").slideUp()
        
    })
})


function undisable() {
    var bloque = document.getElementById("bloque");


    if ($(".comor").prop('checked') == true || $("#pneumopatias").prop('checked') == true || $("#hipertensao").prop('checked') == true || $("#sindrome").prop('checked') == true || $("#valvopatias").prop('checked') == true || $("#doencas_cerebrovascular").prop('checked') == true || $("#doenca_renal").prop('checked') == true || $("#insuficiencia_cardiaca").prop('checked') == true || $("#cardiopatia_hipertensiva").prop('checked') == true) {

        bloque.removeAttribute("disabled", "")
        bloque.setAttribute("enabled", "")

    } else {
        bloque.removeAttribute("enabled", "")
        bloque.setAttribute("disabled", "")
        bloque.checked = true;
    }

}


function grupos_idade(idade) {
    var verifica;

    if(emprego == 1 && idade >= 18){
        verifica = "Maior de 18 anos com ocupação prioritária CONTEMPLADO"
        return verifica

    }

    else if (idade >= 18 && $("#comorbs_sim").prop('checked') == true || imc >= 30.0) {
        verifica = "Maior de 18 anos com comorbidade(s) CONTEMPLADO"
        return verifica
    }


    else if ($("#gestante").prop('checked') == true) {
        verifica = "Gestante NÃO CONTEMPLADO"
        return verifica

    }

    else if (idade >= 25) {
        verifica = "Maior de 25 anos CONTEMPLADO"
        return verifica
    }

    else {
        verifica = "Entre 18 e 24 anos NÃO CONTEMPLADO"
        return verifica
    }

}



function prog() {

    switch (valor) {
        case 1:
            $("#p1").css({ backgroundColor: "green" })
            break;

        case 2:
            $("#p2").css({ backgroundColor: "green" })
            break;

        case 3:
            $("#p3").css({ backgroundColor: "green" })
            break;

        case 4:
            $("#p4").css({ backgroundColor: "green" })
            break;

        case 5:
            $("#p5").css({ backgroundColor: "green" })
            break;

        case 6:
            $("#p6").css({ backgroundColor: "green" })
            break;

        case 7:
            $("#p7").css({ backgroundColor: "green" })
            break;

        case 8:
            $("#p8").css({ backgroundColor: "green" })
            break;

        case 9:
            $("#p9").css({ backgroundColor: "green" })
            break;

        case 10:
            $("#p10").css({ backgroundColor: "green" })
            break;

        case 11:
            $("#p11").css({ backgroundColor: "green" })
            break;


    }

}

function prog_white() {

    switch (valor) {
        case 1:
            $("#p1").css({ backgroundColor: "inherit" })
            valor--
            break;

        case 2:
            $("#p2").css({ backgroundColor: "inherit" })
            valor--
            break;

        case 3:
            $("#p3").css({ backgroundColor: "inherit" })
            valor--
            break;

        case 4:
            $("#p4").css({ backgroundColor: "inherit" })
            valor--
            break;

        case 5:
            $("#p5").css({ backgroundColor: "inherit" })
            valor--
            break;

        case 6:
            $("#p6").css({ backgroundColor: "inherit" })
            valor--
            break;

        case 7:
            $("#p7").css({ backgroundColor: "inherit" })
            valor--
            break;

        case 8:
            $("#p8").css({ backgroundColor: "inherit" })
            valor--
            break;

        case 9:
            $("#p9").css({ backgroundColor: "inherit" })
            valor--
            break;

        case 10:
            $("#p10").css({ backgroundColor: "inherit" })
            valor--
            break;

        case 11:
            $("#p11").css({ backgroundColor: "inherit" })
            valor--
            break;


    }


}


