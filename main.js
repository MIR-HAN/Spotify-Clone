import API from "./scripts/api.js";
import UI from "./scripts/ui.js";
const api = new API();
const ui = new UI();

//eventlisteners
document.addEventListener("DOMContentLoaded", async () => {
  //rendering loading gif
  ui.renderLoader();
  //api request
  await api.getPopular();
  //rendering data
  ui.renderCards(api.songs);

});

//form listeners
ui.form.addEventListener("submit", async (event) => {
  //prevent default page refreshing
  event.preventDefault();
  const query = event.target[0].value;
  //requires
  if (!query.trim()) return alert("Write a Name");
  //render loading
  ui.renderLoader();
  //uptading title
  ui.changeTitle(' Results' + ' For' + ' ' + query);
  //searching songs
  await api.searchMusic(query);
  //rendering songs
  ui.renderCards(api.songs);

});

//cards button listener

ui.list.addEventListener('click', (e) => {

  if (e.target.id === "play-btn") {

    const song = e.target.closest(".card").dataset;
    //rendering play song
    ui.renderPlayingInfo(song);

    const photoElement = document.getElementById('photo')
    const audioElement = document.getElementById('myAudio')
    
    audioElement.addEventListener('pause', () => {
      if (photoElement) {
        photoElement.classList.remove('animate')
      }
    });
    audioElement.addEventListener('play', () => {
      if (photoElement) {
        photoElement.classList.add('animate')
      }
    });


  }


})
