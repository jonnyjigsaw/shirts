import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'


import Invoice from '../components/Invoice'
import Summary from '../components/Summary'



class Main extends Component {
  constructor(props) {
    super(props)



    this.state = {
      UniformData: 1
    }
  }


  render(){
    return (

        <main>
          <Switch>
            <Route exact path='/' component={Summary}/>
            <Route exact path='/invoices' component={Invoice}/>
          </Switch>
        </main>

    )
  }

}

export default Main
