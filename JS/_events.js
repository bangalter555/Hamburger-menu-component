//IMPORTS
import { $hmButton } from "./_hamburger_menu_component.js";
import { $documentHTML } from "./_elements.js";
import { $hiddenMenu } from "./_hidden_menu.js";

//Clicks
$documentHTML.addEventListener("click", (e) => {
  let target = e.target;
  if (
    target === $hmButton ||
    target === $hmButton.children[0] ||
    target === $hmButton.children[1] ||
    target === $hmButton.children[2]
  ) {
    $hmButton.children[0].classList.toggle("first-bar-clicked");
    $hmButton.children[1].classList.toggle("second-bar-clicked");
    $hmButton.children[2].classList.toggle("third-bar-clicked");
    $hiddenMenu.classList.toggle("show-hidden-menu");
  }
  if (target.matches(".section-link")) {
    $hmButton.children[0].classList.toggle("first-bar-clicked");
    $hmButton.children[1].classList.toggle("second-bar-clicked");
    $hmButton.children[2].classList.toggle("third-bar-clicked");
    $hiddenMenu.classList.toggle("show-hidden-menu");
  }
});

//Hoverings
$documentHTML.addEventListener("mouseover", (e) => {
  let target = e.target;
  if (target.matches(".section-link")) {
    target.classList.toggle("section-link-hovered");
  }
});

$documentHTML.addEventListener("mouseout", (e) => {
  let target = e.target;
  if (target.matches(".section-link")) {
    target.classList.toggle("section-link-hovered");
  }
});
