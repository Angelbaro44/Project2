import React, { Component } from 'react';
import MotorcycleReddit from '../modules/MotorcycleReddit';

class Motorcycle extends Component {
      render() {
            console.log(this.props)
            return (
                  <div>
                      <MotorcycleReddit/>  
                  </div>
            );
      }
}

export default Motorcycle;