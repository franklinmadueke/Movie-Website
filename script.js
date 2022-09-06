// API = Application Programming Interface
// An intermediary (interface) that allows two applications to interract

// Fetch API
fetch("http://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
    console.log(data.Search)
})
.catch(err => console.log(err));

// Movie Website

// Target the search input
const input = document.querySelector("section input");
// Target the search button
const searchBtn = document.querySelector("section button");

// Add an Event listener to the srarch button
searchBtn.addEventListener("click", function (){
    getMovie();
})

function getMovie(){
    // Extract the value of the input
    const title = input.value;
    // omdbAPI = http://www.omdbapi.com/?i=tt3896198&apikey=d64e6751
    fetch(`http://www.omdbapi.com/?apikey=d64e6751&&s=${title}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        document.querySelector(".row").textContent = "";
        console.log(data.Search)
        const movies = data.Search;
        //  Loop through the movies array
        for (i in movies){
            const div = document.createElement("div");
            div.className = "col";
            div.innerHTML = `                <div class="card" style="width: 18rem;">
            <img src=${movies[i].Poster} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${movies[i].Title}</h5>
                <p class="card-text">${movies[i].Year} ${movies[i].Type}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
        // Append the div into the div of class row
        document.querySelector(".row").append(div);
        }
    })
    .catch(err => console.log(err));
}















// github.com(sign up on this when you get home)
// omdbapi.com
