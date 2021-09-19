import React, { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
//import Loading from "./components/Loading";

const About = lazy(() => import("./components/about/About"));
const Projects = lazy(() => import("./components/Projects"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <Suspense fallback={<Loading />}>
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 app__main-content">
              {/* navbar */}
              <Navbar />
              <Suspense fallback={<Loading />}>
                <AnimatePresence exitBeforeEnter>
                  <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/projects" component={Projects} />
                  </Switch>
                </AnimatePresence>
              </Suspense>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
