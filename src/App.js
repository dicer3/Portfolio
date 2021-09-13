import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import About from './components/about/About';
import Projects from './components/Projects';
import { AnimatePresence } from 'framer-motion'

function App() {

  const location = useLocation();
  return (

    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">

            <Sidebar />

          </div>
          <div className="col-lg-9 app__main-content">
            {/* navbar */}
            <Navbar />

            <AnimatePresence exitBeforeEnter>
              <Switch >
                <Route exact path="/" component={About} />
                <Route path="/projects" component={Projects} />
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div >

  );
}

export default App;