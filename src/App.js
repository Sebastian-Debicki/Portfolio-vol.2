import React from 'react';
import { Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

function App() {

  return (
    <div className="app">
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Layout>
    </div>
  );
}

export default App;
