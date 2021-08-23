function horasp() {
    var relogio = document.getElementById("hora-atual");
    var data_atual = new Date().toLocaleString("PT", { timeZone: "America/Sao_Paulo" });
    var ajusteHora = data_atual.replace(", ", " - ");
    relogio.innerHTML = ajusteHora;
}

setInterval(horasp, 1000);