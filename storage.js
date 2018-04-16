// Create objects of cities visited

const portlandOr = {
    cityName: "Portland, Oregon",
    continent: "North America",
    year: "2017",
    pic: "imagesCity/portland.jpg",
    attractions: "Japanese Garden, Rose Garden, Ringside steakhouse, The Gorge, Public Transit"
};

const oregonCityOr = {
    cityName: "Oregon City, Oregon",
    continent: "North America",
    year: "2016",
    pic: "imagesCity/oregoncity.jpg",
    attractions: "Waterfall, Pig that lives on the corner, My homie Chris, Chris's terrible house rules, Good Beer"
};

const nashville = {
    cityName: "Nashville, TN",
    continent: "North America",
    year: "2015",
    pic:"imagesCity/nashville.jpg",
    attractions: "Cheekwood, Springwater, Hot Chicken, Humidity, The Piney River"
};

const hiltonHead = {
    cityName: "Hilton Head Island, SC",
    continent: "North America",
    year: "2014",
    pic: "imagesCity/hiltonhead.jpg",
    attractions: "Ocean, Beer, My Homie John, Skrempfz, Sand in my shoe"
};

const pilsen = {
    cityName: "Pilsen, Prague",
    continent: "Europe",
    year: "2013",
    pic: "imagesCity/pilsen.jpg",
    attractions: "Buildings, Art, Stuff, Bricks, Beer"
};

const sanDiego = {
    cityName: "San Diego, Ca",
    continent: "North America",
    year: "2012",
    pic: "imagesCity/sandiego.jpg",
    attractions: "Fires, Beach, Good Beer, Sushi, Shady People"
};

const vietnam = {
    cityName: "Ho Chi Minh, Vietnam",
    continent: "Asia",
    year: "2011",
    pic: "imagesCity/vietnam.jpg",
    attractions: "Coffee, People, My Homie Scott, Rice, Fish"
};

const tijuana = {
    cityName: "Tijuana, Mexico",
    continent: "South America",
    year: "2010",
    pic: "imagesCity/tijuana.jpg",
    attractions: "Rice, Beans, Tacos, Guns, Music"
};

const sydney = {
    cityName: "Sydney, Australia",
    continent: "Australia",
    year: "2009",
    pic: "imagesCity/sydney.jpg",
    attractions: "Beer, Boomerangs, Kangaroos, Funny Accents, Crocs"
};

const cairo = {
    cityName: "Cairo, Egypt",
    continent: "Africa",
    year: "2008",
    pic: "imagesCity/cairo.jpg",
    attractions: "Pyramids, People, Sun, Heat, Stuff"
};


// Create empty object for trips 

const tripsDatabase = {};

//Create empty array myTrips in trips

tripsDatabase.myTrips = [];

// Make function to push city to array

function makeArray(city) {
    tripsDatabase.myTrips.push(city);
}

// call function w/cities to push to array
makeArray(portlandOr);
makeArray(oregonCityOr);
makeArray(nashville);
makeArray(hiltonHead);
makeArray(pilsen);
makeArray(sanDiego);
makeArray(vietnam);
makeArray(tijuana);
makeArray(sydney);
makeArray(cairo);

// Make sure cities are in object trips
console.log(tripsDatabase.myTrips[0]);
console.log(tripsDatabase.myTrips[1]);
console.log(tripsDatabase.myTrips[2]);
console.log(tripsDatabase.myTrips[3]);
console.log(tripsDatabase.myTrips[4]);
console.log(tripsDatabase.myTrips[5]);
console.log(tripsDatabase.myTrips[5].cityName);

console.log(nashville.cityName);

//  Function to set local storage, and call function

function saveDatabase (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject);
    localStorage.setItem(localStorageKey, stringifiedDatabase);
}
saveDatabase(tripsDatabase, "Matt's Trips");










