const formattedReturn = require('./helpers/formattedReturn')
const getTracks = require('./helpers/getTracks')

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    await getTracks(event)
  } else {
    return formattedReturn(405, {})
  }
}
