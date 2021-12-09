//HAMBURGER MENU BUTTON
const $hmButton = document.createElement("button");
$hmButton.classList.add("hamburger-button");

//BUTTON BARS
const barsArray = ["first-bar", "second-bar", "third-bar"];

for (let i = 0; i < 3; i++) {
  let $hmButtonBar = document.createElement("div");
  $hmButtonBar.classList.add(barsArray[i]);
  $hmButton.appendChild($hmButtonBar);
}

//EXPORTS
export { $hmButton };
