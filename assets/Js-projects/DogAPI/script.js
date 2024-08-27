const dogimgDiv = document.getElementById('dogimgDiv')
const getNewDogBtn = document.getElementById('getNewDogBtn')

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(dog => dog.json())
    .then(json => {
        console.log(json.message)
        dogimgDiv.innerHTML = `<img src="${json.message}">`
    })
}

getNewDogBtn.onclick = () => getNewDog()