// @flow
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from './pages/home'
import London from './pages/london'
import action from './actions'

type Props = {}

type State = {
  london: {
    elmstead: {
      trains: Array<Object>,
      buses: Object
    },
    mottingham: {
      trains: Array<Object>,
      buses: Object
    },
  },
  home: {
    elmstead: {
      trains: Array<Object>,
      buses: Object
    },
    mottingham: {
      trains: Array<Object>,
      buses: Object
    }
  }
}

class App extends React.Component<Props, State> {

  state = {
    london: {
      elmstead: {
        trains: [],
        buses: {}
      },
      mottingham: {
        trains: [],
        buses: {}
      },
    },
    home: {
      elmstead: {
        trains: [],
        buses: {}
      },
      mottingham: {
        trains: [],
        buses: {}
      }
    }
  }

  componentDidMount() {
    this.getJourneys()
  }

  getJourneys = () => {

    action.getJourneys()
      .then(({fromElmstead, fromMottingham, toElmstead, toMottingham, homeBusStop, elmsteadBusStop, mottinghamBusStop}) => {

        this.setState({
          london: {
            elmstead: {
              trains: fromElmstead.data.journeys,
              buses: homeBusStop.data.departures
            },
            mottingham: {
              trains: fromMottingham.data.journeys,
              buses: {}
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
      })
  }

  render() {
    const { london, home } = this.state

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
