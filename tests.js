async function Fetch() {
    const res1 = await fetch('https://swapi.dev/api/planet/1')
    return await res1.json();
}


function transformPlanet(starship) {
    return {
        name: starship.name,
        crew: starship.crew,
        passengers: starship.passengers,
    }
}

async function getAllStarships() {
    const res = await Fetch()
    return res.results.map(transformPlanet)
}

const star = getAllStarships();
console.log(star);


const fun = (x) => {
    console.log(x)
    return function (y) {
        console.log(y)
        return function (z) {
            console.log(z)
        }
    }
}