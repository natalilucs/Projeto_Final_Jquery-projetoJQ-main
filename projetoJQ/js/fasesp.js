

$("#calcule").click(function(){
    function clicar(){            
        var input1 = document.querySelector("#input1").value; // quantidade de leitos
        var input2 = document.querySelector("#input2").value; // quantidade usada
        var resultado = (parseInt(input2) *100)/parseInt(input1);    // quantidade usada * 100 divididade pela quantidade de leitos
        document.querySelector("#taxaocup").innerHTML = Math.round(resultado) + "%";
        if(resultado <= 60){
            $(".box1").css({ backgroundColor: "green"})
        } else if (resultado >= 60 && resultado < 70){
            $(".box1").css({ backgroundColor: "yellow"})
        } else if (resultado >= 70 && resultado < 80){
            $(".box1").css({ backgroundColor: "orange"})
        } else if (resultado >= 80){
            $(".box1").css({ backgroundColor: "red"})
        }
    } return(clicar());
});


var relogio = document.getElementById("hora-atual");

function horasp() {
    var data_atual = new Date().toLocaleString("PT", { timeZone: "America/Sao_Paulo" });
    var ajusteHora = data_atual.replace(", ", " - ");
    relogio.innerHTML = ajusteHora;
}

setInterval(horasp, 1000);


window.onscroll = function () {
    scroll();
}

function scroll() {
    var btn = document.getElementById("subirTopo");
    if (document.documentElement.scrollTop > 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none"
    }
}

function voltarTop(){
    document.documentElement.scrollTop = 0;
}

//Inicio das funções para slideshow
var bgnumer = 1;

function slide(n){
    var todasbg = 4;
    document.getElementById("imagembg").style.backgroundImage = "url('./imagens/"+n+".jpg')";
    botoes(n, todasbg);
    bgnumer=n;
}

function anterior(){
    if(bgnumer>1){
        bgnumer--;
        slide(bgnumer);
    }
}

function proximo(){
    if(bgnumer<5){
        bgnumer++;
        slide(bgnumer);
    }
}

function botoes(n,m){
    document.getElementById("botoes").innerHTML = "";
    for(a=1;a<=m;a++){
        if(a ==n){
            document.getElementById("botoes").innerHTML +="<li class='selected' onclick='slide("+a+")'></li>";
        }else{
            document.getElementById("botoes").innerHTML +="<li onclick='slide("+a+")'></li>";
        }
    }
}

window.addEventListener('resize', function (){
    var tam = $(window).width();
    if (tam >= 1024) {
        $(".box1").show();
    } else {
        $(".box1").fadeOut(3000);
    }
});
//termino das funções do slide show



