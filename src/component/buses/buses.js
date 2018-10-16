// @flow
import React from 'react'

import Table from '../table'

type Props = {
  journeys: Object
}

const Buses = ({journeys}: Props) =>
  <Table headers={['Bus', 'Arrive']}>
    {Object.keys(journeys).map((bus, i) =>
      <tbody key={i}>
        {journeys[bus].map((journey, j) =>
          <tr key={j}>
            <th scope='row'>{bus}</th>
            <td>{journey.expected_departure_time}</td>
          </tr>
        )}
      </tbody>
    )}
  </Table>

export default Buses
