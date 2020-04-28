import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Motorcycle from './Motorcycle';
import Cigar from './Cigar';
import Trips from './Trips';

function App() {
  return (
    <>
      <header>
        <nav>

          <section>
            <Link to='/'>Home</Link>
          </section>
          <section>
            <Link to='/motorcycles'>Motorcyle</Link>
            <Link to='/cigars'>Cigar</Link>
            <Link to='/trips'>Trips</Link>
          </section>


        </nav>
      </header>

      {/* <div>   <button>  M <img src='' alt='' />   </button>   </div> */}
      <div>
        
          <Switch>
            <Route exact path='/' component={(props) => <Home {...props} />}/> 
            <Route exact path='/motorcycles' component={(props) => <Motorcycle {...props} />}/> 
            <Route exact path='/cigars' component={(props) => <Cigar {...props} />}/> 
            <Route exact path='/trips' component={(props) => <Trips {...props} />}/> 
          </Switch>
        
      </div>
      <div></div>

      <footer></footer>
    </>













  );
}

export default App;
