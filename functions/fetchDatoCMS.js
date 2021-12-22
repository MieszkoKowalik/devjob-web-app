const axios = require("axios");

const handler = async (event) => {
  const API_KEY = process.env.REACT_APP_TOKEN;

  try {
    const { data } = await axios.post(
      "https://graphql.datocms.com/",

      event.body,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
