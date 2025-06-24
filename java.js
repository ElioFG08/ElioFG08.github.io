const text = document.querySelector('.text');
const colors = ['white', '#ffcccc', '#ff6666', '#ff0000'];
let index = 0;

setInterval(() => {
  text.style.color = colors[index];
  index = (index + 1) % colors.length;
}, 1000);
