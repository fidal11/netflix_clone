//creating an array of movie objects

let movies = [
    {
        name: 'Fight Club',
        poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgTszE1phYg2G7H4RrgeSEssOw-Kpnh0Si-sF5pVQQrBXJ_6e',
        rating: 9.8,
        starring:'Brad Pitt,Edward Newton,Helena',
        description: 'Its a movie about two guys and the woman who comes in between them but a little twisted'
    },
    {
        name: 'Little Forest',
        poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4gt4QiKaCZO0X5uWx9RImi-qLlnyjgXmJhulhT3chpwY4wAoU',
        rating: 9.2,
        description: 'A young woman grows tired of life in the city and returns to her hometown in the countryside.',
        starring:`Kim Tea-ri`
    },
    {
        name: 'The Dark Night',
        poster: 'https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg',
        rating: 9.7,
        starring:`Christian Bale,Heaath Ledger`,
        description: 'After Gordon, Dent and Batman begin an assault on Gothams organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.'
    },
    {
        name: 'Interstellar',
        poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB',
        rating: 9.7,
        starring:`Mathew McConaughey,Anne Hathway,Jessica Chastin`,
        description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.'
    },
    {
        name: 'Oppenhiemer',
        poster: 'https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900',
        rating: 9.6,
        starring:`Chillian Murphy,Robert Downey jr,Emily Blunt`,
        description: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.'
    },
    {
        name: 'Ford vs Ferrari',
        poster: 'https://pics.filmaffinity.com/Ford_v_Ferrari-929107889-large.jpg',
        rating: 9.5,
        starring:`Christian Bale,Matt Damon`,
        description: 'Carroll Shelby, an automotive designer, and Ken Miles, a race car driver, join hands to build a trailblazing vehicle and compete against the Ferrari race cars.'
    },
    {
        name: 'Highway',
        poster: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHY8L5EnoZuxkg-CbnuYRvwJkZHtGcLUvymOw6du9oUQ4DXewG',
        rating: 8.9,
        starring:`Alia Bhatt,Randeep Hooda`,

        description: 'Veera, a young bride-to-be, is abducted by a local gangster, Mahabir, and his men a day prior to her wedding. Far from being terrified of her abductor, Veera discovers a new meaning to her life.'
    },
    {
        name: 'Premam',
        poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQMDDYfNw0q6TbukSCdWsocLp1HN9DrVo3rGA4Ea5N92PE4Kuy',
        rating: 8.8,
        starring:`Nivin Pauly,Krishna Sankar,Shabareesh Varma`,

        description: 'While Georges first love turns out to be a disappointment, Malar, a college lecturer, rekindles his love interest. His romantic journey takes him through several stages, helping him find his purpose.'
    },
    {
        name: 'Fast and Furius Tokyo Drift',
        poster: 'https://m.media-amazon.com/images/S/pv-target-images/d7e7a83f84a94030b50cb39e33956ee1e282ad53510f123cc067cd1e1592e6e1.jpg',
        rating: 8.7,
        starring:`Lucas Black,Sung Kang,Nathalie Kelly`,

        description: 'n order to avoid jail time, an errant car racer is sent to live with his father in Tokyo. However, he finds himself in trouble once again when he becomes a major competitor in drifting.'
    },
    {
        name:`NPCB`,
        poster:`https://www.themoviedb.org/t/p/w500/yKvrZ53FBY9EzH2kLy4KdeyPpub.jpg`,
        rating:8.6,
        starring:'Dulqar Salman,Sunny Wayne'
    }

]



function SearchMovie() {

    let movieName = document.getElementById('search').value


    if (movieName !== '') {
        let result = movies.filter(function (movie) {
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })
        if(result.length==0){
            document.innerHTML
        }
        DisplayMovies(result)

    }
    else {

        DisplayMovies(movies)
    }


}


function DisplayMovies(data) {


    document.getElementById('movies').innerHTML = ''

    let htmlString = ``

    for (i = 0; i < data.length; i++) {




        htmlString = htmlString +

            `
            
        
        <div class="movie">
        <div class="overlay">
             
            <div class="details">
                <h1>${data[i].name}</h1>

                <h4>Starring:${data[i].starring}</h4>
                <h5>IMDB:${data[i].rating}</h5>
                 
                <p>${data[i].description}</p>
            </div>
        </div>
        <img src="${data[i].poster}"
            alt="movie-poster" class="poster">

    </div>
        
        `;
    }

    console.log(htmlString)

    document.getElementById("movies").innerHTML = htmlString;  //converted html code into string and posted it using js --it is slower

}

DisplayMovies(movies)












// let movieDiv = document.createElement('div')
// movieDiv.classList.add("movie")

// let overlayDiv= document.createElement('div')
// overlayDiv.classList.add('overlay')

// movieDiv.appendChild(overlayDiv)





// console.log(movieDiv)