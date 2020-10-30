exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    message: JSON.stringify({message: 'Success'})
  }
}
