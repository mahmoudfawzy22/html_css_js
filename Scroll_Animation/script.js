let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', CheckBoxes);

CheckBoxes();

function CheckBoxes() {
  let windowHeight = (window.innerHeight / 5) * 4;

  boxes.forEach((boxe) => {
    let boxHeight = boxe.getBoundingClientRect().top;
    if (boxHeight < windowHeight) {
      boxe.classList.add('show');
    }
  });
}
