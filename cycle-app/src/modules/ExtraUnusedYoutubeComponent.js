import React, { Component } from 'react';


const apiKey = 'AIzaSyA_KJP5G6utONipcyue9mzATo0cxXLkDjc';
const channelID = 'UC1iNF4BnIucCD7J2QGZYkjg';
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
                  this.setState({
                        items: res.items,
                        videoId: res.items[this.state.indexCount].id.videoId
                  })

            })
      }



      render() {

            console.log(this);
            return (
                  <div className='youtubeDivDaddy'>
                        <div className='youtubeDivVideo'><iframe  className='youtubeVideo' width="560" height="315" src={`https://www.youtube.com/embed/${this.state.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        <div className='youtubeDivButtons'>
                              <button className='youtubeButtons' onClick={this.negClicked}>  down  </button>
                              <button className='youtubeButtons' onClick={this.posClicked}>  up    </button>
                        </div>
                  </div>
            );
      }
}

export default YoutubeCycles;