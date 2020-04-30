import React, { Component } from 'react';
import TripsReddit from '../modules/TripsReddit';
import YoutubeTrips from '../modules/YoutubeTrips';
class Trips extends Component {
      render() {
            return (
                  <div>
                       <TripsReddit/> 
                       <YoutubeTrips/>
                  </div>
            );
      }
}

export default Trips;