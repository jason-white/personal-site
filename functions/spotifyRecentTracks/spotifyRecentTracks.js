const fetch = require('node-fetch');
const btoa = require("@node-fetch/btoa-lite");
const clientId = JSON.stringify(process.env.SPOTIFY_CLIENT_ID);
const clientSecret = JSON.stringify(process.env.SPOTIFY_CLIENT_SECRET);
console.log(clientId);
console.log(clientSecret);

exports.handler = async (event, context) => {
  let result;
  try {
    result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    })

    const data = await result.json();
    console.log(data);

  // catch error
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
      data: result
    })
  }
}
