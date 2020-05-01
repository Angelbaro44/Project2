import React, { Component } from 'react';
import CigarReddit from '../modules/CigarReddit';
import YoutubeCigars from '../modules/YoutubeCigars';

class Cigar extends Component {
      render() {
            return (
                  <div className='greatDivGrandpa'>
                        <CigarReddit/>
                        <YoutubeCigars/>
                  </div>
            );
      }
}

export default Cigar;