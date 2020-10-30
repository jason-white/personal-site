exports.handler = async function (event, context) {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method not allowed.'
    }
  }
  try {
    const returnObj = { statusCode: 200, body: 'derp.' }
    console.log('Success.')
    return returnObj
  } catch (error) {
    console.error(error)
    return { statusCode: 500, body: 'Error' }
  }
}
