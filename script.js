let input = document.getElementById('searchInput');
let searchButton = document.getElementById('searchButton');
let showResult = document.getElementById('showResult');
let showMoreButton = document.getElementById('showMoreButton');
let pageNumber = 1;
async function fetchData() {
    let Url = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${input.value}&client_id=qY4b8F6JEvrlkhSlnVFEKx-HCdFjx9oqJr7U1oUjw_w`;
    let response = await fetch(Url);
    let data = await response.json();
    let results = data.results;
    if (results.length === 0) {
        alert("Not found the data :(");
    }
    else {
        results.map((result) => {
            let image = document.createElement('img');
            image.src = result.urls.small;
            let imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.appendChild(image);
            showResult.appendChild(imageLink);
            setTimeout(() => {
                showMoreButton.style.display = 'block';
            }, 2000)
        })
    }
}

searchButton.addEventListener('click', () => {
    showResult.innerHTML = '';
    fetchData();


});

showMoreButton.addEventListener("click", () => {
    pageNumber++;
    fetchData();
})


