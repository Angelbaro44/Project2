import React, { Component } from 'react';

class MotorcycleReddit extends Component {
      componentDidMount = () => {
            this.getReddit()

      }
      state = {
            res:[]

      }


      getAssesAToken = async () => {


            let res = await fetch("https://www.reddit.com/api/v1/access_token", {
                  body: "grant_type=password&username=Ghostly-44&password=Wiseflame44",
                  headers: {
                        Authorization: "Basic TFVVNlJ4ejVUZzJVYWc6TWl5bFF3N1M5OHlkZEVzQlNtSWc4Rk5vNkdJ",
                        "Content-Type": "application/x-www-form-urlencoded"
                  },
                  method: "POST"
            })
            let key = await res.json()
            return key.access_token

      }


      getReddit = async () => {

            //let key = await this.getAssesAToken();
            //console.log(key)
            fetch("https://oauth.reddit.com/r/Harley/top?limit=5", {
                  headers: { Authorization: `bearer ${await this.getAssesAToken()}` }

            }).then(res => res.json()).then(res => {
                  console.log(res);
                  this.setState({
                        res: res.data.children
                  
                  })
            })

      }

      displayterms = () => {
            return (
                  this.state.res.map((count) => {
                        // console.log(count.data.url)
                        return (

                             <section className='redditContent'>
                                   <section className='redditHeader'>
                                         <img className='redditHeaderLogo'src='/images/icon.png' alt='Reddit Logo' />
                                         <a href='https://www.reddit.com/r/Harley/' className='redditHeaderUsername'>{count.data.author}</a>
                                         </section>
                                   <img className='redditBodyImg' src={count.data.url} alt={count.data.author} />
                                   <p className='redditBodyText'>{count.data.title}</p>
                             </section>

                        )
                  })
            )
      }

      render() {
            // this.displayterms()
            // console.log(this.state)
            return (
                  <div className='redditDivDaddy'>
                        {this.displayterms()}

                  </div>
            );
      }
}

export default MotorcycleReddit;