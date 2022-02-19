import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Bjørns/components/Header/Header';
import HomgePage from './components/Bjørns/Pages/Homepage/HomgePage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Route exact path={`/`} component={HomgePage} />
          <Route path={`/shop`} />
        </main>
      </div>
    </Router>
  );
};

export default App;
