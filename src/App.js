import React, { Component } from 'react';
import Journeys from './component/Journeys'
import endpoints from './constants/endpoints'
import axios from 'axios'
import { londonBridge, elmsteadWoods, mottingham } from './constants/destinations'

class App extends Component {

  state = {
    london: {
      elmstead: [],
      mottingham: []
    },
    home: {
      elmstead: [],
      mottingham: []
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
      axios.get(endpoints.trainJounrney(londonBridge, elmsteadWoods))
    ])
      .then(axios.spread((fromElmstead, fromMottingham, toElmstead, toMottingham,) => {
        this.setState({
          london: {
            elmstead: fromElmstead.data.journeys,
            mottingham: fromMottingham.data.journeys,
          },
          home: {
            elmstead: toElmstead.data.journeys,
            mottingham: toMottingham.data.journeys,
          }
        })
      }))
      .catch(error => console.error('Error:', error))
  };

  render() {
    let { london, home } = this.state

    return (
      <>
        <header className='h2 m-2'>To London Bridge</header>
        <Journeys
          journeys={london.elmstead}
          header='Elmsteads Woods'
        />
        <Journeys
          journeys={london.mottingham}
          header='Mottingham'
        />

        <header className='h2 m-2'>From London Bridge</header>
        <Journeys
          journeys={home.elmstead}
          header='Elmsteads Woods'
        />
        <Journeys
          journeys={home.mottingham}
          header='Mottingham'
        />
        <button
          type='button'
          className='btn btn-secondary btn-block p-2'
          onClick={this.getJourneys}>Refresh
        </button>
      </>
    );
  }
}

export default App;
