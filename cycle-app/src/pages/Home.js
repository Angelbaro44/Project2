import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
      "mdbreact";
import { Link, Switch, Route } from 'react-router-dom';
import Motorcycle from './Motorcycle';
import Cigar from './Cigar';
import Trips from './Trips';

class Home extends Component {
      render() {
            return (
                  <Switch>

                        <Route exact path='/motorcycles' component={(props) => <Motorcycle {...props} />} />
                        <Route exact path='/cigars' component={(props) => <Cigar {...props} />} />
                        <Route exact path='/trips' component={(props) => <Trips {...props} />} />

                        <div className='redditGreatDivGrandpa'>
                              <div className='redditDivGrandpa'>
                                    <MDBContainer className='homeSliderContent1'>
                                          <MDBCarousel
                                                activeItem={1}
                                                length={3}
                                                showControls={true}
                                                showIndicators={true}
                                                className="z-depth-1"
                                                className='homeSliderContent2'
                                          >
                                                <MDBCarouselInner>
                                                      <MDBCarouselItem itemId={2} >
                                                            <MDBView>
                                                                  <video
                                                                        autoPlay muted loop
                                                                        className='redditBodyImg'
                                                                        src='/images/cigarVideo.mp4'
                                                                        alt='vid'
                                                                  />

                                                            </MDBView>
                                                            <MDBCarouselCaption>
                                                                  <h3 className="h3-responsive"><Link className='navLinks' to='/cigars'>Cigar</Link></h3>
                                                                  <p>hello</p>
                                                            </MDBCarouselCaption>
                                                      </MDBCarouselItem>
                                                      <MDBCarouselItem itemId={1} >
                                                            <MDBView>
                                                                  <video
                                                                        autoPlay muted loop
                                                                        className='redditBodyImg'
                                                                        src='/images/cycleVideo.mp4'
                                                                        alt='vid'
                                                                  />

                                                            </MDBView>
                                                            <MDBCarouselCaption>
                                                                  <h3 className="h3-responsive"><Link className='navLinks' to='/motorcycles'>Motorcyle</Link></h3>
                                                                  <p>hello</p>
                                                            </MDBCarouselCaption>
                                                      </MDBCarouselItem>
                                                      <MDBCarouselItem itemId={3} >
                                                            <MDBView>
                                                                  <video
                                                                        muted loop autoPlay
                                                                        className='redditBodyImg'
                                                                        src='/images/tripVideo.mp4'
                                                                        alt='vid'
                                                                  />

                                                            </MDBView>
                                                            <MDBCarouselCaption>
                                                                  <h3 className="h3-responsive"><Link className='navLinks' to='/trips'>Trips</Link></h3>
                                                                  <p>hello</p>
                                                            </MDBCarouselCaption>
                                                      </MDBCarouselItem>
                                                </MDBCarouselInner>
                                          </MDBCarousel>
                                    </MDBContainer>

                              </div>


                              <div className='homeButtonGroup'>
                                    <div className='homeButtonGroupOfFirstTwoBottons'>
                                          <div class="container1">
                                                <img className='homeButtonCigar' src="/images/cycles.jpg" alt="Avatar" class="image"/>
                                                      <div class="overlay">
                                                            <div class="text">
                                                                  <h3><Link className='navLinks' to='/motorcycles'>Motorcycles</Link></h3>
                                                                  <img className='buttonIcons' src='/images/cycle-icon.png' alt=''/>
                                                                  <p>Motorcycles are cool. Period. They tell the world, “I live my life large! 
                                                                        I laugh at fear, I am adventurous!” Everyone who sees anyone on any 
                                                                        bike thinks that person is cool. This is very true for kids, and slightly 
                                                                        less true for in-laws—but even they are still secretly impressed.

                                                                        Unless you ride in sandals or flip flops, or without a helmet – then you look silly.</p>
                                                                  </div>
                                                      </div>
                                                      </div>
                                                <div class="container1">
                                                      <img className='homeButtonCigar' src="/images/cigars.jpg" alt="Avatar" class="image"/>
                                                            <div class="overlay">
                                                            <div class="text">
                                                                  <h3><Link className='navLinks' to='/cigars'>Cigar</Link></h3>
                                                                  <img className='buttonIcons' src='/images/cigar-icon.png' alt=''/>
                                                                  <p>Cigars represent exquisite craftsmanship. Premium cigars are hand-rolled,
                                                                         in spite of the advent of modern machinery. With cigars you have a 
                                                                         chance to escape from the world of mass-produced industry and enjoy
                                                                          a personal touch.</p>
                                                                  </div>                                                            </div>
                                                                                    </div>
                                                </div>
                                                <br/>
                                                <br/>
                                                <div class="container2">
                                                      <img src="/images/trips.jpg" alt="Avatar" class="image2"/>
                                                            <div class="overlay">
                                                            <div class="text">
                                                                  <h3><Link className='navLinks' to='/Trips'>Travel</Link></h3>
                                                                  <img className='buttonIcons' src='/images/trip-icon.png' alt=''/>
                                                                  <p>
                                                                        No matter where you venture or how far you ride, 
                                                                        when you’re on your motorcycle, you never feel like 
                                                                        you’re commuting. You feel like you’re traveling. 
                                                                        Motorcycling is 
                                                                        never about getting from A to B. Even if you’re going 
                                                                        on a long weekend ride, you get the sense that you’re 
                                                                        exploring, venturing out into the world, and discovering 
                                                                        new things. And when you travel to another state or country,
                                                                         you’re taking things to a whole new level.
                                                                         </p>
                                                                  </div>                                                            </div>
                                                                                    </div>

                                                </div>
                                          </div>
                  </Switch>
            );
      }
}


export default Home;