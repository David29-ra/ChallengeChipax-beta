// Constant variables
const url = "https://rickandmortyapi.com/api/"
const resultjson = []

// Function Fetch to manage the fetch request

async function Fetch(...args) {
  const response = await fetch(...args)

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors);
  }

  if (response.status !== 204) return await response.json();

  return true;
}

async function getData(endpoint, countArray) { 
  const data = await Fetch(url + endpoint + `/${countArray}`, {
    headers: { "Content-Type": "application/json" }
  })
  return data
}

// FUnction with to exercices

const chipax = async () => {

  // First exercise

  const resultCounter = []

  // Two lines repit for each endpoint, make a function to do it

  // locations = 126
  // Array of numbers from 1 to 126 to get all locations
  const locationsqyt = Array.from({length: 126}, (_, i) => i + 1)
  const locationsArray = await getData("location", locationsqyt)
  // console.log("locations", locationsArray)

  // episodies = 51
  // Array of numbers from 1 to 51 to get all episodes
  const episodesqyt = Array.from({length: 51}, (_, i) => i + 1)
  const episodesArray = await getData("episode", episodesqyt)
  // console.log("episodes", episodesArray)

  // characters = 826
  // Array of numbers from 1 to 826 to get all characters
  const charactersqyt = Array.from({length: 826}, (_, i) => i + 1)
  const charactersArray = await getData("character", charactersqyt)
  // console.log("characters", charactersArray)

  resultCounter.push(toPush(locationsArray, "location", "l"))
  resultCounter.push(toPush(episodesArray, "episode", "e"))
  resultCounter.push(toPush(charactersArray, "character", "c"))

  // console.log("Counter", resultCounter)

  // Second exercise
  const resultLocation = []

  episodesArray.forEach(episode => {
    const obj = {name: episode.name, episode: episode.episode, locations: []}

    const locations = episode.characters.map(character => charactersArray.filter( char => char.id == character.split("/")[5]))
                                        .map(char => char[0].origin.name)

    obj.locations = uniqueElements(locations)
  
    resultLocation.push(obj)
  })

  // console.log("locations", resultLocation)

  const char_counter = {
    exercise_name: "Char counter",
    time: "2020-05-10",
    in_time: true,
    results: resultCounter
  }
  
  const episode_locations = {
    exercise_name: "Episode locations",
    time: "2020-05-10",
    in_time: true,
    results: resultLocation
  }

  resultjson.push(char_counter)
  resultjson.push(episode_locations)

  const myjson = JSON.stringify(resultjson, null, 2)

  const searchx = document.querySelector(".root").innerHTML = `<div><p><pre>${myjson}</pre></p></div>`

  console.log(searchx)

}

chipax()

// Function countLetter to count the number of times a letter appears a name of an object

function countLetter(array, prop, letter) {
  const reg = new RegExp(`${letter}`, "g")

  return array.map(object => object[prop].toLowerCase().match(reg)?.length || 0).reduce((a, b) => a + b)
}

function toPush(dataArray, resource, letter) {
  return {char: letter, count: countLetter(dataArray, "name", letter), resource: resource}
}

function uniqueElements(array) {
  return [...new Set(array)]
}