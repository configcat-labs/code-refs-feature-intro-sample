// Import package
const configcat = require("configcat-node");

const suggestRandomMovieToUser = require('./functions');

// Create the ConfigCat client with your SDK Key
const configCatClient = configcat.getClient("YOUR-CONFIGCAT-SDK");


async function greetUser(firstName, lastName, title) {
  const formallygreetuser = await configCatClient.getValueAsync("formallygreetuser", false);
  if (formallygreetuser) {
    return `Hello ${title} ${lastName}`;
  } else {
    return `Hey ${firstName}`;
  }
}

async function main() {
  const greetingMessage = await greetUser('Chavez', 'Harris', 'Mr.');
  const randomMovie = await suggestRandomMovieToUser(configCatClient);
  console.log(`${greetingMessage}. Your random movie pick: ${randomMovie}`);
}

main();