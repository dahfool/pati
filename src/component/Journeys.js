import React from 'react'
import moment from 'moment'

const Journeys = ({journeys=[], header}) =>
  <>
    <h3 className='h4 m-2'>{header}</h3>
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Departs</th>
          <th scope="col">Arrive</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
      <tbody>
      {journeys.map((journey, i) =>
        <tr key={i}>
          <th scope="row">{moment(journey.startDateTime).format('h:mm:ss a')}</th>
          <td>{moment(journey.arrivalDateTime).format('h:mm:ss a')}</td>
          <td>{journey.duration} min</td>
        </tr>
      )}
      </tbody>
    </table>
  </>

export default Journeys