import React from 'react'

import Trains from '../../component/trains'
import Buses from '../../component/buses'
import { Props } from '../london/london'

const Home: React.FC<Props> = ({journeys}) =>
  <>
    <header className='h2 m-2'>From London Bridge</header>
    <Trains
      journeys={journeys.elmstead.trains}
      header='Elmsteads Woods'
    />
    <Buses
      journeys={journeys.elmstead.buses}
    />
    <Trains
      journeys={journeys.mottingham.trains}
      header='Mottingham'
    />
    <Buses
      journeys={journeys.mottingham.buses}
    />
  </>

export default Home
