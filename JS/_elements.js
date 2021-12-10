//IMPORTS
import { $hmButton } from "./_hamburger_menu_component.js";
import { $hiddenMenu } from "./_hidden_menu.js";

//Documento HTML
const $documentHTML = document.documentElement;
//head HTML
const $documentHead = document.head;

//Links
const $linkToStyles = document.createElement("link");
$linkToStyles.rel = "stylesheet";
$linkToStyles.href = "/DIST/main.css";
$documentHead.insertAdjacentElement("afterbegin", $linkToStyles);

//Scripts
const $mainScript = document.querySelector("script");

//BODY
const $documentBody = document.body;
$documentBody.classList.add("body");
//BODY ELEMENTS

//CONTAINER
const $container = document.createElement("div");
$container.classList.add("container");
$documentBody.insertAdjacentElement("afterbegin", $container);

//HEADER
const $header = document.createElement("header");
//Adding classes to header
$header.classList.add("header");
$container.insertAdjacentElement("afterbegin", $header);
//HEADER Title (H1)
const $pageTitle = document.createElement("h1");
$pageTitle.textContent = `Hamburger Menu History`;
$pageTitle.classList.add("page-title");
$header.appendChild($pageTitle);

//SECTIONS
const sectionsClassesArray = [
  "first-section",
  "second-section",
  "third-section",
  "fourth-section",
];

for (let i = 0; i < sectionsClassesArray.length; i++) {
  let $section = document.createElement("section");
  $section.id = `section-num-${i + 1}`;
  $section.classList.add(sectionsClassesArray[i]);
  $section.innerHTML = `<h2> Section ${i + 1} </h2>`;
  $container.appendChild($section);
}

//Adding Hamburger Button
$documentBody.insertBefore($hmButton, $mainScript);

//Adding hidden menu
$documentBody.insertAdjacentElement("afterbegin", $hiddenMenu);

//EXPORTS
export { $documentHTML };
