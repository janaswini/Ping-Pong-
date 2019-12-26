import React, { Component } from 'react'
import Schedule from '../data/Schedule'
import Sheild from '../Assets/Images/ic_Shield.svg'
import PlayerList from './PlayersList'

class Mapping extends Component {
  constructor (props) {
    super(props)
    this.state = {
      matchNo: 'match1',
      currentDate: 'Nov29',
      currentTab: 'Nov29',
      TeamAclass: 'team teamA',
      TeamBclass: 'team teamB',
      currentMatchData: Schedule
    }
  }
  render () {
    return (
   
        <div className='outerTeamNamesContainers'>
          <div className='outerTeamNames'>
            <div className={this.state.TeamAclass}> <span className='team-text'> {this.props.teamA} </span> </div>
            <div className='tennisComponent'>
              <img className='sheild' alt='ping_pong_img' src={Sheild} />
            </div>
            <div className={this.state.TeamBclass}> <span className='team-text'> {this.props.teamB} </span> </div>

          </div>
					<PlayerList />
        </div>
       
   

    )
  }
}
export default Mapping
