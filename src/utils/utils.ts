import { EMPTY_STRING } from "./constants";

export function isWinner(board: string[]): boolean {
  return (board[0] === board[1] && board[1] === board[2] && board[0] !== EMPTY_STRING) ||
    (board[3] === board[4] && board[4] === board[5] && board[3] !== EMPTY_STRING) ||
    (board[6] === board[7] && board[7] === board[8] && board[6] !== EMPTY_STRING) ||
    (board[0] === board[3] && board[3] === board[6] && board[0] !== EMPTY_STRING) ||
    (board[1] === board[4] && board[4] === board[7] && board[1] !== EMPTY_STRING) ||
    (board[2] === board[5] && board[5] === board[8] && board[2] !== EMPTY_STRING) ||
    (board[0] === board[4] && board[4] === board[8] && board[0] !== EMPTY_STRING) ||
    (board[2] === board[4] && board[4] === board[6] && board[2] !== EMPTY_STRING)
    ? true
    : false;
}

export function isDraw(board: string[]): boolean {
  for (let i = 0; i < board.length; i++) if (board[i] === EMPTY_STRING) return false;
  return true;
}
