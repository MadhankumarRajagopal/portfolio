// console.log('HI')

// let titleDiv = document.getElementById('titleDiv')
// console.log('Before:', titleDiv.innerText)

// let message = 'Good Bye!';
// titleDiv.innerText = message
// console.log('After:', titleDiv.innerText)

// titleDiv.innerHTML = `<p> ${message}</p`

// titleDiv.style.backgroundColor = 'blue'



//color counter

// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')

// redDiv.onclick = () => console.log('red')
// yellowDiv.onclick = () => console.log('yellow')
// greenDiv.onclick = () => console.log('green')

// instead of this ☝️  use this 👇

const squares = document.querySelectorAll('.colorSquare')
console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

//forEach 

const timesClicked = { red: 0, yellow: 0, green: 0 }

squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  }
})

//clearGame 

function clearScore() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => { square.innerText = '' })
}

// const clearGameBtn = document.getElementById('clear-Game')
// clearGameBtn.onclick = () => clearScore()

document.getElementById('clear-Game').onclick = () => clearScore()

