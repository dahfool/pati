import React from 'react'

import Table from '../table'

const Buses = ({journeys=[]}) =>
  <Table headers={['Bus', 'Arrive']}>
    {Object.keys(journeys).map((bus, i) =>
      <tbody key={i}>
        {journeys[bus].map((journey, i) =>
          <tr key={i}>
            <th scope='row'>{bus}</th>
            <td>{journey.expected_departure_time}</td>
          </tr>
        )}
      </tbody>
    )}
  </Table>

export default Buses
