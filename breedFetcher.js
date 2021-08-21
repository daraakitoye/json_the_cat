const request = require('request');



const fetchBreedDescription = (breedName, callback) => {


  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`


  request(`${url}`, (err, res, body) => {
    // logs error message if domain name is invalid
    if (err) {
      callback(`[This url is invalid], ${err}`, null)
    };

    const data = JSON.parse(body);
    //check object for breed description and logs it to console
    if (data[0]) {
      for (const key in data[0]) {
        if (key === 'description') {
          callback(null, data[0][key]);
        }
      }
    } else {
      callback(`${breedName} not found`, null) //logs error message if user input is not found
    }

  });
};



module.exports = { fetchBreedDescription }
