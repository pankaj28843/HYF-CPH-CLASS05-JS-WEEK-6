/* Exercise 1

What does this function log out:

*/


function returnStringOld() {
    let hello = 'hello world';

    for (let i = 0; i < 5; i++) {
        hello = hello + "," + i;
    }
    return hello;
}

console.log(returnStringOld()); // what logged




function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function() {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request
    request.send();
}




/* Exercise 2

1. First get all spaceX launches. Using this api: https://api.spacexdata.com/v2/launches and the function i have created above.

2. Then filter the successes.

3. Take the first launch and set the innerhtml of a span to the rocket_name.

4. Using the giphy api get a url of a gif with the query text of "success". It should have a rating above 4.

const api_key = '2FuF3E9nyFeXWt3aHIfkxtKTUGn73v0w';
const query = 'smile';
const giphyUrl = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + query;

5. set the src of a img to the gif url (look for the images key in the gifs object).

*/


const spaceXLaunchesURL = 'https://api.spacexdata.com/v2/launches';

function isSuccessfulLaunch(launch) {
    return launch.launch_success;
}


getAjaxData(spaceXLaunchesURL, function(launches) {
    console.log("All launches", launches);

    const successfulLaunches = launches.filter(isSuccessfulLaunch);
    console.log("Successful launches", successfulLaunches);

    const span = document.querySelector('.rocket-name');


    span.innerHTML = successfulLaunches[0].rocket.rocket_name;

});


const searchButton = document.querySelector('#search');
const searchInput = document.querySelector('#gifSearchText');

searchButton.addEventListener('click', function() {

    searchGifs(searchInput.value);

});


function searchGifs(query) {

    const api_key = '2FuF3E9nyFeXWt3aHIfkxtKTUGn73v0w';
    const giphyUrl = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + query;

    getAjaxData(giphyUrl, function(searchResults) {

        console.log(searchResults);

        console.log(searchResults.data[0].images.original.url);

        const ul = document.querySelector('.gif-images');
        ul.innerHTML = "";

        for (const gif of searchResults.data) {
            const gifURL = gif.images.original.url;

            const li = document.createElement('li');
            ul.appendChild(li);

            li.innerHTML = `<img src="${gifURL}">`;

            // console.log(gifURL);
        }

    });
}


/* Exercise 3


1. Create an input element that takes a number from 1-6.

2. Get the number from the input value.

3. Create a ul and add list elements that contains the names of the astronauts from this api: http://api.open-notify.org/astros.json

*/
