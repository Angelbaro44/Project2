import React, { Component } from 'react';
import RedditComponent from '../RedditComponent';

class Motorcycle extends Component {
      render() {
            console.log(this.props)
            return (
                  <div>
                      <RedditComponent/>  
                  </div>
            );
      }
}

export default Motorcycle;