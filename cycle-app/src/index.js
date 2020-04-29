import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import snoowrap from 'snoowrap';
// const otherRequester = new snoowrap({
//   userAgent: 'put your user-agent string here',
//   clientId: 'put your client id here',
//   clientSecret: 'put your client secret here',
//   username: 'Ghosty-44',
//   password: ''
// });
// r.getHot().map(post => post.title).then(x => console.log('hi', x));


fetch("https://www.reddit.com/api/v1/access_token", {
  body: "grant_type=password&username=Ghostly-44&password=Wiseflame44",
  headers: {
    Authorization: "Basic TFVVNlJ4ejVUZzJVYWc6TWl5bFF3N1M5OHlkZEVzQlNtSWc4Rk5vNkdJ",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
}).then(res=>res.json()).then(res => {console.log(res)
  fetch("https://oauth.reddit.com/r/Harley/top", {
    headers: {
      Authorization: `bearer ${res.access_token}`
    }
  }).then(res=>res.json()).then(res => {console.log(res)})
})

ReactDOM.render(<Router> <App /> </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
