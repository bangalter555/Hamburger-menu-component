const $hiddenMenu = document.createElement("aside");
$hiddenMenu.classList.add("hidden-menu");

for (let i = 0; i < 4; i++) {
  let $link = document.createElement("a");
  $link.classList.add("section-link");
  $link.href = `#section-num-${i + 1}`;
  $link.textContent = `Section ${i + 1}`;
  $hiddenMenu.appendChild($link);
}

//EXPORTS
export { $hiddenMenu };
