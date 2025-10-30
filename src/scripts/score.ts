import * as consts from "../utils/constants";

export function updateScore(key: string): void {
  scores[key].score++;
  const { index, score } = scores[key];
  scorePs[index].innerHTML = score.toString();
}

type scoreType = {
  [placeholder: string]: {
    index: number;
    score: number;
  };
};

const scores: scoreType = {
  [consts.X_KEY]: {
    index: 0,
    score: 0,
  },
  [consts.DRAW_KEY]: {
    index: 1,
    score: 0,
  },
  [consts.O_KEY]: {
    index: 2,
    score: 0,
  },
};

// Get DOM element & insert score board HTML.
const scoreBoard = document.getElementById("score-board") as HTMLDivElement;
scoreBoard.innerHTML = `
  <div class="score-card">
    <p>player x</p>
    <p class="score">${ scores[consts.X_KEY].score }</p>
  </div>

  <div class="score-card">
    <p>draw</p>
    <p class="score">${ scores[consts.DRAW_KEY].score }</p>
  </div>

  <div class="score-card">
    <p>player o</p>
    <p class="score">${ scores[consts.O_KEY].score }</p>
  </div>
`;

// Get the DOM element holding the score text.
const scorePs = document.getElementsByClassName("score") as HTMLCollectionOf<HTMLParagraphElement>;
