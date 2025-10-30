import { EMPTY_STRING } from "../utils/constants";
import leftRibbon from "../assets/images/left-ribbon.webp";
import rightRibbon from "../assets/images/right-ribbon.webp";
import leftRibbonFallback from "../assets/images/fallback/left-ribbon.png";
import rightRibbonFallback from "../assets/images/fallback/right-ribbon.png";

export function renderToast(winner: null | string = null): void {
  toastDiv.innerHTML = `
    <picture>
      <source srcset=${ leftRibbon } />
      <img src=${ leftRibbonFallback } alt="" />
    </picture>
    ${
      winner !== null
        ? `<p>Game Over. Player ${ winner } Wins!</p>`
        : `<p>Game Over. Its a Draw!</p>`
    }
    <picture>
      <source srcset=${ rightRibbon } />
      <img src=${ rightRibbonFallback } alt="" />
    </picture>
  `;
}

export function removeToast(): void {
  toastDiv.innerHTML = EMPTY_STRING;
}

// Get DOM element.
const toastDiv = document.getElementById("toast") as HTMLDivElement;
