import React, { Component } from 'react'
import Standing from '../Standing/Standing'
import Fixtures from '../Fixtures/Fixtures'
import './LandingPage.css'

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTab: 'standing'
    }
  }

  handleChangeTab (tab) {
    this.setState({
    'currentTab' : tab
    })
  }

  render () {
    return (
      <div id='landing-page'>
        <div className='title'>tringapps</div>
        <div className='buttonTwoTab'>
          <button className={this.state.currentTab === 'fixtures' ? 'tab tab-fixtures active' : 'tab tab-fixtures  inactive'} onClick={this.handleChangeTab.bind(this, 'fixtures')}> Fixtures </button>
          <button className={this.state.currentTab === 'standing' ? 'tab tab-standing active' : 'tab tab-standing inactive'} onClick={this.handleChangeTab.bind(this, 'standing')}> Standing </button>
        </div>
        { this.state.currentTab === 'standing' ? (<Standing />) : <Fixtures /> }
      </div>
    )
  }
}

export default LandingPage
