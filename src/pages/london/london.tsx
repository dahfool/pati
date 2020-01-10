import React from 'react'

import Trains from '../../component/trains'
import { Train } from '../../component/trains/trains'
import Buses from '../../component/buses'

interface travelOptions {
  trains: Train[],
  buses: object
}

export interface elmstead extends travelOptions {}

export interface mottingham extends travelOptions {}

interface journeys {
  elmstead: elmstead,
  mottingham: mottingham
}

export interface Props {
  journeys: journeys
}

const London: React.FC<Props> = ({journeys}) =>
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
