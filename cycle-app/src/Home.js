import React, { Component } from 'react';

class Home extends Component {
      render() {
            return (
                  <div className='homeButtonGroup'>
                             <div>   <button className='homeButtonCycle'>  M    </button>   </div>
                             <div>   <button className='homeButtonCigar'>  C    </button>   </div>
                             <div>   <button className='homeButtonTrips'>  T    </button>   </div>
 
                  </div>
            );
      }
}

export default Home;