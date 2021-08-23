$(document).ready(function () {
    $("#idosos").click(function () {
        $(".selecionaIdosos").prop('checked', $(this).prop('checked'));
    });
});

$(document).ready(function () {
    $("#recem_nascido").click(function () {
        $(".selecionaRecem").prop('checked', $(this).prop('checked'));
    });
});


$(document).ready(function () {
    $("#todas_as_vacinas").click(function () {
        $(".selecionaTodas").prop('checked', $(this).prop('checked'));
    });
});


$(document).ready(function () {
    $("#adultos").click(function () {
        $(".selecionaAdultos").prop('checked', $(this).prop('checked'));
    });
});



$(document).bind(function () {
    $("#recem_nascido").click().show(".recemnascido");
});