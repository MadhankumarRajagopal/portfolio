// https://superheroapi.com/api/access-token

const SUPERHEROTOKEN = '0c8bb980191a73fb43f875365f327fc7'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHEROTOKEN}`

const heroBTN = document.getElementById('heroBTN')
const searchBTN = document.getElementById('searchBTN')
const inputHero = document.getElementById('inputHero')

const heroImageDiv = document.getElementById('heroImage')
const heroStats = document.getElementById('heroStats')




const getRandomSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        // console.log(json)

        const heroStatRandom = showSuperHeroInfo(json)    
    })
}

const searchedSuperHero = (name) => {
    // console.log(name)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        searchHero = json.results[0]
        // console.log(searchHero)
        
        const heroStatSearch = showSuperHeroInfo(searchHero)
    })

}

const statToEmoji = {intelligence: '🧠', strength: '💪', speed: '⚡', durability: '🏋️', power: '🔋', combat: '⚔️'}

showSuperHeroInfo = (character) => {
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    })
    console.log(stats.join(''))

    
        const heroName = `<h1>${character.name}</h1>`
        heroImageDiv.innerHTML = `${heroName} <img src = "${character.image.url}" height = 200px width =  200px />`
        heroStats.innerHTML = `${stats.join('')}`


        document.querySelector('body').style.backgroundImage = `url(${character.image.url})`
        document.querySelector('body').style.backgroundSize = `cover`
        document.querySelector('body').style.backgroundPosition = `Center`
    
}



const randomHero = () => {

    const numberOfHeros = 731
    return Math.floor(Math.random() * numberOfHeros) + 1
}


heroBTN.onclick = () => getRandomSuperHero(randomHero())
searchBTN.onclick = () => searchedSuperHero(inputHero.value)



// document.querySelector('body').style.backgroundImage = `url(${img})`
// document.querySelector('body').style.backgroundSize = `cover`
// document.querySelector('body').style.backgroundPosition = `Center`

