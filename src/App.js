import React, { useState, useEffect, useContext } from 'react';
import './app.scss';
import Home from './components/Home';
import Detail from './components/Detail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { MainContext } from './context/MainContext';

function App() {

  const [loading,setLoading] = useState(0)

  const datas = {
    loading,
    setLoading
  }

  return (
    <div>
      <Router>
          <Switch>
              <MainContext.Provider value={datas}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/show/:id" component={Detail}/>
            </MainContext.Provider>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
