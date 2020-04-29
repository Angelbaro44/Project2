import React, { Component } from 'react';

class RedditComponent extends Component {
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
            console.log(key)
            return key.access_token

      }


      getReddit = async () => {

            //let key = await this.getAssesAToken();
            //console.log(key)
            fetch("https://oauth.reddit.com/r/motorcycles/hot?limit=", {
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
                        return (

                             <section>
                                   <section>
                                         <img src='/images/icon.png' alt='Reddit Logo' />
                                         <p>{count.data.author}</p>
                                         </section>
                                   <img src='{count.data.url}' alt='{count.data.author}' />
                                   <p>{count.data.title}</p>
                             </section>

                        )
                  })
            )
      }

      render() {
            this.getReddit()
            // this.displayterms()
            console.log(this.state)
            return (
                  <div>
                        {this.displayterms()}

                  </div>
            );
      }
}

export default RedditComponent;