import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Trains from './component/Trains'
import endpoints from './constants/endpoints'
import {
  londonBridge,
  elmsteadWoods,
  mottingham,
  mottinghamStop,
  homeStop,
  elmsteadWoodsStop
} from './constants/destinations'
import Buses from './component/Buses'

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
  };

  render() {
    let { london, home } = this.state

    return (
      <Router>
        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">To London Bridge</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">From london Bridge</NavLink>
            </li>
          </ul>
          <Route exact path="/" component={() =>
            <>
              <header className='h2 m-2'>To London Bridge</header>
              <Trains
                journeys={london.elmstead.trains}
                header='Elmsteads Woods'
              />
              <Buses
                journeys={london.elmstead.buses}
              />
              <Trains
                journeys={london.mottingham.trains}
                header='Mottingham'
              />
            </>}
          />
          <Route path="/home" component={ () =>
            <>
              <header className='h2 m-2'>From London Bridge</header>
              <Trains
                journeys={home.elmstead.trains}
                header='Elmsteads Woods'
              />
              <Buses
                journeys={home.elmstead.buses}
              />
              <Trains
                journeys={home.mottingham.trains}
                header='Mottingham'
              />
              <Buses
                journeys={home.mottingham.buses}
              />
            </>}
          />
          <Route path="/buses" component={ () =>
            <>
              <header className='h2 m-2'>Buses</header>
            </>}
          />
          <button
            type='button'
            className='btn btn-secondary btn-block p-2'
            onClick={this.getJourneys}>Refresh
          </button>
        </div>
      </Router>
    );
  }
}

export default App



