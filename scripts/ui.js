

//ui doms

export default class UI {
  constructor() {
    this.list = document.querySelector('#list');
    this.form = document.querySelector("#search-form");
    this.title = document.querySelector("#title");
    this.playArea = document.querySelector(".play-area");
    this.checkbox = document.querySelector(".check-box");

  }

  renderLoader() {
    this.list.innerHTML = `
        <span class="loader"></span>
        `;
  }

  renderCards(songs) {
    //removing loading gif
    this.list.innerHTML = "";

    if(songs) {
      songs.forEach((song) => {

        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
              <figure>
              <img 
                src="${song.images.background}"
              />
              <div id="play">
                <i id="play-btn" class="bi bi-play-fill"></i>
              </div>
            </figure>
  
            <h4>${song.title}</h4>
            <p>${song.subtitle}</p>
              
              `;
        //adding data to cards
        div.dataset.title = song.title;
        div.dataset.photo = song.images.background;
        div.dataset.url = song.hub.actions[1].uri;
        this.list.appendChild(div);
    
      })

    } else{
      this.list.innerHTML = "no song is available";

    }



    

  }

  changeTitle(text) {
    this.title.innerText = text;
  }

  renderPlayingInfo(song) {
    this.playArea.innerHTML = `
<div>
      <img id="photo"
      class="animate"
       src="${song.photo}" alt="">
    </div>

    <div>
      <p>playing</p>
      <h3>${song.title}</h3>
    </div>

    <audio autoplay id="myAudio" src="${song.url}" controls></audio>
`
  }


}
