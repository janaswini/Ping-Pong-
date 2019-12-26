import React, { Component } from 'react'
import './Standing.css'
import ScoreBoard from '../data/ScoreBoard'

class Standing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Score: ScoreBoard
    }
  }

  render () {
    return (
      <div className='tableWrapper'>
        <table className='tableCss'>
          <thead className='theadclass'>
            <tr className='trclass'>
              <th className='thClass'>Position</th>
              <th className='thClass'>Team</th>
              <th className='thClass'>Played</th>
              <th className='thClass'>Won</th>
              <th className='thClass'>Lost</th>
              <th className='thClass points'>Points</th>
            </tr>
          </thead>
          <tbody className='tbodyclass'>
            {this.state.Score['properties'].map((data, i) => (
              <tr className='trclass' key={i} >
                <td className='tdClass'> {data.Position}</td>
                <td className='tdClass'>{data.Team}</td>
                <td className='tdClass'>{data.Matchesplayed}</td>
                <td className='tdClass'>{data.Won}</td>
                <td className='tdClass'>{data.Lost}</td>
                <td className='tdClass points'>{data.Points}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Standing
