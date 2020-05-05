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
            return key.access_token

      }


      getReddit = async () => {

            //let key = await this.getAssesAToken();
            //console.log(key)
            fetch("https://oauth.reddit.com/r/motorcyclesroadtrip/hot/?limit=20", {
                  headers: { Authorization: `bearer ${await this.getAssesAToken()}` }

            }).then(res => res.json()).then(res => {
                  console.log(res);

                  let filtteredChildren = res.data.children.filter( each =>  each.data.preview?.images[0].source.width >= each.data.preview?.images[0].source.height)
                  // console.log(count.data.preview.images[0].source.width)
                  // console.log(count.data.preview.images[0].source.height)
                  this.setState({
                        res: filtteredChildren

                  })
            })
      }









      displayterms = () => {
            return (
                  this.state.res.map((count,i) => {
                        // console.log(count)
                        // console.log(count.data.preview.images[0].source.width + 'w')
                        // console.log(count.data.preview.images[0].source.height + 'L')

                        return (

                              
                              <MDBCarouselItem itemId={i+1} >
                                    <MDBView>
                                          <img
                                                className='redditBodyImg'
                                                src={count.data.url}
                                                alt={count.data.author}
                                          />
                                          
                                    </MDBView>
                                    <MDBCarouselCaption>
                                          <h3 className="h3-responsive"><a href='https://www.reddit.com/r/Harley/' className='redditHeaderUsername'>{count.data.author}</a></h3>
                                          <p className='text2'>{count.data.title}</p>
                                    </MDBCarouselCaption>
                              </MDBCarouselItem>

                              

                        )
                        
                  })
            )
      }

      render() {
            // this.displayterms()
            return (

                  <div className='redditDivGrandpa'>
                        <MDBContainer className='homeSliderContent1'>
                              <MDBCarousel
                                    activeItem={3}
                                    length={this.state.res.length}
                                    showControls={true}
                                    showIndicators={true}
                                    className="z-depth-1"
                                    className='homeSliderContent2'
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