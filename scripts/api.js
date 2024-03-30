// API header
const options = {
    headers: {
        'X-RapidAPI-Key': '73af879aa8msh8cb4f1c47862824p138016jsnf1e51bfadcff',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
};

// API request
export default class API {

    constructor() {
        this.songs = [];
    }

    async getPopular() {
        const res = await fetch(
            "https://deezerdevs-deezer.p.rapidapi.com/infos?listId=ip-country-chart-NL",
            options
        );
        const data = await res.json();

       this.songs =  data.tracks;

    }

    // searching songs
    async searchMusic(query) {

        const res = await fetch(
            `https://shazam.p.rapidapi.com/search?term=${query}`, options
            );
        const data = await res.json();
    // changing data format
       const formatted = data.tracks.hits.map((song)=>{

         return song.track;
        })
       
        this.songs = formatted;
    };
}





