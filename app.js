"use strict";

function parseToJSON(data) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON
  // return JSON.parse(data);
  try {
    //Attempt this code. If an error comes up, send it to the catch block
    return JSON.parse(data);
  } catch (err) {
    //We take the caught error, and print it out
    console.error(err);
    return null;
  }
}

let failData = "<h1>Hello World!</h1>";

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
