import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
class TripsReddit extends Component {
      componentDidMount = () => {
            this.getReddit()

      }
      state = {
            res: []

      }


      getAssesAToken = async () => {


            let res = await fetch("https://www.reddit.com/api/v1/access_token", {
                  body: "grant_type=password&username=Ghostly-44&password=Wiseflame44",
                  headers: {
                        Authorization: "Basic TFVVNlJ4ejVUZzJVYWc6TWl5bFF3N1M5OHlkZEVzQlNtSWc4Rk5vNkdJ",
                        "Content-Type": "application/x-www-form-urlencoded"
                  },
                  method: "POST"
            })
            let key = await res.json()
            // console.log(key)
            return key.access_token

      }


      getReddit = async () => {

            //let key = await this.getAssesAToken();
            //console.log(key)
            fetch("https://oauth.reddit.com/r/motorcyclesroadtrip/hot?limit=5", {
                  headers: { Authorization: `bearer ${await this.getAssesAToken()}` }

            }).then(res => res.json()).then(res => {
                  console.log(res);
                  this.setState({
                        res: res.data.children

                  })
            })

      }

      displayterms = () => {
            return (
                  this.state.res.map((count,i) => {
                        console.log(count)

                        return (

                              <MDBCarouselItem itemId={i+1} className='redditContent'>
                                    <MDBView>
                                          <img
                                                className='redditBodyImg'
                                                src={count.data.url}
                                                alt={count.data.author}
                                          />
                                          <MDBMask overlay="black-light" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                          <h3 className="h3-responsive"><a href='https://www.reddit.com/r/Harley/' className='redditHeaderUsername'>{count.data.author}</a></h3>
                                          <p>{count.data.title}</p>
                                    </MDBCarouselCaption>
                              </MDBCarouselItem>

                              

                        )
                        
                  })
            )
      }

      render() {
            // this.displayterms()
            console.log(this)
            return (

                  <div className='redditDivGrandpa'>
                        <MDBContainer className='redditContent'>
                              <MDBCarousel
                                    activeItem={3}
                                    length={this.state.res.length}
                                    showControls={true}
                                    showIndicators={true}
                                    className="z-depth-1"
                              >
                                    <MDBCarouselInner>
                                          {this.displayterms()}
                                    </MDBCarouselInner>
                              </MDBCarousel>
                        </MDBContainer>
 
                  </div>
            );
      }
}

export default TripsReddit;