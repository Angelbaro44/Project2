import React, { Component } from 'react';
import CigarReddit from '../modules/CigarReddit';
import YoutubeCigars from '../modules/YoutubeCigars';

class Cigar extends Component {
      render() {
            return (
                  <div>
                        <CigarReddit/>
                        <YoutubeCigars/>
                  </div>
            );
      }
}

export default Cigar;