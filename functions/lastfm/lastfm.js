const fetch = require('node-fetch')
const key = JSON.stringify(process.env.LAST_FM_KEY)

const ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=qbertqbert&api_key=${key}&format=json&limit=5&cb=http://jasonwhite.us`

// let lastfm = document.getElementById('lastfm')

const handler = async (event, context) => {
  let response
  try {
    response = await fetch(ENDPOINT)
      .then((response) => {
        console.log(response)
        return response.json()
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
