import React, { Component } from 'react';
import MotorcycleReddit from '../modules/MotorcycleReddit';
import YoutubeCycles from '../modules/youtubeCycles'
class Motorcycle extends Component {
      render() {
            console.log(this.props)
            return (
                  <div>
                      <MotorcycleReddit/> 
                      {/* <YoutubeCycles/> */}
                  </div>
            );
      }
}

export default Motorcycle;