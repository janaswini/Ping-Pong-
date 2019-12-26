import React, { Component } from 'react'
import Mapping from './Mapping.js'
import Versus from '../Assets/Images/VS.png'
import Sheild from '../Assets/Images/ic_Shield.svg'
import Navigation from '../Assets/Images/ic_Navigation.svg'
// import Path from '../Assets/Images/Path.svg'
import Schedule from '../data/Schedule'
import './Fixtures.css'

class Fixtures extends Component {
  constructor (props) {
    super(props)
    this.state = {
      matchNo: 0,
      currentDate: 'Nov28',
      currentTab: 'Nov28',
      TeamAclass: 'team teamA',
      TeamBclass: 'team teamB',
      Dates: ['Nov14', 'Nov15', 'Nov16', 'Nov19', 'Nov20', 'Nov21', 'Nov22', 'Nov23', 'Nov26',
        'Nov27', 'Nov28', 'Nov29', 'Nov30', 'Dec03', 'Dec04', 'Dec05']
    }
  }

  toggleFixtureTable (date) {
    console.log(date)
    // this.setState({
    //   currentDate: date,
    //   matchNo: this.state.matchNo,
    //   currentTab: date
    // })
    // let currentOverall = Schedule[date][this.state.matchNo]
    // if (currentOverall.Overall.Team === 'Team1') {
    //   this.setState({
    //     TeamAclass: 'team teamA winner',
    //     TeamBclass: 'team teamB'
    //   })
    // } else if (currentOverall.Overall.Team === 'Team2') {
    //   this.setState({
    //     TeamAclass: 'team teamA',
    //     TeamBclass: 'team teamB winner'
    //   })
    // } else {
    //   this.setState({
    //     TeamAclass: 'team teamA',
    //     TeamBclass: 'team teamB'
    //   })
    // }
  }

  navigateScreen (screen) {
    this.setState({
      matchNo: screen
    })
    let currentOverall = Schedule[this.state.currentDate][screen]
    if (currentOverall.Overall.Team === 'Team1') {
      this.setState({
        TeamAclass: 'team teamA winner',
        TeamBclass: 'team teamB'
      })
    } else if (currentOverall.Overall.Team === 'Team2') {
      this.setState({
        TeamAclass: 'team teamA',
        TeamBclass: 'team teamB winner'
      })
    } else {
      this.setState({
        TeamAclass: 'team teamA',
        TeamBclass: 'team teamB'
      })
    }
  }
  render () {
    let currentMatchData = Schedule[this.state.currentDate]
    console.log(currentMatchData)

    return (
      <div id='outerContainer'>
        <div className='calendar'>

          <div className='date-container'>

            { this.state.Dates.map((date, index) => {
              return <div key={index} className={this.state.currentTab === date ? 'date date dateActive' : 'date'} onClick={this.toggleFixtureTable.bind(this, date)}>
                <span className='number'>{date.substr(3, 4)}</span> <br />
                <span className='text'>{date.substr(0, 3)}</span>
              </div>
            })}
          </div>

          <div className='outerTeamNamesContainers'>
            { currentMatchData.map((match, i) => {
              if (i === this.state.matchNo) { return <Mapping key={i} teamA={match.Team1.name} teamB={match.Team2.name} onClick={this.toggleFixtureTable.bind(this, match)} /> }
            })}

          </div>

          {/* // <li key={i}>{user.name}</li>

          // <div className={this.state.TeamAclass}> <span className='team-text'> {match.Team1.name} </span> </div>
                  // <div className='tennisComponent'>
                      // <img className='sheild' alt='ping_pong_img' src={Sheild} />
                    // </div>
                  // <div className={this.state.TeamBclass}> <span className='team-text'> {match.Team2.name} </span> </div>
                // </div> */}

          {/* </div> */}
          {/* </div> */}

          {/* <div className='outerFixtureTable'>
              {this.state.matchNo === 'match2' ? <img className='icNavigationOne' alt='left_arrow' src={Navigation} onClick={this.navigateScreen.bind(this, 'match1')} /> : <img className='hide-icNavigation' alt='hide_arrow' src={Navigation} onClick={this.onclickMatchOne} /> }
              <table className='flex-container'>
                <tbody className='tbodyclassFixture'>
                  <tr className='trclassFixture'>
                    <td className='thclass1'>WS</td>
                    <td className='thclass2'>{currentMatchData.Team1.players.WS}</td>
                    <td className='thclass3'><img className='imageVersusTable' alt='versus' src={Versus} /></td>
                    <td className='thclass4'>{currentMatchData.Team2.players.WS}</td>
                    <td className='thclass5'>{currentMatchData.result.WS.team1}-{currentMatchData.result.WS.team2}</td>
                  </tr>
                  <tr className='trclassFixture'>
                    <td className='thclass1'>FMS</td>
                    <td className='thclass2'>{currentMatchData.Team1.players.FMS}</td>
                    <td className='thclass3'><img className='imageVersusTable' alt='versus' src={Versus} /></td>
                    <td className='thclass4'>{currentMatchData.Team2.players.FMS}</td>
                    <td className='thclass5'>{currentMatchData.result.FMS.team1}-{currentMatchData.result.FMS.team2}</td>
                  </tr>
                  <tr className='trclassFixture'>
                    <td className='thclass1'>MX</td>
                    <td className='thclass2'>{currentMatchData.Team1.players.MX.player1}<br />{currentMatchData.Team1.players.MX.player2}</td>
                    <td className='thclass3'><img className='imageVersusTable' alt='versus' src={Versus} /></td>
                    <td className='thclass4'>{currentMatchData.Team2.players.MX.player1}<br />{currentMatchData.Team2.players.MX.player2}</td>
                    <td className='thclass5'>{currentMatchData.result.MX.team1}-{currentMatchData.result.MX.team2}</td>
                  </tr>
                  <tr className='trclassFixture'>
                    <td className='thclass1'>MD</td>
                    <td className='thclass2'>{currentMatchData.Team1.players.MD.player1}<br />{currentMatchData.Team1.players.MD.player2}</td>
                    <td className='thclass3'><img className='imageVersusTable' alt='versus' src={Versus} /></td>
                    <td className='thclass4'>{currentMatchData.Team2.players.MD.player1}<br />{currentMatchData.Team2.players.MD.player2}</td>
                    <td className='thclass5'>{currentMatchData.result.MD.team1}-{currentMatchData.result.MD.team2}</td>
                  </tr>
                  <tr className='trclassFixture'>
                    <td className='thclass1'>MS</td>
                    <td className='thclass2'>{currentMatchData.Team1.players.MS}</td>
                    <td className='thclass3'><img className='imageVersusTable' alt='versus' src={Versus} /></td>
                    <td className='thclass4'>{currentMatchData.Team2.players.MS}</td>
                    <td className='thclass5'>{currentMatchData.result.MS.team1}-{currentMatchData.result.MS.team2}</td>
                  </tr>

                </tbody>
              </table>
              {this.state.matchNo === 'match1' ? <img className='icNavigation' alt='right_arrow' src={Navigation} onClick={this.navigateScreen.bind(this, 'match2')} /> : <img className='hide-icNavigation' alt='hide_arrow' src={Navigation} onClick={this.onclickMatchTwo} /> }
            </div> */}
        </div>
      </div>

    )
  }
}
export default Fixtures
