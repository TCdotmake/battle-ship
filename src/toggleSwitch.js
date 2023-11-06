export default function toggleSwitch(id) {
  const toggleDiv = document.createElement("div");
  toggleDiv.classList.add("toggle-div");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = id;
  const label = document.createElement("label");
  label.htmlFor = id;
  toggleDiv.append(input, label);
  return toggleDiv;
}
