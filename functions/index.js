'use strict';
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const contactEmail = 'johnny@metagenehealth.com';

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: require('./auth')
})

exports.submitContactForm = functions.firestore
  .document('contactForms/{contactForm}')
  .onCreate(event => {
    const data = event.data.data();
    const firstName = data.firstName;
    const email = data.email;
    const message = data.message;
    const mailOptions = {
      from: '"Metagene Notifications" <metagenenotifications@gmail.com>',
      to: contactEmail,
      subject: 'New contact form submission on Metagene',
      text: `A user has submitted a new contact form!\n\nFirst Name: ${firstName}\nEmail: ${email}\nMessage: ${message}`
    };
    return transport.sendMail(mailOptions)
      .then(_ => console.log(`Successfully sent email to ${contactEmail}`))
      .catch(err => console.error(`There was an error while sending the email:`, err));
  });