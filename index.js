
// Path to the client connection file start
require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient.js")
// Path to the client connection file end
// Sending a post with a message to your Twitter account start
const tweet = async () => {
  try {
    await twitterClient.v2.tweet("Is works");
  } catch (e) {
    console.log(e)
  }
}

tweet();
// Sending a post with a message to your Twitter account end


