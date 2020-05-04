import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
      "mdbreact";

class Home extends Component {
      render() {
            return (

                  <div>
                        <div className='redditDivGrandpa'>
                              <MDBContainer className='redditContent'>
                                    <MDBCarousel
                                          activeItem={1}
                                          length={3}
                                          showControls={true}
                                          showIndicators={true}
                                          className="z-depth-1"
                                          className='redditContent'
                                    >
                                          <MDBCarouselInner>
                                                <MDBCarouselItem itemId={1} >
                                                      <MDBView>
                                                            <img
                                                                  className='redditBodyImg'
                                                                  src=''
                                                                  alt=''
                                                            />

                                                      </MDBView>
                                                      <MDBCarouselCaption>
                                                            <h3 className="h3-responsive"><a href='' className='redditHeaderUsername'></a></h3>
                                                            <p>hello</p>
                                                      </MDBCarouselCaption>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem itemId={2} >
                                                      <MDBView>
                                                            <img
                                                                  className='redditBodyImg'
                                                                  src=''
                                                                  alt=''
                                                            />

                                                      </MDBView>
                                                      <MDBCarouselCaption>
                                                            <h3 className="h3-responsive"><a href='' className='redditHeaderUsername'></a></h3>
                                                            <p>hello</p>
                                                      </MDBCarouselCaption>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem itemId={3} >
                                                      <MDBView>
                                                            <img
                                                                  className='redditBodyImg'
                                                                  src=''
                                                                  alt=''
                                                            />

                                                      </MDBView>
                                                      <MDBCarouselCaption>
                                                            <h3 className="h3-responsive"><a href='' className='redditHeaderUsername'></a></h3>
                                                            <p>hello</p>
                                                      </MDBCarouselCaption>
                                                </MDBCarouselItem>
                                          </MDBCarouselInner>
                                    </MDBCarousel>
                              </MDBContainer>

                        </div>


                        <div className='homeButtonGroup'>
                              <div className='homeButtonGroupOfFirstTwoBottons'>
                                    <div>   <button className='homeButtonCycle'>  Motorcycles    </button>   </div>
                                    <div>   <button className='homeButtonCigar'>  Cigars    </button>   </div>
                              </div>
                              <div>   <button className='homeButtonTrips'>  Trips    </button>   </div>

                        </div>
                  </div>
            );
      }
}


export default Home;