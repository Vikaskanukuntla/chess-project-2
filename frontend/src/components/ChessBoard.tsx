import type { Chess, Color, PieceSymbol, Square } from "chess.js"
import { useState } from "react";
import { MOVE } from "../screens/Game";

type BoardType = ReturnType<Chess["board"]>;

export const ChessBoard = ({chess ,setBoard , board , socket} : {
    
    chess: Chess;
    setBoard: (board: BoardType) => void;
    board : ({
    square : Square;
    type : PieceSymbol;
    color : Color
} | null)[][];
    socket : WebSocket
}) => { 
    const [from , setFrom] = useState<null | Square>(null)
    const [to , setTo] = useState<null | Square>(null)
    return <div>
        {board.map((row , i) => {
            return <div key={i} className="flex">
                {row.map((square , j) => {
                    const squareRepresentation = String.fromCharCode(97 + (j%8)) + "" + (8-i) as Square;
                    return <div onClick={() => {
                        if (!from){
                            setFrom(squareRepresentation)
                        }else{
                            setTo(squareRepresentation);
                            socket.send(JSON.stringify({
                                type : MOVE,
                                payload : {
                                    move : {
                                        from,
                                        to : squareRepresentation
                                    }
                                }
                            }))
                            setFrom(null)
                            chess.move({
                                    from,
                                    to : squareRepresentation
                                })
                            setBoard(chess.board())
                            console.log(to)
                        }
                    }} key={j} className={`w-16 h-16 ${(i+j)%2 === 0 ? 'bg-green-500' : 'bg-white '}`}>
                        <div className="flex justify-center w-full h-full">
                            <div className="h-full flex justify-center flex-col">
                        {
                            square ? (
                                <span className="text-5xl">
                                {
                                    {
                                    wp: "♙",
                                    wr: "♖",
                                    wn: "♘",
                                    wb: "♗",
                                    wq: "♕",
                                    wk: "♔",

                                    bp: "♟",
                                    br: "♜",
                                    bn: "♞",
                                    bb: "♝",
                                    bq: "♛",
                                    bk: "♚",
                                    }[`${square.color}${square.type}`]
                                }
                                </span>
                            ) : null
                            }
                        </div>
                        </div>
                        {/* //<div>Last move to: {to}</div> */}
                    </div>
                })}
            </div>
        })}
    </div>
}