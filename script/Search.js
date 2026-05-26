// Digimovies Search 
search.onkeyup = function (event){
  movieResult.className = "show";

  var movieData = Movies.filter(function (eleman){
      return eleman.title.indexOf(event.target.value) != -1 && event.target.value != ""
  });

  movieResult.innerHTML = "";
  fill_search(movieData);

}
// create eleman for search
function fill_search(jsonData){

    for(eleman of jsonData){
      
         let movieItems = document.createElement('div');

         let movieImdb = document.createElement('div');
         movieImdb.className = "movieImdb";
         movieImdb.innerHTML = eleman.point;

         let moviePicture = document.createElement('div');
         moviePicture.className = "moviePicture";
         
         let movieImg = document.createElement('img');
         movieImg.src = "digiMoviesImg/searchImg/" + eleman.picture2[0];

         let movieName = document.createElement('div');
         movieName.className = "movieName";
         movieName.innerHTML = eleman.title2;

         let movieJanr2 = document.createElement('div');
         movieJanr2.className = "movieJanr2";
         movieJanr2.innerHTML = eleman.janr2;

         movieItems.appendChild(movieImdb);
         movieItems.appendChild(moviePicture);
         moviePicture.appendChild(movieImg);
         movieItems.appendChild(movieName);
         movieName.appendChild(movieJanr2);

         movieResult.appendChild(movieItems);
    }
}
// create eleman for search end 