class GameInfo {
    constructor() {
            this._players = ['', '', '', '']; 
            this._playerScores = [0, 0, 0, 0];
            this._gameStates = [
                document.getElementById("state0"),
                document.getElementById("state1")
            ];
            this._numOfRounds = 0;
            this._currentState = 0;        
    }
    getPlayer(i) {
        return this._players[i];
    }
    getPlayerScores(i) {
        return this._playerScores[i];
    }
    getGameStates(i) {
        return this._gameStates[i];
    }
    getNumOfRounds() {
        return this._numOfRounds;
    }
    getCurrentState() {
        return this._currentState;
    }
    setCurrentState(state) {
        this._currentState = state;
    }
    
}

function enterState(state) {
    let gInfo = new GameInfo();
    gInfo.setCurrentState(state);
    let gState = gInfo.getGameStates(gInfo.getCurrentState());
    gState.style.opacity = "100%";
    gState.style.transform = "translateY(0%)";
}

function exitState(nextState) {
    let gInfo = new GameInfo();
    let gState = gInfo.getGameStates(gInfo.getCurrentState());
    gState.style.opacity = "0%";
    gState.style.transform = "translateY(200%)";
    enterState(nextState);
}

window.onload = () => {enterState(0);}