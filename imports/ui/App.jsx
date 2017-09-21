import { Meteor } from 'meteor/meteor';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Navi from '../components/Navi';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Navi />
        <Footer />
      </div>
    )
  }
}