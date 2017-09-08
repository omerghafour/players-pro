var players = [];

let table = document.createElement('table'),
	 tr = document.createElement('tr'),
	 td = document.createElement('td'),
	 th = document.createElement('th');



function addPlayer() {
    var obj = {};
    obj.name = document.getElementById("player").value;
    obj.points = document.getElementById("points").value;
    players.push(obj);
    
    document.getElementById("player").value = "";
    document.getElementById("points").value = "";
	console.log("works!");
}


function listPlayers() {
    for (var i=0; i< players.length; i++) {
		let playerName = document.createTextNode(players[i].name);
		let playerPoint = document.createTextNode(players[i].point);
		
     document.getElementById("result").innerHTML = players[i].name;
 }
	
	
	
     
}
