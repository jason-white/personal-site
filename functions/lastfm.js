import fetch from 'node-fetch'

const ENDPOINT = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=qbertqbert&api_key=7d55acde37f9cbd0d03400d2ce01e513&format=json&limit=5'
let lastfm = null

exports.handler = async (event, context) => {
  return fetch(ENDPOINT, { headers: {'Accept': 'application/json'} })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      let tracks = data.recenttracks.track
      const list = `
        <ul class="tracks">
          ${tracks.map(track =>
            `<li class="track">
               <div class="track__art">
                 <img src="${track.image[1]['#text']}" alt="${track.name} album art">
               </div>
               <div class="track__info">
                 <span class="track__name"><a href="${track.url}" target="_blank">${track.name}</a></span><br/>
                 <span class="track__artist">by: ${track.artist['#text']}</span>
               </div>
             </li>`).join('')}
           </ul>
         `
      lastfm = list
      console.log(lastfm)
    })
}
