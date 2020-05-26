let stack = document.querySelector(".stack");
[...stack.children].reverse().forEach((i) => stack.append(i));

stack.addEventListener("click", swap);

function swap(swapEvent) {
  let card = document.querySelector(".card:last-child");
  if (swapEvent.target !== card) return;
  card.style.animation = "swap 500ms forwards";

  setTimeout(() => {
    card.style.animation = "";
    stack.prepend(card);
  }, 700);
}
