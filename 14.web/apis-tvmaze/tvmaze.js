/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */

async function searchShows(query) {
  // TODO: Make an ajax request to the searchShows api.  Remove hard coded data.
  const searchData = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
  
  let ourShowArr = [];
  const ourShows = searchData.data;
  for (let show of ourShows){
    
    //CHECK IF IMAGE EXISTS FOR SHOW, OTHERWISE USE PLACEHOLDER IMG
    let ourImage = "";
    if (show.show.image !== null){
      ourImage = show.show.image.original;
    }
    else{
      ourImage = "https://tinyurl.com/tv-missing";
    }
    
    let ourObj = {
      id: show.show.id,
      name: show.show.name,
      summary: show.show.summary,
      image: ourImage
    }
    ourShowArr.push(ourObj);
  }

  return ourShowArr;
}



/** Populate shows list:
 *     - given list of shows, add shows to DOM
 * <img class="card-img-top" src="${show.image}">
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div id = "showCard" class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
         <img class="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
           </div>
         </div>
         <button data-show-id="${show.id}" class="epi-btn">Get Episodes</button>
       </div>
      `);
    $showsList.append($item);
  } 
}

//POPULATE AND DISPLAY EPISODE LIST FROM TVMOVIE API ON DOM
function populateEpisodes(episodes) {
  const $episodeList = $("#episodes-list");
  $episodeList.empty();

  for (let episode of episodes) {
    let $item = $(
      `<li>
        ${episode.name}, season: ${episode.season}, episode: ${episode.number}
      </li>`
    );
    $episodeList.append($item);
    $("#episodes-area").show();
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);
  populateShows(shows);

});

/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  // TODO: get episodes from tvmaze
  //       you can get this by making GET request to
  //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes

    const episodeData = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);


  // TODO: return array-of-episode-info, as described in docstring above

  let ourEpisodeArr = [];
  const ourEpisodes = episodeData.data;
  for (let episode of ourEpisodes){
    
    let ourObj = {
      id: episode.id,
      name: episode.name,
      season: episode.season,
      number: episode.number
    }
    ourEpisodeArr.push(ourObj);
  }

  return ourEpisodeArr;
}

//EVENT LISTENER CHECKING FOR EPISODE BUTTON CREATION TO POPULATE EPISODE LIST
document.addEventListener('click', async function(e){
  if(e.target.classList.contains('epi-btn')){
    let showId = e.target.dataset.showId;
    let episodes = await getEpisodes(showId);
    populateEpisodes(episodes);
  }
});



//Make search criterion and validation
