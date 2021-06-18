class TicTacToeView{

    constructor(game, name) { // Default constructor
        this.name = name;
        this.game = game;
        this.listeneur(); // We call the listeners
        this.affichage(); // We display the name of the player currently playing
    }

    affichage(){ 
        if(this.game.currentPlayer === 0){ // If player 1 we show it in red
            document.getElementById("player_number").style.color = "red";
            document.getElementById("player_number").textContent = "Player 1";
        }
        else { // If player 2 then in blue
            document.getElementById("player_number").style.color = "blue";
            document.getElementById("player_number").textContent = "Player 2";
        }
    }
    
    plot(x,y){ // To plot the case clicked by the player with his color
        let grille = document.getElementById("morpion");
        if (this.game.currentPlayer === 0) grille.rows[x].cells[y].style.backgroundColor = "blue";
        else grille.rows[x].cells[y].style.backgroundColor = "red";
    }

    listeneur(){ 
        let reset = document.getElementById("reset"); // We get the data about is the button "reset" clicked

        reset.addEventListener('click', () => { // If someone press the button reset then we reload the page
            window.location.reload(); 
        })

        let grille = document.getElementById("morpion");
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                grille.rows[x].cells[y].addEventListener('click', () => { // Adding listeners for every case to know when clicked
                    this.playIt(x,y); 
                });
            }
        }
    }

    playIt(x, y){
        let grille = document.getElementById("morpion");
        if (this.game.isFinished() || this.game.nbMoves == 9) { // If the game is over then we remove the listeners so that even by licking on a case, nothing happens
            grille.rows[x].cells[y].removeEventListener('click', () => {
                this.playIt(x,y);
                console.log(x, y);
            });
            if(this.game.hasWinner()){ // If someone won then we display who won
                document.getElementById("player_number").style.color = "white";
                if(this.game.getWinner() ===0) document.getElementById("player_number").textContent = "GG Player 2 !";
                else document.getElementById("player_number").textContent = "GG Player 1 !";
            }
            else{ // If the game has no winner, then it's a tie (=draw, equality)
                document.getElementById("player_number").style.color = "white";
                document.getElementById("player_number").textContent = " Draw ! ";
            }
        }
        else{ // If the game isn't over then we keep playing it
            this.game.play(x, y);
            this.plot(x, y);
            this.affichage();
        }
    }

}