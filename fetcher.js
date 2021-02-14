const fs = require('fs');
const request = require('request');
const input = process.argv.slice(2);
const url = input[0];
const destination = input[1];

request(url, (error, response, body) => {
  if (error) {
    return error;
  }
  let file = fs.createWriteStream(destination);
  let bytes = 0;
  fs.writeFile(destination, body, (err) => {
    if (err) {
      console.log(`err`);
    } else {
      console.log(`The file was written`);
    }
  });
  console.log(body);
  console.log(`Downloaded and saved ${bytes} bytes to ${destination}`);
});