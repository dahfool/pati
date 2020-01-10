import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from './pages/home'
import London from './pages/london'
import { elmstead, mottingham} from './pages/london/london'
import action from './actions'

interface Props {}

type State = {
  london: {
    elmstead: elmstead,
    mottingham: mottingham,
  },
  home: {
    elmstead: elmstead,
    mottingham: mottingham
  }
}

const initalState: State = {
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

const App: React.FC<Props> = () => {
  const [journey, setJourney] = useState(initalState)

  const getJourneys = () => {
    action.getJourneys()
      .then(({fromElmstead, fromMottingham, toElmstead, toMottingham, homeBusStop, elmsteadBusStop, mottinghamBusStop}) => {

        setJourney({
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

  useEffect(() => {
    getJourneys()
  }, [])

  const { london, home } = journey

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
          onClick={getJourneys}
          children='Refresh'
        />
      </>
    </Router>
  )
}

export default App
