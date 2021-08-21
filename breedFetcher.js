const request = require('request');

const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`


request(`${url}`, (err, res, body) => {
  // logs error message if domain name is invalid
  if (err) {
    return console.log(`[This url is invalid], ${err}`)
  };

  const data = JSON.parse(body);
  //check object for breed description and logs it to console
  if (data[0]) {
    for (const key in data[0]) {
      if (key === 'description') {
        console.log(data[0][key]);
      }
    }
  } else {
    console.log(`Error: ${args} not found`) //logs error message if user input is not found
  }

});