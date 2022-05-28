// import React from "react";
// import ReactDOM from 'react-dom'
// import { createStore } from "redux"
// import {Provider, connect} from "react-redux"




// function reducer(){
//   return {
//       user: {
//         name: 'Dustin'
//       },
//       movies: [
//         'Star Wars',
//         'Lord of the Rings',
//         'Harry Potter'
//       ],
//       todoList: [
//         { task: 'Learn Redux', id: 0, completed: false }
//       ],
//       moviesToWatch: 13
//     }
  
// }
// const store = createStore(reducer)

// function App(){
//   return (
//     <div>
//       <h1>TEST</h1>
//     </div>
//   );
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <Provider store={store}>
//       <App />
//   </Provider>,
//   rootElement
//   );

const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.setApiKey('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');
// emailApi
sgMail.setApiKey('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');
const msg = {
  to: 'yaqin.qu@gmail.com',
  from: 'mingjun.geng@gmail.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();