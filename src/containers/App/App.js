import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/landing-page';
import SearchPage from '../SearchPage/search-page';
import ResourcePage from '../ResourcePage/resource-page';
import ProfilePage from '../ProfilePage/profile-page';
import FormPage from '../FormPage/form-page';
import Navigation from '../Navbar/navbar';
import Footer from '../Footer/footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Navigation />
          <main role="main">
          <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/search' component={SearchPage} />
              <Route path='/resource' component={ResourcePage} />
              <Route path='/profile' component={ProfilePage} />
              <Route path='/form' component={FormPage} />
            </Switch>
          </main>
      </div>
    );
  }
}

export default App;
