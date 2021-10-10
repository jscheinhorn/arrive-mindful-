import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css'
import './css/flaticon.css';
import './css/icomoon.css';
import {
  Navbar,
  Footer,
  Home,
  Gallery,
  About,
  Classes,
  Schedule,
  Blog,
  Contact,
  Video,
  Audio,
  BlogSingle,
  MentalHealth,
  YogaPhilosophy,
  YogaUN,
  Resources,
} from './components';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery banner={true} />
        </Route>
        <Route path="/video">
          <Video banner={true} />
        </Route>
        <Route path="/audio">
          <Audio banner={true} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/classes">
          <Classes />
        </Route>
        <Route path="/schedule">
          <Schedule range="month" banner={true} />
        </Route>
        <Route path="/blog/:id">
          <BlogSingle banner={true} />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/education/mental-health">
          <MentalHealth banner={true} />
        </Route>
        <Route path="/education/yoga-philosophy">
          <YogaPhilosophy banner={true} />
        </Route>
        <Route path="/education/yoga-un">
          <YogaUN banner={true} />
        </Route>
        <Route path="/education/resources">
          <Resources banner={true} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
