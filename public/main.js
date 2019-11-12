const qs = e => document.querySelector(e);

const changeColor = () => {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log(color);
  qs(".colorCode").textContent = color;
  document.body.style.background = color;
};

qs(".colorClicker").addEventListener("click", changeColor);
