import mkModal from "./mkModal";

const switchModal = mkModal();
switchModal.id = "switch-modal";
const content = document.createElement("div");
const player = document.createElement("span");
player.id = "modal-player-name";
player.innerHTML = "";
const turn = document.createElement("span");
turn.innerHTML = "Turn";
const rdyBtn = document.createElement("button");
rdyBtn.innerHTML = "Ready!";
switchModal.append(player, turn, rdyBtn);

export default switchModal;
