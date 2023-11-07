export default function mkSVGText(text) {
  let textDiv = document.createElement("div");
  textDiv.style.width = "20rem";
  textDiv.style.height = "5.7rem";
  textDiv.innerHTML = `<svg width="100%" height="100%">
<filter id="bevel">
  <!-- color for stroke and bevel -->
  <feFlood result="STROKE-color" class="stroke-color"></feFlood>
  <feFlood result="BEVEL-color" class="bevel-color"></feFlood>
  <!-- stroke -->
  <feMorphology
    in="SourceAlpha"
    operator="dilate"
    radius="3"
    result="STROKE_1"
  ></feMorphology>
  <!-- bevel -->
  <feConvolveMatrix
    order="4,4"
    kernelMatrix="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1"
    in="STROKE_1"
    result="BEVEL_1"
    divisor="1"
  ></feConvolveMatrix>
  <feOffset dx="4" dy="4" in="BEVEL_1" result="BEVEL_2"></feOffset>
  <!-- apply color -->
  <feComposite
    in="STROKE-color"
    in2="STROKE_1"
    operator="in"
    result="STROKE_2"
  ></feComposite>
  <feComposite
    in="BEVEL-color"
    in2="BEVEL_2"
    operator="in"
    result="BEVEL_3"
  ></feComposite>
  <!-- combine -->
  <feMerge result="final">
    <feMergeNode in="BEVEL_3"></feMergeNode>
    <feMergeNode in="STROKE_2"></feMergeNode>
    <feMergeNode in="SourceGraphic"></feMergeNode>
  </feMerge>
</filter>

<text
x="48%"
y="55%"
  class="text-color svg-text"
>
  ${text}
</text>
</svg>
`;
  return textDiv;
}
