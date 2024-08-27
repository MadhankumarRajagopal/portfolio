let totalScore = { yourScore: 0 }

function selectRandom(){
    const randomArray = ['Head', 'Tail']
    const randomCoin = Math.floor(Math.random() * 2)
    return randomArray[randomCoin]
}

function playToss(userSelection){

    

    const randomResult = selectRandom()
    console.log({randomResult})
    console.log([userSelection])

    let score;

    if(userSelection == randomResult){
        score = 1
   } else {
        score = -1
   }

    totalScore['yourScore'] += score


    showResult(randomResult, userSelection, score)

}

function spinCoin(){
    const coinSelection = document.querySelectorAll('.selectCoins')
    const clearGameDiv = document.getElementById('clearGame')

    coinSelection.forEach(selectCoins => {
        selectCoins.onclick = () => playToss(selectCoins.value)
    })

    clearGameDiv.onclick = () =>{
        const showResultDiv = document.getElementById('showResult') 
        const totalResultDiv = document.getElementById('totalResult')

        totalScore['yourScore'] = 0
        showResultDiv.innerText = ``
        totalResultDiv.innerText = ``
    }

}


function showResult(randomResult, userSelection, score){

    const showResultDiv = document.getElementById('showResult') 
    const totalResultDiv = document.getElementById('totalResult')

    if(score == 1){
        showResultDiv.innerText = `It's ${userSelection}, YOU WON!!!`
        showResultDiv.style.color = "#28a745";
        
   } else {
        showResultDiv.innerText = `It's ${randomResult}, YOU LOSE!!!`
        showResultDiv.style.color = "#dc3545";
   }


    totalResultDiv.innerText = `Total score ${totalScore['yourScore']}`
    
}

spinCoin()