export default function mkIcon(className, svg) {
  const icon = document.createElement("div");
  icon.classList.add("icon");
  icon.classList.add("animate-pop");
  icon.classList.add(className);
  icon.innerHTML = svg;
  return icon;
}
