let playerJs = function () {
    let players = [];

    function addPlayer() {

        let clearInputValues = (name, points) => {
            name.value = "";
            points.value = "";
        }

        let getInputValues = (name, points) => {
            let playersInfoObject = {};
            playersInfoObject.name = name.value;
            playersInfoObject.points = points.value;
            players.push(playersInfoObject);
        }

        playerName = document.getElementById("player");
        points = document.getElementById("points");

        if (playerName.value === "" || points.value === "") {
            alert('Please Type Correct Values!')
        } else {
            getInputValues(playerName, points);
            clearInputValues(playerName, points);
        }
    }

    function listPlayers() {

        //If there is nothing in the array, then dont add title for table
        if (players.length > 0) {

            let para = document.getElementById("result");
            let table = '<table id="listOfPlayers"><tr><th>Name</th><th>Points</th></tr>';
            for (var i = 0; i < players.length; i++) {
                table += `<tr><td> ${players[i].name} </td><td> ${players[i].points} </td></tr>`;
            }

            table += '</table>';
            para.innerHTML = table;
        }
    }

    function showWinner() {

        //If there is no players in the array, then dont select winner!
        if (players.length > 0) {

            let winnerPara = document.getElementById("winner");
            let currentPoint = 0;
            let currentIndex = 0;
            for (let playersIndex = 0; playersIndex < players.length; playersIndex++) {
                if (players[playersIndex].points > currentPoint) {
                    currentPoint = players[playersIndex].points;
                    currentIndex = playersIndex;
                }
            }

            winnerPara.innerHTML = `Player's name is ${players[currentIndex].name} and point is ${players[currentIndex].points}`
        }
    }

    return {
        addPlayer : addPlayer,
        listPlayers : listPlayers,
        showWinner : showWinner
    }
}();

