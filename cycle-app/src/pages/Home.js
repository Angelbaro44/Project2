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

                        <div>
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
                                                            <div class="text">Hello World</div>
                                                      </div>
                                                      </div>
                                                <div class="container1">
                                                      <img className='homeButtonCigar' src="/images/cigars.jpg" alt="Avatar" class="image"/>
                                                            <div class="overlay">
                                                                  <div class="text">Hello World</div>
                                                            </div>
                                                                                    </div>
                                                </div>
                                                <div class="container1">
                                                      <img src="/images/trips.jpg" alt="Avatar" class="image2"/>
                                                            <div class="overlay">
                                                                  <div class="text">Hello World</div>
                                                            </div>
                                                                                    </div>

                                                </div>
                                          </div>
                  </Switch>
            );
      }
}


export default Home;