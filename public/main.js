const qs = e => document.querySelector(e)

const randomColor = () => {
  let x = Math.floor(Math.random() * 256)
  let y = Math.floor(Math.random() * 256)
  let z = Math.floor(Math.random() * 256)
  let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')'
  console.log(bgColor)

  qs('.colorCode').textContent = bgColor
  document.body.style.background = bgColor
}
randomColor()

qs('.colorClicker').addEventListener('click', randomColor)
