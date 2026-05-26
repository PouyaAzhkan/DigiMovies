/*  dynamic movies generation for all part */

fillWithMovies("topMovies",Movies);

function generateMoviesItems(holderID,jsonDataItem){

    // alert(products[i].fname);

    let movieBaner = document.createElement('div')
    movieBaner.className = "movieBaner";

    movieBaner.addEventListener("click",() => {showMovieDetail(jsonDataItem.id);});
      
    let movieInformation = document.createElement('div')
    movieInformation.className = "movieInformation";

    let movieTitle = document.createElement('div');
    movieTitle.className = "movieTitle";
    movieTitle.innerHTML = jsonDataItem.title;

    let moviePoints = document.createElement('div');
    moviePoints.className = "moviePoints";
    
    let pointAndVotes = document.createElement('div');
    pointAndVotes.className = "pointAndVotes";	
    pointAndVotes.innerHTML = "/10";
    
    let points = document.createElement('div');
    points.className = "points";
    points.innerHTML = jsonDataItem.point;

    let votes = document.createElement('div');
    votes.className = "votes";
    votes.innerHTML = jsonDataItem.votes;

    let favoriteMovieBtn = document.createElement('div');
    favoriteMovieBtn.className = "favoriteMovieBtn";

    let subTitle = document.createElement('div');
    subTitle.className = "subTitle";

    let iranianLanguage = document.createElement('div');
    iranianLanguage.className = "iranianLanguage";

    let movieQoality = document.createElement('div');	
    movieQoality.className = "movieQoality";  
    movieQoality.innerHTML = jsonDataItem.qoality;

    let movieTime = document.createElement('div');	
    movieTime.className = "movieTime";	  
    movieTime.innerHTML = jsonDataItem.movieTime;

    let movieJanr = document.createElement('div');
    movieJanr.className = "movieJanr";		  
    movieJanr.innerHTML = jsonDataItem.janr;

    let movieDrector = document.createElement('div');	
    movieDrector.className = "movieDrector";	  
    movieDrector.innerHTML = jsonDataItem.director;

    let movieStars = document.createElement('div');
    movieStars.className = "movieStars";		  
    movieStars.innerHTML = jsonDataItem.stars;

    let movieCuntrys = document.createElement('div');
    movieCuntrys.className = "movieCuntrys";		  
    movieCuntrys.innerHTML = jsonDataItem.country;

    let movieDiscription = document.createElement('div');
    movieDiscription.className = "movieDiscription";		  
    movieDiscription.innerHTML = jsonDataItem.describe;

    let downloadTitle = document.createElement('div');
    downloadTitle.innerHTML = "ادامه /";
    downloadTitle.className = "downloadTitle";		  

    let downlaodFilm = document.createElement('div');
    downlaodFilm.innerHTML = "دانلود";
    downlaodFilm.className = "downlaodFilm";		  

    let movieCover = document.createElement('div');
    movieCover.className = "movieCover";

    let images = document.createElement('div');
    images.className = "images";
    
    let movieImages = document.createElement('img');
    movieImages.src = "digiMoviesImg/newestMovies/" + jsonDataItem.picture[0];

    let movieTiser = document.createElement('div');
    movieTiser.innerHTML = "مشاهده تریلر";
    movieTiser.className = "movieTiser";

    let tilerIcon = document.createElement('div');
    tilerIcon.className = "tilerIcon";

    let tilerIcon2 = document.createElement('div');
    tilerIcon2.className = "tilerIcon2";


    movieBaner.appendChild(movieInformation);
    movieInformation.appendChild(movieTitle);
    movieTitle.appendChild(moviePoints);
    moviePoints.appendChild(pointAndVotes);
    pointAndVotes.appendChild(points);
    moviePoints.appendChild(votes);
    moviePoints.appendChild(favoriteMovieBtn);
    moviePoints.appendChild(subTitle);
    moviePoints.appendChild(iranianLanguage);

    movieInformation.appendChild(movieQoality);
    movieInformation.appendChild(movieTime);
    movieInformation.appendChild(movieJanr);
    movieInformation.appendChild(movieDrector);
    movieInformation.appendChild(movieStars);
    movieInformation.appendChild(movieCuntrys);
    movieInformation.appendChild(movieDiscription);
    movieInformation.appendChild(downloadTitle);
    downloadTitle.appendChild(downlaodFilm);

    movieBaner.appendChild(movieCover);
    movieCover.appendChild(images);
    images.appendChild(movieImages);
    movieCover.appendChild(movieTiser);
    movieTiser.appendChild(tilerIcon);
    movieTiser.appendChild(tilerIcon2);

    document.getElementById(holderID).appendChild(movieBaner);	
}

function fillWithMovies(holderID,jsonData){
    
document.getElementById(holderID).innerHTML = "";

for(let i=0; i<jsonData.length;i++){
    generateMoviesItems(holderID,jsonData[i]);
}
}
/*  dynamic movies generation for all part finish */