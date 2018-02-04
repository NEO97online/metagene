const functions = require('firebase-functions');
const MailChimpAPI = require('mailchimp').MailChimpAPI;
const apiKey = '5805ec6df0c7c933e9314d53ab6325d5-us17';
try {
  const chimp = new MailChimpAPI(apiKey, { version: '3.0' });
} catch (error) {
  console.log(error.message);
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.sendEbook = functions.firestore
  .document('emails/{emailId}')
  .onCreate(event => {
    const data = event.data.data();
    const email = data.email;
  });