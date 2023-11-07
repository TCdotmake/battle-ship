import mkSVGText from "./svgText/mkSVGText";
export default function mkVictoryScreen() {
  const screen = document.createElement("div");
  screen.classList.add("win-screen");
  const msg = document.createElement("p");
  msg.classList.add("win-msg");
  msg.append(mkSVGText("Victory!"));
  screen.append(msg);
  return screen;
}
