    /*
    Rock Paper Scissors 🚀🔥
    Concepts covered in this project
        👉 For loops
        👉 Dom Manipulation
        👉 Variables
        👉 Conditionals (if else if)
        👉 Template Literals
        👉 Event Listeners
        👉 Higher order Function (Math.random())
    */

    const totalScore = { computerScore: 0, playerScore: 0 }

    // const playerChoice = document.querySelectorAll('.rpsButton')
    // console.log(playerChoice)

    // ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

     function getComputerChoice() {
        const computerChoiceArray = ['Rock', 'Paper', 'Scissors']
        const computerValue = Math.floor(Math.random() * computerChoiceArray.length)
        return computerChoiceArray[computerValue]

    }

    // console.log(getComputerChoice())




    // ** getResult compares playerChoice & computerChoice and returns the score accordingly **

    function getResult(playerChoice, computerChoice) {
        // return the result of score based on if you won, drew, or lost
        // return score

        let score;
        if (playerChoice == computerChoice) {
            score = 0
            // console.log(score)
        } else if (playerChoice == 'Rock' && computerChoice == 'Scissors' || playerChoice == 'Scissors' && computerChoice == 'Paper' || playerChoice == 'Paper' && computerChoice == 'Rock') {
            score = 1
            // console.log(score)
        } else {
            score = -1
            // console.log(score)
        }
        return score;
    }


    // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
    
    function showResult(score, playerChoice, computerChoice) {

        const playerScoreDiv = document.getElementById('player-score')
        const handsDiv = document.getElementById('hands')
        const resultDiv = document.getElementById('result')

        if (score == 1) {
            resultDiv.innerText = "You Win!"
        } else if (score == 0) {
            resultDiv.innerText = "It's Tie!"
        } else {
            resultDiv.innerText = "You Lose!"
        }

        handsDiv.innerText = `🦰${playerChoice} vs 🤖${computerChoice}`

        playerScoreDiv.innerText = `Your Total Score: ${totalScore['playerScore']}`


    }

    // ** Calculate who won and show it on the screen **
    function onClickRPS(playerChoice) {
        // console.log({ playerChoice })
        const computerChoice = getComputerChoice()
        // console.log({ computerChoice })

        const score = getResult(playerChoice, computerChoice)
        // console.log({ score })

        totalScore['playerScore'] += score
        // console.log(totalScore['playerScore'])

        showResult(score, playerChoice, computerChoice)
    }



    // ** Make the RPS buttons actively listen for a click and do something once a click is detected **

    function playGame() {
        // use querySelector to select all RPS Buttons
        // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
        // Add a click listener to the end game button that runs the endGame() function on click

        const rpsButtons = document.querySelectorAll('.rpsButton')
        //   rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)
        //   rpsButtons[1].onclick = () => console.log(rpsButtons[1].value)
        //   rpsButtons[2].onclick = () => console.log(rpsButtons[2].value)

        rpsButtons.forEach(rpsButton => {
            rpsButton.onclick = () => onClickRPS(rpsButton.value)
        })

        const endGameButton = document.getElementById('endGameButton')
        endGameButton.onclick = () => endGame(totalScore)

    }



    // ** endGame function clears all the text on the DOM **
    function endGame() {

        const playerScoreDiv = document.getElementById('player-score')
        const handsDiv = document.getElementById('hands')
        const resultDiv = document.getElementById('result')

        totalScore['playerChoice'] = ''
        totalScore['computerChoice'] = ''
        resultDiv.innerText = ''
        handsDiv.innerText = ''
        playerScoreDiv.innerText = ''
    }

    playGame()