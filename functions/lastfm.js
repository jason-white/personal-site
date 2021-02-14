const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=qbertqbert&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=5`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((res) => res.json())
    .then(json => {
      console.log(json);
    })
    .then(json => {
      return {
        statusCode: 200,
        body: JSON.stringify(json),
      }
    });
}
