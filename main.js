import { getAdat } from "./async.js"

console.log("Gipsz Jakab")

getAdat("adatok.json", megjelenit)
getAdat(" https://pokeapi.co/api/v2/pokemon/ditto", pokemonMegjelenit)
console.log("Nagy Géza")

function megjelenit(adat){
    $("body").append(`<h1>Adatok</h1>`)
    $("body").append(`<h2>${adat}</h2>`)
}

function pokemonMegjelenit(adat){
    console.log(adat)
    $("body").append(`<h1>Pokemon</h1>`)
    $("body").append(`<h2>${adat.name}</h2>`)
    $("body").append(`<img src="${adat.sprites.front_default}" alt="${adat.name}">`)

}

//hf összes pokemon