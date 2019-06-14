const request = require('request');

let result = [];
const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'aa15n1sprsnu0gocv3niagyrvyfuks',
  },
};
request.get(options, (error, response, body) => {
  result = JSON.parse(body);
  result.data.forEach((gameList) => {
    console.log(`${gameList.id} ${gameList.name}`);
  });
});
