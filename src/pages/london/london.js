import React from 'react'

import Trains from '../../component/trains'
import Buses from '../../component/buses'

const London = ({journeys}) =>
  <>
    <header className='h2 m-2'>To London Bridge</header>
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
  </>

export default London