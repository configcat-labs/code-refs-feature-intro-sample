const listOfMovies = [
  "Titanic",
  "Ant-Man and The Wasp",
  "Thor",
  "We Have a Ghost",
  "The Whale"
]

async function suggestRandomMovieToUser(configCatClient) {
  const suggestrandommovie = await configCatClient.getValueAsync("ADD-YOUR-FF-KEY-HERE", false);

  if (suggestrandommovie) {
    return listOfMovies[Math.floor(Math.random()*listOfMovies.length)];
  } else {
    return 'Your random movie pick is not available today.'
  }
}

module.exports = suggestRandomMovieToUser;