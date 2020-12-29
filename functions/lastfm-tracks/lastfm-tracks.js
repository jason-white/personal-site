const fetch = require('node-fetch')
const key = JSON.stringify(process.env.LAST_FM_KEY)

const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=qbertqbert&api_key=${key}&format=json&limit=5`

const handler = async function () {
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ track: data.recenttracks.track[0].artist['#text'] })
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
