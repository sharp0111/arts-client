import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/landing-page';
import SearchPage from '../SearchPage/search-page';
import ResourcePage from '../ResourcePage/resource-page';
import DashboardWrapper from '../Dashboard/dashboard-wrapper';
import FormPage from '../FormPage/form-page';
import Navigation from '../Navbar/navbar';
import Footer from '../Footer/footer';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      home: false
    }
  }

  setHome = () => {
    this.setState({
      home: true
    })
  }

  removeHome = () => {
    this.setState({
      home:false
    })
  }

  render() {
    return (
      <div className="App">
          <Navigation home={this.state.home}/>
          <main role="main">
          <Switch>
              <Route exact path='/' render = {(props) => <LandingPage setHome={this.setHome} removeHome={this.removeHome}/>} />
              <Route path='/search' component={SearchPage} />
              <Route path='/resource' component={ResourcePage} />
              <Route path='/dashboard' component={DashboardWrapper} />
              <Route path='/form' component={FormPage} />
            </Switch>
          </main>
      </div>
    );
  }
}

export default App;
