import React, { Component } from 'react';

class Home extends Component {
      render() {
            return (
                  <div className='homeButtonGroup'>
                            <div className='homeButtonGroupOfFirstTwoBottons'>
                                   <div>   <button className='homeButtonCycle'>  Motorcycles    </button>   </div>
                                   <div>   <button className='homeButtonCigar'>  Cigars    </button>   </div>
                            </div>
                             <div>   <button className='homeButtonTrips'>  Trips    </button>   </div>
 
                  </div>
            );
      }
}

export default Home;