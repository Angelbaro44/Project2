import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Motorcycle from './pages/Motorcycle';
import Cigar from './pages/Cigar';
import Trips from './pages/Trips';

class App extends React.Component {


    render() {


      return (
        <>
          <header className='navHeader'>
            <nav className='nav'>

              <section className='navSectionHome'>
                <Link to='/'>Home</Link>
              </section>
              <section className='navSectionThreeLinks'>
                <Link to='/motorcycles'>Motorcyle</Link>
                <Link to='/cigars'>Cigar</Link>
                <Link to='/trips'>Trips</Link>
              </section>


            </nav>
          </header>

          {/* <div>   <button>  M <img src='' alt='' />   </button>   </div> */}
          <div className='daddyDiv'>

            <Switch>
              <Route exact path='/' component={(props) => <Home {...props} />} />
              <Route exact path='/motorcycles' component={(props) => <Motorcycle {...props} />} />
              <Route exact path='/cigars' component={(props) => <Cigar {...props} />} />
              <Route exact path='/trips' component={(props) => <Trips {...props} />} />
            </Switch>

          </div>
          <div></div>

          <footer><div class="footer">
            <div class="inner-footer">

              <div class="footer-items">
                <h1>Angel Baro </h1>
                <p>If your reading this it's too late. She took the kids, i lost the car, and im late on my morgage. I can't keep living like this... tomorrow at 3PM i will hang out at the mall to try and lift my spirits. Wish me luck, Good Bye. </p>
              </div>

              <div class="footer-items">
                <h3>Quick Links</h3>
                <div class="border1"></div>
                <ul>
                  <a href="index.html"><li>Home</li></a>
                  <a href="SpaceShooter.html"><li>Desert Defense</li></a>
                  <a href="pong.html"><li>Village Protector</li></a>
                  <a href="rockpaper.html"><li>Pokemon Championship Master</li></a>
                </ul>
              </div>

              <div class="footer-items">
                <h3>Skills</h3>
                <div class="border1"></div>
                <ul>
                  <a href="#"><li>HTML</li></a>
                  <a href="#"><li>CSS</li></a>
                  <a href="#"><li>JavaScript</li></a>
                  <a href="#"><li>BootStrap</li></a>
                </ul>
              </div>

              <div class="footer-items">
                <h3>Contact us</h3>
                <div class="border1"></div>
                <ul>
                  <li><i class="fa fa-map-marker" aria-hidden="true"></i>Miami, Florida</li>
                  <li><i class="fa fa-phone" aria-hidden="true"></i>786-445-6192</li>
                  <li><i class="fa fa-envelope" aria-hidden="true"></i>angelbaro44@icloud.com</li>
                </ul>

                <div class="social-media">
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-google-plus-square"></i></a>
                </div>
              </div>
            </div>

            <div class="footer-bottom">
              Copyright &copy; Angel Baro 2020.
    </div>
          </div></footer>
        </>













      );
    }
  }

  export default App;
