// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
const { LAST_FM_KEY } = process.env
const ENDPOINT$ = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=qbertqbert&api_key=${LAST_FM_KEY}&format=json&limit=5`

const fetch = require('node-fetch')
const handler = async function (event, context) {
  if (!context.clientContext && !context.clientContext.identity) {
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({
        msg: 'No identity instance detected. Did you enable it?'
      })
    }
  }
  const { identity, user } = context.clientContext
  try {
    const response = await fetch(ENDPOINT$)
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ identity, user, msg: data.value })
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message })
    }
  }
}

module.exports = { handler }

/*
const fetch = require('node-fetch')
const { LAST_FM_KEY } = process.env

const ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=qbertqbert&api_key=${LAST_FM_KEY}&format=json&limit=5`

let lastfm = document.getElementById('#lastfm')
const handler = async (event, context) => {
  let response
  try {
    response = await fetch(ENDPOINT, { headers: {'Accept': 'application/json'} })
      .then((response) => {
        console.log(JSON.stringify(response))
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

module.exports = { handler }
*/
