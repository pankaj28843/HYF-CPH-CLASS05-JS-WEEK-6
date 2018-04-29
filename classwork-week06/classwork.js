const btn = document.querySelector('#search');
const input = document.querySelector('#inputText');

btn.addEventListener('click', function() {

    const searchTerm = input.value;
    searchHYFRepos(searchTerm);
});



function fetchJSONData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
        console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}


function searchHYFRepos(searchTerm) {

    const url = "https://api.github.com/search/repositories?q=user:HackYourFuture+" + searchTerm;

    fetchJSONData(url, function(searchResult) {
        console.log(searchResult);
        renderRepositories(searchResult.items)

    });

}


function renderRepositories(repositories) {
    const ul = document.querySelector('#reposList');
    ul.innerHTML = '';
    for (const repo of repositories) {
        const li = document.createElement('li');
        ul.appendChild(li);

        li.innerHTML = `<a target="_blank" href="${repo.url}">${repo.name}</a>`;
    }
}
