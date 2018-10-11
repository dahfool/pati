import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from './pages/home'
import London from './pages/london'
import endpoints from './constants/endpoints'
import {
  londonBridge,
  elmsteadWoods,
  mottingham,
  mottinghamStop,
  homeStop,
  elmsteadWoodsStop
} from './constants/destinations'

class App extends Component {

  state = {
    london: {
      elmstead: {
        trains: [],
        buses: []
      },
      mottingham: {
        trains: [],
        buses: []
      },
    },
    home: {
      elmstead: {
        trains: [],
        buses: []
      },
      mottingham: {
        trains: [],
        buses: []
      }
    }
  }

  componentDidMount() {
    this.getJourneys()
  }

  getJourneys = () => {
    axios.all([
      axios.get(endpoints.trainJounrney(elmsteadWoods, londonBridge)),
      axios.get(endpoints.trainJounrney(mottingham, londonBridge)),
      axios.get(endpoints.trainJounrney(londonBridge, mottingham)),
      axios.get(endpoints.trainJounrney(londonBridge, elmsteadWoods)),
      axios.get(endpoints.liveBusUpdate(homeStop)),
      axios.get(endpoints.liveBusUpdate(elmsteadWoodsStop)),
      axios.get(endpoints.liveBusUpdate(mottinghamStop))
    ])
      .then(axios.spread((fromElmstead, fromMottingham, toElmstead, toMottingham, homeBusStop, elmsteadBusStop, mottinghamBusStop) => {

        this.setState({
          london: {
            elmstead: {
              trains: fromElmstead.data.journeys,
              buses: homeBusStop.data.departures
            },
            mottingham: {
              trains: fromMottingham.data.journeys,
              buses: []
            },
          },
          home: {
            elmstead: {
              trains: toElmstead.data.journeys,
              buses: elmsteadBusStop.data.departures
            },
            mottingham: {
              trains: toMottingham.data.journeys,
              buses: mottinghamBusStop.data.departures
            }
          }
        })
      }))
      .catch(error => console.error('Error:', error))
  }

  render() {
    let { london, home } = this.state

    return (
      <Router>
        <>
          <ul className='nav nav-tabs'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link'>To London Bridge</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/home' className='nav-link'>From london Bridge</NavLink>
            </li>
          </ul>
          <Route exact path='/' component={ () => <London journeys={london}/>}/>
          <Route path='/home' component={ () => <Home journeys={home}/>}/>
          <button
            type='button'
            className='btn btn-secondary btn-block p-2'
            onClick={this.getJourneys}
            children='Refresh'
          />
        </>
      </Router>
    )
  }
}

export default App



