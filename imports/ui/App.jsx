import { Meteor } from 'meteor/meteor';
import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <main>
        	{this.props.content}
      	</main>
        <Footer />
      </div>
    )
  }
}