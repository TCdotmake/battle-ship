export default function mkModal() {
  const modalBG = document.createElement("div");
  modalBG.classList.add("modal");
  modalBG.addEventListener("click", () => {
    modalBG.style.display = "none";
  });
  return modalBG;
}
