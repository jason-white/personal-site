const fetch = require('node-fetch')
const key = process.env.lastfm

const ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=qbertqbert&api_key=${key}&format=json&limit=5`
let lastfm = null

exports.handler = async (event, context) => {
  let response
  try {
    response = await fetch(ENDPOINT, { headers: {'Accept': 'application/json'} })
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
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
}
