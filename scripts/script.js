const d = document,
  $btn = d.getElementById('btn');

d.addEventListener('DOMContentLoaded', () => {
  $btn.addEventListener('click', colorGenerator);
});

const colorGenerator = () => {
  let hexCode = '#';
  const $hex = d.getElementById('hex'),
    hex = [0, 1, 2, 3, 4, 5, 'A', 'B', 'C', 'D', 'E', 'F'];
  let i = 0;
  while (i < 6) {
    hexCode += hex[Math.floor(Math.random() * hex.length)];
    i++;
  }
  d.querySelector('main').style.backgroundColor = hexCode;
  $hex.innerHTML = `Hexadecimal code color: <span class="hex-code">${hexCode}</span>`;
};
