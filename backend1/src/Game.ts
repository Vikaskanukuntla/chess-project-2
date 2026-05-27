import WebSocket from "ws";
import {Chess} from 'chess.js';
import { GAME_OVER, INIT_GAME, MOVE } from "./messages.js";
export class Game {

    public player1:WebSocket;
    public player2:WebSocket;
    private board: Chess;
    // private moves : string[];
    private startTime : Date;

    constructor(player1:WebSocket , player2:WebSocket){
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess()
        this.startTime = new Date()
        this.player1.send(JSON.stringify({
            type : INIT_GAME,
            payload : {
                color : "white"
            }
        }));
        this.player2.send(JSON.stringify({
            type : INIT_GAME,
            payload : {
                color : "black"
            }
        })); 
    }

    makeMove(socket: WebSocket, move: {
    from: string,
    to: string
}) {

    if (this.board.turn() === "w" && socket !== this.player1) {
        return;
    }

    if (this.board.turn() === "b" && socket !== this.player2) {
        return;
    }

    try {
        this.board.move(move);
    } catch (e) {
        return;
    }

    if (this.board.isGameOver()) {

        const winner =
            this.board.turn() === "w" ? "black" : "white";

        this.player1.send(JSON.stringify({
            type: GAME_OVER,
            payload: { winner }
        }));

        this.player2.send(JSON.stringify({
            type: GAME_OVER,
            payload: { winner }
        }));

        return;
    }

    this.player1.send(JSON.stringify({
        type: MOVE,
        payload: {
            move
        }
    }));

    this.player2.send(JSON.stringify({
        type: MOVE,
        payload: {
            move
        }
    }));
}

}