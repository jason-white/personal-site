const key = JSON.stringify(process.env.LAST_FM_KEY)
const formattedReturn = require('./formattedReturn')

const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=qbertqbert&api_key=${key}&format=json&limit=5&cb=http://jasonwhite.us`

// let lastfm = document.getElementById('lastfm')

module.exports = async (event) => {
  try {
    const tracks = await fetch(url)
      .then(response => {
        response.track.map((track) => ({
          artist: track.artist['#text'],
          album: track.album['#text'],
          art: track.image['#text'],
          title: track.name,
          url: track.url
        }))
        return tracks.json
      })
  } catch (err) {
    console.error(err)
    return formattedReturn(500, {})
  }
}
