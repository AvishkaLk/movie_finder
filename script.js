window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  preloader.style.transition = "opacity 0.6s ease";
  preloader.style.opacity = "0";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 600);
});

const panel = document.getElementById("sidePanel");
const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", () => {
    const movie = document.getElementById("movie2").value.trim();

    if (!movie) {
        alert("Please enter a movie name first!");
        return;
    }

    getMovie(movie);
});

async function getMovie(movie) {
    const api_key = "fce55147";
    const api_url = "http://www.omdbapi.com/?apikey="+api_key+"&t="+movie+"";

    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

// Put data in panel
document.getElementById("movieImg").src = data.Poster;
    document.getElementById('Title').textContent = data.Title;
    document.getElementById('Released').textContent = data.Released;
    document.getElementById('Rated').textContent = data.Rated;
    document.getElementById('Runtime').textContent = data.Runtime;
    document.getElementById('Genre').textContent = data.Genre;
    document.getElementById('Director').textContent = data.Director;
    document.getElementById('Writer').textContent = data.Writer;
    document.getElementById('Actors').textContent = data.Actors;
    document.getElementById('Language').textContent = data.Language;
    document.getElementById('Country').textContent = data.Country;
    document.getElementById('Awards').textContent = data.Awards;
    document.getElementById('Plot').textContent = data.Plot;


    if (window.innerWidth <= 600) {
        panel.style.left = "auto";
        panel.style.right = "0";
        panel.style.width = "100vw";
    } 
    else {
        panel.style.right = "0";
        panel.style.left = "auto";
        panel.style.width = "79.5%";    
    }
}

// Close panel on click
panel.addEventListener("click", () => {
    panel.style.width = "0";
});

