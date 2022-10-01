const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// returbns just a list of the pokemon with names that start with the letter b
const bListPkmn = pokémon.filter( p => p.name[0] === "B");
console.log('pokemon stasrting with B',bListPkmn)

// return an array of just the ids
const pkmnIds = pokémon.map( p => p.id)
console.log("pokemon ids...",pkmnIds);

// return array where the ids are divisable by three - works
const pokethreemon = pokémon.filter( p => p.id %3 === 0)
console.log("id div by 3...", pokethreemon);

// return array where the type are fire type - works
const typemon = pokémon.filter( p => p.types[0] === "fire")
console.log('fire types', typemon);

// return array where the pokemon have more than one type 

const lotsamon = pokémon.map( p => p.types[1] !== 1 )
console.log("two types...",lotsamon);

// return array where the only the names are shown - works 
// with map because you have to 'unfreeze' the object to pull a single piece of info out
const allthemon = pokémon.map( p => p.name)
console.log("show me the names...", allthemon);

// return array with only the names of pokemon with an id greater thean 99 - works
const bignames = pokémon.filter( p => p.id > 99)
console.log('id>99...', bignames);

// return array where the names are shown if type is poison = works but entire array is shown not just the name
const haspoisonname = pokémon.filter( p => p.types[0] === 'poison')
console.log('poison...',haspoisonname);

// return array where the first type is shown if the second type is flying - flying displayed but need to show the first type still FIX THIS
const icanfly = pokémon.filter( p => p.types[1] === 'flying')
const {type} = icanfly
console.log("flying...",icanfly);

// return a count of the number of pokemon that are 'normal' type  - works

const imnormalmon = pokémon.filter( p => p.types[0] === 'normal').length
console.log("normal...",imnormalmon);