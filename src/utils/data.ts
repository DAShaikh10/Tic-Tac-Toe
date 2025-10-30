import eyeSvg from "../assets/svgs/eye.svg";
import figmaSvg from "../assets/svgs/figma.svg";
import githubSvg from "../assets/svgs/github.svg";
import starSvg from "../assets/svgs/star.svg";

export type actionButtonType = {
  ariaLabel: string;
  href: string;
  src: string;
  text: string;
};

export const actionButtonData: actionButtonType[] = [
  {
    ariaLabel: "Star DAShaikh10/Tic-Tac-Toe on GitHub",
    href: "https://github.com/DAShaikh10/Tic-Tac-Toe",
    src: starSvg,
    text: "Star",
  },
  {
    ariaLabel: "Watch DAShaikh10/Tic-Tac-Toe on GitHub",
    href: "https://github.com/DAShaikh10/Tic-Tac-Toe/subscription",
    src: eyeSvg,
    text: "Watch",
  },
  {
    ariaLabel: "Follow @DAShaikh10 on GitHub",
    href: "https://github.com/DAShaikh10",
    src: githubSvg,
    text: "Follow @DAShaikh10",
  },
  {
    ariaLabel: "Figma by @anuj_uchil",
    href: "https://www.figma.com/community/file/1254192154560627135",
    src: figmaSvg,
    text: "Figma by @anuj_uchil",
  },
];
