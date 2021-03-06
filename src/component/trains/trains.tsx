import React from 'react'
import moment from 'moment'

import Table from '../table'

export interface Train {
  startDateTime: string,
  arrivalDateTime: string,
  duration: string
}

interface Props {
  journeys: Train[],
  header: string
}

const Trains: React.FC<Props> = ({journeys=[], header}) =>
  <>
    <h3 className='h4 m-2'>{header}</h3>
    <Table headers={['Departs', 'Arrive', 'Duration']}>
      <tbody>
        {journeys.map((journey, i) =>
          <tr key={i}>
            <th scope='row'>{moment(journey.startDateTime).format('h:mm:ss a')}</th>
            <td>{moment(journey.arrivalDateTime).format('h:mm:ss a')}</td>
            <td>{journey.duration} min</td>
          </tr>
        )}
      </tbody>
    </Table>
  </>

export default Trains
