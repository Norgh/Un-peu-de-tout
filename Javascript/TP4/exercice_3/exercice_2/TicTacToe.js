class TicTacToe extends Observable{

    constructor(){
        super(); // Calling the default constructor
        this.currentPlayer = 0; // Who is currently playing
        this.nbMoves=0; // Number of moves (9 is the maximum as this game is a 3x3 grid)
        this.grid = new Array(3); // As we need a 3*3 grid we create 3 columns
        this.createGrid()// Then we created 3 lines to have the 3*3 grid
        this.checkDiagonals();
        this.checkColumns();
        this.checkLines();
    }

    createGrid(){ // We create a grid of 3*3
        for (let i = 0; i < 3; ++i)
        {
            this.grid[i] = new Array(3);
        }
    }

    getCurrentPlayer(){ // As we have only 2 players, by knowing who played first we know who is playing next
        return (this.nbMoves % 2);
    }

    play(x, y){ // Playing a case in position (x, y)
        if (this.getCaseState(x, y) == null) // We check that this case is empty
        {
            this.grid[x][y] = this.currentPlayer; // The player has taken this case which is no longer null
            this.nbMoves +=1; // onky 9 moves per game so we count the moves made
            this.currentPlayer = this.getCurrentPlayer(); // To know who is playing not to give 2 cases in a row to the same player
        }
    }

    reset(){ // Simply to put every case as 'null' to restart the whole game
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++){
                this.grid[i][j] = undefined;
            }
        }
        this.nbMoves = 0; // Stats need a reset too by the way
    }

    getCaseState(x,y){
        return this.grid[x][y];
    }

    checkLines(){ // Check the lines
        for (let i = 0; i < 3; ++i) {
            if (this.grid[0][i] === this.grid[1][i] && this.grid[1][i] === this.grid[2][i]) {
                if(this.grid[0][i] != null ) return true;
            }
        }
    }

    checkColumns(){ // Check the columns
        for (let i = 0; i < 3; ++i) {
            if (this.grid[i][0] === this.grid[i][1] && this.grid[i][1] === this.grid[i][2])  {
                if(this.grid[i][0] != null ) return true;
            }
        }
    }

    checkDiagonals(){ // Check the 2 diagonals
        if ((this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2]) || (this.grid[0][2] == this.grid[1][1] && this.grid[1][1] == this.grid[2][0])) {
            if(this.grid[1][1] != null ) return true;
        }
    }

    isFinished(){ // If a line, a column, or a diagonal is completed by a player then the game is finished
        if(this.checkDiagonals() || this.checkColumns() || this.checkLines()) return true;
        else if(this.nbMoves == 9) return true;
        else return false;
    }

    hasWinner(){// If a player fulfilled a line, a column or a diagonal then he's the winner
        if(this.isFinished() && (this.checkLines() || this.checkColumns() || this.checkDiagonals()))
        {
            return true;
        }
        else return false;
    }

    getWinner(){
        if(this.hasWinner() && this.nbMoves % 2 === 0) return(!this.currentPlayer);
        else if(this.hasWinner() && this.nbMoves%2 === 1) return(!this.currentPlayer);
        else if(!this.hasWinner()) return undefined;
    }
}