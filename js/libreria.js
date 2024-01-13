function comprobar(valor, accion) {

    var carnet = $("#carnet").val();

    if(accion == "extras" || accion == "semanal") {
        if(carnet == "" || carnet == null) {
            alert("Has d'introduir el numero de carnet");
            return;
        }
    }

    if(accion == "semanal" && $("#semana").val() == "Selecciona una setmana") {
            alert("Has d'introduir la setmana");
            return;        
    }


    if(accion == "consulta") {
        $("#buttonComprobarConsulta").text("Processant");
    }

    if(accion == "semanal") {
        $("#buttonComprobarSemanal").text("Processant");
    }

    if(accion == "extras") {
        $("#buttonComprobarExtras").text("Processant");
    }

    if(accion == "alias") {
        $("#buttonComprobarConsultaAlias").text("Processant");
    }

    var url = "";
    var script_url = "https://script.google.com/macros/s/AKfycbzJVlpSwuvU9tYW1epFHF6brCZR4kNuaGBxS8iqb_OyNas-LxY8nXchj1T3u0K3mbQ/exec";

    if(accion == "extras") {
        url = script_url + "?callback=ctrlq&carnet=" + carnet + "&action=" + accion + "&puntos=" + valor;
    }
    
    if(accion == "semanal") {
        url = script_url + "?callback=ctrlq&carnet=" + carnet + "&action=" + accion + "&puntos=1" + "&semana=" + $("#semana").val();
    }
    
    if(accion == "consulta") {
        url = script_url + "?callback=ctrlq&carnet=" + valor + "&action=" + accion;
    }

    if(accion == "alias") {
        url = script_url + "?callback=ctrlq&alias=" + valor + "&action=" + accion;
    }

    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });    
    
}

function ctrlq(e) {
    
    $("#retorno").html(e.result);
    $("#comprobarModal").modal('show');
    $("#buttonComprobarConsulta").text("Comprovar");
    $("#buttonComprobarConsultaAlias").text("Comprovar");
    $("#buttonComprobarSemanal").text("Assignar punt setmanal");
    $("#buttonComprobarExtras").text("Assignar punts extres");   

}

function toggler(divId) {
    $("#" + divId).toggle();
    $("#pistasBIS").toggle();
}

