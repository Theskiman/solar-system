const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(planet => {
    let planetHTML = `<div>${planet}</div>`
    planetEl.innerHTML += planetHTML
})

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const upperPlanet = planets.map(planet =>{
    let firsLetter = planet.split('')
    let upperLetter = firsLetter[0].toUpperCase()
    let slicedPlanet = planet.slice(1)
    let finishedPlanet = upperLetter + slicedPlanet
    return finishedPlanet
})

console.log(upperPlanet)
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetE = planets.filter(planet =>{
    planetLetter = planet.includes("e")
    return planetLetter
})

console.log(planetE)