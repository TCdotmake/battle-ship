import mkSVGText from "./svgText/mkSVGText";
export default function mkDefeatScreen() {
  const screen = document.createElement("div");
  screen.classList.add("win-screen");
  const msg = document.createElement("p");
  msg.classList.add("win-msg");
  msg.append(mkSVGText("Defeat!"));
  screen.append(msg);
  return screen;
}
