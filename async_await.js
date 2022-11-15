const { async } = require("rxjs");

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says Hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing Response");
    resolve(`Extra information ${response}`);
  });
}

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response Recieved");
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response Received");
    const processResponse = await processRequest(response);
    console.log(processResponse);
  } catch (err) {
    console.log(err);
  }
}
doWork();
