function tabla(){
    var tablaXon = document.getElementById("tablaXon");
    var Req = new XMLHttpRequest();

        Req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jXon = JSON.parse(this.responseText);
            resultado(jXon);
        }
    };
    Req.open("GET", "http://xonotic.bienvenidoainternet.org/cgi-bin/status.py");

    Req.send();
}

function resultado(jXon){
    // normal sv
    if(jXon.normal.online) {
	    document.getElementById("nServer").innerHTML = jXon.normal.hostname;
	    document.getElementById("mapa").innerHTML = "<strong>Mapa actual: </strong>" + jXon.normal.mapname;
	    var i;
	    var tabla = document.getElementById("players");
	    for (i = 0; i<jXon.normal.players.length; i++){
	        tabla.innerHTML += "<tr>" + "<td>"+jXon.normal.players[i].ping+"</td>" + "<td>"+jXon.normal.players[i].frags+"</td>" +
	    "<td>"+jXon.normal.players[i].name+"</td>" + "</tr>"; 
	    }
	    document.getElementById("players_cur").innerHTML = "<strong>Jugadores: </strong>" + jXon.normal.players_cur +"/"+ jXon.normal.players_max;
    } else document.getElementById("nServer").innerHTML = "Server Normal Offline"; 
    
    // liga server
    if(jXon.liga.online) {
	    document.getElementById("lServer").innerHTML = jXon.liga.hostname;
	    document.getElementById("lMapa").innerHTML = "<strong>Mapa actual: </strong>" + jXon.liga.mapname;
	    var i;
	    var tabla = document.getElementById("lPlayers");
	    for (i = 0; i<jXon.liga.players.length; i++){
	        tabla.innerHTML += "<tr>" + "<td>"+jXon.liga.players[i].ping+"</td>" + "<td>"+jXon.liga.players[i].frags+"</td>" +
	    "<td>"+jXon.liga.players[i].name+"</td>" + "</tr>"; 
	    }
	    document.getElementById("lPlayers_cur").innerHTML = "<strong>Jugadores: </strong>" + jXon.liga.players_cur +"/"+ jXon.liga.players_max;
    } else document.getElementById("lServer").innerHTML = "Server Liga Offline"; 

    // duel server
    if(jXon.duel.online) {
	    document.getElementById("dServer").innerHTML = jXon.duel.hostname;
	    document.getElementById("dMapa").innerHTML = "<strong>Mapa actual: </strong>" + jXon.duel.mapname;
	    var i;
	    var tabla = document.getElementById("dPlayers");
	    for (i = 0; i<jXon.duel.players.length; i++){
	        tabla.innerHTML += "<tr>" + "<td>"+jXon.duel.players[i].ping+"</td>" + "<td>"+jXon.duel.players[i].frags+"</td>" +
	    "<td>"+jXon.duel.players[i].name+"</td>" + "</tr>"; 
	    }
	    document.getElementById("dPlayers_cur").innerHTML = "<strong>Jugadores: </strong>" + jXon.duel.players_cur +"/"+ jXon.duel.players_max;
    } else document.getElementById("dServer").innerHTML = "Server Duel Offline"; 
}

window.onload = tabla;

