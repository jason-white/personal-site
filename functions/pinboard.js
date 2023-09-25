import fetch from "node-fetch";

exports.handler = async (event, context) => {
  try {
    // Replace 'your_username' and 'your_api_token' with your Pinboard.in username and API token.
    const apiToken = process.env.PINBOARD_TOKEN;

    // Define the URL for fetching recent bookmarks in JSON format
    const apiUrl = `https://api.pinboard.in/v1/posts/recent?format=json&count=6&auth_token=${apiToken}`;

    // Send a GET request to the Pinboard API using node-fetch
    const response = await fetch(apiUrl, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};

