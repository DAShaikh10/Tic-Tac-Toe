import "./actionButton";
import * as consts from "../utils/constants";
import { updateScore } from "./score";
import { isDraw, isWinner } from "../utils/utils";
import { renderToast, removeToast } from "./toast";

// Board function's.
function updateBoard(index: number, turn: string): void {
  board[index] = turn;
}

function resetBoard(): void {
  board.fill(consts.EMPTY_STRING);
}

// Cell function's.
function disableCells(): void {
  cells.forEach((element: HTMLButtonElement) => element.disabled = true);
}

function resetCells(): void {
  cells.forEach((element: HTMLButtonElement) => {
    element.disabled = false;
    element.innerText = consts.EMPTY_STRING;
    element.classList.remove(consts.O_CLASS, consts.X_CLASS);
  });
}

// Game Button function's.
function handleGameButtonClick(): void {
  gameButton.innerText = consts.X_KEY + consts.SPACE + consts.TURN_CLASS;
  gameButton.classList.add(consts.TURN_CLASS, consts.X_TURN_CLASS);
  resetCells();
  resetBoard();
  removeToast();
}

function addFirstClickListner(): void {
  gameButton.addEventListener("click", handleGameButtonClick, { once: true });
}

function initGameButton(): void {
  gameButton.innerText = consts.NEW_GAME_TEXT;
  gameButton.classList.remove(consts.TURN_CLASS, consts.O_TURN_CLASS, consts.X_TURN_CLASS);
  addFirstClickListner();
}

function updateGameButton(): void {
  gameButton.innerText = turn + consts.SPACE + consts.TURN_CLASS;
  gameButton.classList.remove(consts.O_TURN_CLASS, consts.X_TURN_CLASS);
  gameButton.classList.add(turn === consts.X_KEY ? consts.X_TURN_CLASS : consts.O_TURN_CLASS);
}

// Turn handler function's.
function switchTurn(): void {
  turn = turn === consts.X_KEY ? consts.O_KEY : consts.X_KEY;
}

function resetTurn(): void {
  turn = consts.X_KEY;
}

// Game helper function's.
function resetGame(): void {
  resetTurn();
  disableCells();
  initGameButton();
}

function isGameOver(): boolean {
  if (isWinner(board)) {
    renderToast(turn);
    updateScore(turn === consts.X_KEY ? consts.X_KEY : consts.O_KEY);
    resetGame();
    return true;
  }
  else if (isDraw(board)) {
    renderToast();
    updateScore(consts.DRAW_KEY);
    resetGame();
    return true;
  }

  return false;
}

// Cell click handler.
function addCellClickHandler(): void {
  cells.forEach((cell: HTMLButtonElement, index: number) =>
    cell.addEventListener("click", () => {
      updateBoard(index, turn);
      cell.innerText = turn;
      cell.disabled = true;
      cell.classList.add(turn === consts.X_KEY ? consts.X_CLASS : consts.O_CLASS);
      if (!isGameOver()) {
        switchTurn();
        updateGameButton();
      };
    })
  );
}

// Global variables.
let turn: string = consts.X_KEY;
const board = new Array<string>(consts.BOARD_SIZE).fill(consts.EMPTY_STRING);

// Get DOM element.
const boardDiv = document.getElementById("board") as HTMLDivElement;
boardDiv.innerHTML = `
  <table>
    <tbody>
      <tr>
        ${board.slice(0, 3).map((cell: string) => `
          <td>
            <button disabled=${true}>${cell}</button>
          </td>
        `).join(consts.EMPTY_STRING)}
      </tr>

      <tr>
        ${board.slice(3, 6).map((cell: string) => `
          <td>
            <button disabled=${true}>${cell}</button>
          </td>
        `).join(consts.EMPTY_STRING)}
      </tr>

      <tr>
        ${board.slice(6).map((cell: string) => `
          <td>
            <button disabled=${true}>${cell}</button>
          </td>
        `).join(consts.EMPTY_STRING)}
      </tr>
    </tbody>
  </table>
`;

// Get DOM Element.
const cells = document.querySelectorAll("td > button") as NodeListOf<HTMLButtonElement>;
addCellClickHandler();

// Get DOM element.
const gameButton = document.getElementById("game-button") as HTMLButtonElement;
initGameButton();
