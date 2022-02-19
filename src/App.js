import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Bjørns/components/Header/Header';
import HomgePage from './components/Bjørns/Pages/Homepage/HomgePage';
import ShopPage from './components/Bjørns/Pages/ShopPage/ShopPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Route exact path={`/`} component={HomgePage} />
          <Route path={`/shop`} component={ShopPage} />
        </main>
      </div>
    </Router>
  );
};

export default App;
