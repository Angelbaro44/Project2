import React, { Component } from 'react';
import TripsReddit from '../modules/TripsReddit';
import YoutubeTrips from '../modules/YoutubeTrips';
class Trips extends Component {
      render() {
            return (
                  <div className='greatDivGrandpa'>
                       <TripsReddit/> 
                       <YoutubeTrips/>
                  </div>
            );
      }
}

export default Trips;