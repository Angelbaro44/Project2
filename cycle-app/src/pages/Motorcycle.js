import React, { Component } from 'react';
import MotorcycleReddit from '../modules/MotorcycleReddit';
import YoutubeCycles from '../modules/YoutubeCycles'
class Motorcycle extends Component {
      render() {
            console.log(this.props)
            return (
                  <div className='greatDivGrandpa'>
                      <MotorcycleReddit/> 
                      <YoutubeCycles/>
                  </div>
            );
      }
}

export default Motorcycle;