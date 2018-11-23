import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import LandingPage from '../LandingPage/landing-page';
import SearchPage from '../SearchPage/search-page';
import ResourcePage from '../ResourcePage/resource-page';
import ProfilePage from '../ProfilePage/profile-page';
import FormPage from '../FormPage/form-page';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <main role="main">
          <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/search' component={SearchPage} />
              <Route exact path='/resource' component={ResourcePage} />
              <Route exact path='/profile' component={ProfilePage} />
              <Route path='/form' component={FormPage} />
            </Switch>
          </main>
          <Footer />
      </div>
    );
  }
}

export default App;
