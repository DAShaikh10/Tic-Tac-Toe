import { EMPTY_STRING } from "../utils/constants";
import { actionButtonType, actionButtonData } from "../utils/data";

// Get DOM element & insert action buttons' HTML.
const actionsDiv = document.getElementById("actions") as HTMLDivElement;
actionsDiv.innerHTML = actionButtonData.map((buttonData: actionButtonType) =>
  `<a
    class="action-button github"
    href=${ buttonData.href }
    aria-label=${ buttonData.ariaLabel }
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src=${ buttonData.src } />
    <span>${ buttonData.text }</span>
  </a>`
).join(EMPTY_STRING);

// Handle action button hover.
const actionButtons = document.getElementsByClassName("action-button") as HTMLCollectionOf<HTMLAnchorElement>;
Array.from(actionButtons).forEach((actionButton: HTMLAnchorElement) => {
  actionButton.addEventListener("mouseenter", () => actionButton.classList.add("hovered"));
  actionButton.addEventListener("mouseleave", () => actionButton.classList.remove("hovered"));
});
