// Modo noturno
var modoNoturno = 0;
function alteraCor() {
  if (modoNoturno == 0) {
    document.body.style.backgroundColor = "rgb(33, 33, 33)";
    document.body.style.color = "rgb(250, 250, 250)"
    document.getElementById("nightbutton1").src = "imagens/icon_moon.png"
    document.getElementById("nightbutton2").src = "imagens/icon_moon.png"
    modoNoturno = 1;
  } else if (modoNoturno == 1) {
    document.body.style.backgroundColor = "rgb(250, 250, 250)";
    document.body.style.color = "rgb(10, 10, 10)"
    document.getElementById("nightbutton1").src = "imagens/icon_sun.png"
    document.getElementById("nightbutton2").src = "imagens/icon_sun.png"
    modoNoturno = 0;
  }

}

// Aumentar - diminuir fonte
var tamanho = 16;
function aumentarFonte() {

  if (tamanho <= 30) {
    tamanho++;
    document.body.style.fontSize = tamanho + "px"; //style que muda tamanho da fonte 
  }
}

function diminuirFonte() {
  if (tamanho >= 9) {
    tamanho--;
    document.body.style.fontSize = tamanho + "px";
  }
}

// Menu_dropdown
function menu_dropdown() {
    document.getElementsByClassName('dropdown')[0].classList.toggle('down'); //classList retorna uma coleção dom que ativa os atributos para o elemento anterior, nesse caso está ativando o atributo toggle (liga e desliga o down - false e true)
    document.getElementsByClassName('arrow')[0].classList.toggle('gone'); //div para espaço entre img e menu drop
    if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) { //se down for true entra no if
      setTimeout(function () {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'; //tempo para o flow ficar vísivel -  setTimeout executa função no tempo determinado: meio segundo(500 milésimos)
      }, 100)
    } else {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'; //esconde menu
    }
  }