import React, { Component } from 'react'
import Schedule from '../data/Schedule'
import Versus from '../Assets/Images/VS.png'

class PlayerList extends Component {
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

      <div className='outerFixtureTab'>

        <table className='flex-container'>
          <tbody className='tbodyclassFixture'>
            <tr className='trclassFixture'>
              <td className='thclass1'>WS</td>
              <td className='thclass2'>sgdhjsgaf</td>
              <td className='thclass3'><img className='imageVersusTable' alt='versus' src={Versus} /></td>
              <td className='thclass4'>sjdjs</td>
              <td className='thclass5'>0-1</td>
            </tr>
          </tbody>
        </table>
      </div>

    )
  }
}
export default PlayerList
