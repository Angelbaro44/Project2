import React, { Component } from 'react';


const apiKey = 'AIzaSyAMk4iFo_rDA9S1blr_fLkw2Fy6NrWSD1Y';
const channelID = 'UCdHZ38Wxj-diNslUwEOhSDg';
const limit = 10;

var url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${limit}`





class YoutubeCycles extends Component {

      componentDidMount = () => {
            this.getYoutubeData()
            console.log(this.state)
      }
      state = {
            items: [],
            indexCount: 0
      }

      posClicked = () => {
            if (this.state.indexCount < 10) {
                  this.setState({ indexCount: this.state.indexCount += 1 });
                  this.getYoutubeData()
                  console.log('hello')

            }
            console.log(this.state.indexCount);

      }
      negClicked = () => {
            if (this.state.indexCount > 0) {
                  this.setState({ indexCount: this.state.indexCount -= 1 });
                  this.getYoutubeData()
                  console.log('hello')
            }
            console.log(this.state.indexCount);

      }


      getYoutubeData = () => {


            fetch(url).then(res => res.json()).then(res => {
                  console.log(res);
                  if(res.items)
                  this.setState({
                        items: res.items,
                        videoId: res.items[this.state.indexCount].id.videoId,
                        videoTitle: res.items[this.state.indexCount].snippet.title,
                        videoChannelTitle: res.items[this.state.indexCount].snippet.channelTitle
                  })

            })
      }



      render() {

            console.log(this);
            return (
                  <div className='youtubeDivDaddy'>
                        <a className='redditHeaderUsername'>"{this.state.videoTitle}" by {this.state.videoChannelTitle} </a>
                        <br/><br/><br/>
                        <div className='youtubeDivVideo'><iframe  className='youtubeVideo' width="560" height="315" src={`https://www.youtube.com/embed/${this.state.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <br/><br/><br/>
                        <div className='youtubeDivButtons'>
                              <button className='youtubeButtons1' onClick={this.negClicked}>  Previous Video  </button>
                              <button className='youtubeButtons1' onClick={this.posClicked}>  Older Video    </button>
                        </div>
                        <br/><br/><br/>
                  </div>
            )
      }
}

export default YoutubeCycles;