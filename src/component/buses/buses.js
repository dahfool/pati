import React from 'react'
import PropTypes from 'prop-types';

import Table from '../table'

const Buses = ({journeys}) =>
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

Buses.propTypes = {
  journeys: PropTypes.object.isRequired
};

export default Buses
