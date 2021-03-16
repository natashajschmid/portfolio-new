import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar';
import Main from './Main';
import About from './About';
import Resume from './Resume';
import Proxxmu from './projects/Proxxmu';
import EqualiCare from './projects/EqualiCare';
import RecoveryCafe from './projects/RecoveryCafe';
import ExtraWorks from './projects/ExtraWorks';
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Container fluid>
          <NavBar />

          <Switch>
            <Route
              exact path="/"
              component={Main}
            />
            <Route
              exact path="/about"
              component={About}
            />
            <Route
              exact path="/resume"
              component={Resume}
            />
            <Route 
              path="/proxxmu"
              component={Proxxmu}
            />
            <Route 
              path="/equalicare"
              component={EqualiCare}
            />
            <Route 
              path="/recovery-cafe"
              component={RecoveryCafe}
            />
            <Route
              path="/extra-works"
              component={ExtraWorks}
            />
          </Switch>
          
          <Footer />
        </Container>
      </div>
    </BrowserRouter>

  );
}

export default App;