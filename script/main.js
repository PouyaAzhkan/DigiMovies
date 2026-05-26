// digimovies light and dark mode
lightModeFlag = 0;
lightMode = function(){
   if(lightModeFlag == 0){
        changeModeBotton.style.position = "relative";
        changeModeBotton.style.left = "17px";
        lightModeFlag = 1;
   }
   else if(lightModeFlag == 1){
        changeModeBotton.style.left = "-30px";
        lightModeFlag = 0;
   }
}
// digimovies light and dark mode end

// filter Type and The crew behind the scenes of movie
selectTypeFlag = 0;
selectType = function (){
    if(selectTypeFlag == 0){
          type1.style.background = "#eb8307";
          type2.style.background = "";
          selectTypeFlag = 1;

        // filter just movie 
        var curMovies2 = Movies.filter(eleman => eleman.title4 == "دانلود فیلم");

        fillWithMovies("topMovies",curMovies2);
        // filter just movie end 
    }
    else if(selectTypeFlag == 1){
          type1.style.background = "";
          selectTypeFlag = 0;
        //  filter OFF
            fillWithMovies("topMovies",Movies);
        //  filter OFF end
    }
}
selectTypeFlag2 = 0;
selectType2 = function (){
     if(selectTypeFlag2 == 0){
          type2.style.background = "#eb8307";
          type1.style.background = "";
          selectTypeFlag2 = 1;

        // filter just Series
          var curMovies3 = Movies.filter(eleman => eleman.title4 == "دانلود سریال");
        
          fillWithMovies("topMovies",curMovies3);
        // filter just Series finish
     }
     else if(selectTypeFlag2 == 1){
          type2.style.background = "";
          selectTypeFlag2 = 0;
        //  filter OFF
          fillWithMovies("topMovies",Movies);
        //  filter OFF end
     }
}
// filter Type and The crew behind the scenes of movie end

// Turn On filter languege and subtitle and inline movie and series
// film language
filterOnFlag = 0;
filterOn = function (){
    if(filterOnFlag == 0){
        movieLanguage.style.background = "url(digiMoviesImg/turnOn.png) no-repeat 21% -20%";
        movieLanguage.style.backgroundSize = "30px";
        filterOnFlag = 1;

        fillWithMovies("topMovies",Movies);
    }
    else if(filterOnFlag == 1){
        movieLanguage.style.background = "url(digiMoviesImg/turnOff.png) no-repeat 21% -20%";
        movieLanguage.style.backgroundSize = "30px";
        filterOnFlag = 0;
    }
}
// film Censored
filterOnFlag2 = 0;
filterOn2 = function (){
    if(filterOnFlag2 == 0){
        movieCensored.style.background = "url(digiMoviesImg/turnOn.png) no-repeat 21% -20%";
        movieCensored.style.backgroundSize = "30px";
        filterOnFlag2 = 1;

        var curMovies20 = Movies.filter(eleman => eleman.title == "سانسور شده");

        fillWithMovies("topMovies",curMovies20);
    }
    else if(filterOnFlag2 == 1){
        movieCensored.style.background = "url(digiMoviesImg/turnOff.png) no-repeat 21% -20%";
        movieCensored.style.backgroundSize = "30px";
        filterOnFlag2 = 0;
        showAllData();
    }
}
// film Subtitle
filterOnFlag3 = 0;
filterOn3 = function (){
    if(filterOnFlag3 == 0){
        movieSubtitle.style.background = "url(digiMoviesImg/turnOn.png) no-repeat 21% -20%";
        movieSubtitle.style.backgroundSize = "30px";
        filterOnFlag3 = 1;
        showAllData();
    }
    else if(filterOnFlag3 == 1){
        movieSubtitle.style.background = "url(digiMoviesImg/turnOff.png) no-repeat 21% -20%";
        movieSubtitle.style.backgroundSize = "30px";
        filterOnFlag3 = 0;
    }
}
// film onlineMovie
filterOnFlag4 = 0;
filterOn4 = function (){
    if(filterOnFlag4 == 0){
        onlineMovie.style.background = "url(digiMoviesImg/turnOn.png) no-repeat 21% -20%";
        onlineMovie.style.backgroundSize = "30px";
        filterOnFlag4 = 1;

        var curMovies21 = Movies.filter(eleman => eleman.title == "پخش آنلاین");

        fillWithMovies("topMovies",curMovies21);
    }
    else if(filterOnFlag4 == 1){
        onlineMovie.style.background = "url(digiMoviesImg/turnOff.png) no-repeat 21% -20%";
        onlineMovie.style.backgroundSize = "30px";
        filterOnFlag4 = 0;
        showAllData();
    }
}
// Turn On filter languege and subtitle and inline movie and series end

// show home/landing page
function showLandingPage(){
    content.className = "show";
    movieDetail.className = "hide";
}
// show home/landing page end

// show movie Detail and this data with Json data
function showMovieDetail(MovieId){
    content.className = "hide";
    movieDetail.className = "show";

    // Load Movies Detail Data

    let curMovies = Movies.find(eleman => eleman.id == MovieId);

    thisMovie.innerHTML = curMovies.title3;
    detailInformationImg.src = "digiMoviesImg/movieDetail/" + curMovies.picture3[0];
    filmTitle.innerHTML = curMovies.title3;
    pointValiu.innerHTML = curMovies.point;
    votes.innerHTML = curMovies.votes;
    movieQoality2.innerHTML = curMovies.qoality;
    movieTime2.innerHTML = curMovies.movieTime;
    movieJanr2.innerHTML = curMovies.janr;
    movieAgg.innerHTML = curMovies.egg;
    movieDirector2.innerHTML = curMovies.director;
    movieCuntrys2.innerHTML = curMovies.country;
    movieWriter.innerHTML = curMovies.wtiter;
    movieStars.innerHTML = curMovies.stars;
    movieCanal.innerHTML = curMovies.canal;
    movieDiscroption2.innerHTML = curMovies.describe;
    movieCoverImg.src = "digiMoviesImg/movieDetail/" + curMovies.picture4[0];
}
// show movie Detail and this data with Json data finish
// filter movie Country 
showAllData = function () {
    fillWithMovies("topMovies",Movies);
}
movieFromUSA = function () {
    var curMovies4 = Movies.filter(eleman => eleman.country == "محصول کشور : آمریکا");

    fillWithMovies("topMovies",curMovies4);
}
movieFropEngland = function () {
    var curMovies5 = Movies.filter(eleman => eleman.country == "محصول کشور : آمریکا , انگلستان");

    fillWithMovies("topMovies",curMovies5);
}
movieFromGermany = function () {
    var curMovies6 = Movies.filter(eleman => eleman.country == "محصول کشور : آلمان , آمریکا");

    fillWithMovies("topMovies",curMovies6);
}
movieFromCanada = function () {
    var curMovies7 = Movies.filter(eleman => eleman.country == "محصول کشور : آمریکا , کانادا");

    fillWithMovies("topMovies",curMovies7);
}
// filter movie Country finish
// filter movie egg grope 
ageGroup_R = function () {
    var curMovies8 = Movies.filter(eleman => eleman.egg == "رده سنی : R");

    fillWithMovies("topMovies",curMovies8);
}
ageGroup_TV_14 = function () {
    var curMovies9 = Movies.filter(eleman => eleman.egg == "رده سنی : TV-14");

    fillWithMovies("topMovies",curMovies9);
}
ageGroup_PG_13 = function () {
    var curMovies10 = Movies.filter(eleman => eleman.egg == "رده سنی : PG-13");

    fillWithMovies("topMovies",curMovies10);
}
ageGroup_PG = function () {
    var curMovies11 = Movies.filter(eleman => eleman.egg == "رده سنی : PG");

    fillWithMovies("topMovies",curMovies11);
}
ageGroup_C18 = function () {
    var curMovies12 = Movies.filter(eleman => eleman.egg == "رده سنی : C18");

    fillWithMovies("topMovies",curMovies12);
}
// filter movie egg grope finish
// filter movie junr 

// filter movie junr finish
// filter movie Qoulity 
qoulity_1080p = function () {
    var curMovies13 = Movies.filter(eleman => eleman.qoality == "کیفیت : 1080p BluRay");

    fillWithMovies("topMovies",curMovies13);
}
qoulity_1080Web = function () {
    var curMovies14 = Movies.filter(eleman => eleman.qoality == "کیفیت : 1080p WEB-DL");

    fillWithMovies("topMovies",curMovies14);
}
qoulity_720p = function () {
    var curMovies15 = Movies.filter(eleman => eleman.qoality == "کیفیت : 720p BluRay");

    fillWithMovies("topMovies",curMovies15);
}
qoulity_2160p = function () {
    var curMovies16 = Movies.filter(eleman => eleman.qoality == "کیفیت : 2160p 4K BluRay");

    fillWithMovies("topMovies",curMovies16);
}
// filter movie Qoulity Finish
// filter movie Canal
canal_fox = function () {
    var curMovies17 = Movies.filter(eleman => eleman.canal == "شبکه : FOX");

    fillWithMovies("topMovies",curMovies17);
}
canal_amc = function () {
    var curMovies18 = Movies.filter(eleman => eleman.canal == "شبکه : AMC");

    fillWithMovies("topMovies",curMovies18);
}
canal_netflix  = function () {
    var curMovies19 = Movies.filter(eleman => eleman.canal == "شبکه : Netflix");

    fillWithMovies("topMovies",curMovies19);
}
// filter movie Canal finish
// filter date movie maked and Imdb points
priFrom.oninput = function(){
    priFromOut.innerHTML = this.value;
    filterData();
}
priFrom2.oninput = function(){
    priFromOut2.innerHTML = this.value;
    filterData2();
}
function filterData() {
   let filtered = Movies.filter(eleman => eleman.dateMovieMaked <= priFrom.value);
   fillWithMovies("topMovies",filtered);
}
function filterData2() {
    let filtered2 = Movies.filter(eleman => eleman.point <= priFrom2.value);
    fillWithMovies("topMovies",filtered2);
}
// filter date movie maked and Imdb points finish
// Digimovies light mode
digiMode = 0;
function changeMode(){
    if(digiMode == 0){ 
        page.className = "light";
        page.style.background = "#f2f2f2";
        digiLogoImg.src = "digiMoviesImg/mainLogoDark.png";
        digiMode = 1;
        }
        else if(digiMode == 1){ 
        page.className = "";
        page.style.background = "#050505";
        digiLogoImg.src = "digiMoviesImg/mainLogo.png";
        digiMode = 0;
        }
}
// Digimovies light mode end
// upBotton for went to first part of the site
window.onscroll = function (){
    if(window.pageYOffset > 400){
        header.className = "scroll";
        upBotton.style.opacity = 1;
    }
    else{
        header.className = "";
		upBotton.style.opacity = 0;
    }
}
// upBotton for went to first part of the site end
