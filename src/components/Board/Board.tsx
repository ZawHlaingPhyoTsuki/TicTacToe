'use client'

import { useState } from "react";
import Cell from "../Cell/Cell";
import calculateWinner, { Player } from "@/utils/calculateWinner";
import styles from "./Board.module.css"


export default function Board () {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);
  const currentPlayer = isXNext ? "X" : "O";

  return (
    <div className={styles.center}>
      <h1>Tic Tac Toe</h1>
      <p>{winner ? `Winner: ${winner}` : `Next Player: ${currentPlayer}`}</p>
      <div className={styles.board}>
        {board.map((cell, index) => (
          <Cell key={index} value={cell} onClick={() => handleClick(index)} />
        ))}
      </div>
      {winner && (
        <button
          className={styles.button}
          onClick={() => setBoard(Array(9).fill(null))}
        >
          Restart Game
        </button>
      )}
    </div>
  );
};


// export default Board;
