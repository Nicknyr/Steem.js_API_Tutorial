import React, { Component } from 'react';
import dsteem from 'dsteem';
import { Client } from 'dsteem';

class Utopian extends Component {
  constructor(props) {
    super(props);

    this.state = {
      utopianCash: []
    }
  }

  componentDidMount() {
    const client = new Client('https://api.steemit.com')

     var utopianHot = {
       tag: 'utopian-io',
       limit: 20
     }

     client.database
       .getDiscussions('hot', utopianHot)
       .then(result => {
         this.setState({ utopianCash: result});
      })

  }

  // <a href={`https://www.steemit.com` + postLink[i]}>{title[i]}</a>

  render() {
    const posts = Object.keys(this.state.utopianCash);

    let page = posts.map((post, i) => {
      return (
        <div className="utopian-items">
          <p>
            <strong>Author:</strong>
            {this.state.utopianCash[posts[i]]["author"]}
          </p>
          <p>
            <strong>Title:</strong>
            <a href={`https://www.steemit.com/`+this.state.utopianCash[posts[i]]["url"]}>
              {this.state.utopianCash[posts[i]]["title"]}
            </a>
          </p>
          <p>
            <strong>Pending Payout:</strong>
            {this.state.utopianCash[posts[i]]["pending_payout_value"]}
          </p>
        </div>
      );
    });


    return (
      <div className="utopian-container">
        {page}
      </div>
    );
  }
}

export default Utopian;
