/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Presentation from 'src/components/Presentation';
import Courses from 'src/components/Courses';
import Coureurs from 'src/components/Coureurs';
import Contact from 'src/components/Contact';
import Error404 from 'src/components/Error404';
import Footer from 'src/components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*
 * Code
 */
const App = () => (
  <Router>
    <div id="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/presentation" component={Presentation} />
        <Route path="/courses" component={Courses} />
        <Route path="/coureurs" component={Coureurs} />
        <Route path="/contact" component={Contact} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  </Router>
);


/*
 * Export default
 */
export default App;
