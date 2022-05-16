/*const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  // const url = `https://api.discogs.com/users/qbrt/collection/releases/5702107/`;
  const img = `https://api.discogs.com/image/R-5702107-689760.jpg`

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Discogs key="${process.env.DISCOGS_API_KEY}", secret="${process.env.DISCOGS_SECRET}"`,
    }
  }

  return fetch(img, {
    options
  }).then((res) => res.json())
    .then(json => {
      return {
        statusCode: 200,
        //body: JSON.stringify(json.images[0]),
        body: `
          <img src="${img}" />
        `
      }
    }).catch((err) => {
      console.error(err)
    });
}*/
