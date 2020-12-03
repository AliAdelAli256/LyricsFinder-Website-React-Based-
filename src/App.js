import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Index from './components/layout/index';
import Lyrics from './components/tracks/Lyrics';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className = "container">
            <Switch>
              <Route path = "/lyrics/track/:id" component = {Lyrics} />
              <Route path = "/" component = {Index} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
