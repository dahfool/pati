import React from 'react'

const Buses = ({journeys=[]}) =>
  <>
    <table className="table">
      <thead className="thead-dark">
      <tr>
        <th scope="col">BUS</th>
        <th scope="col">Arrive</th>
      </tr>
      </thead>
      {Object.keys(journeys).map((bus, i) =>
        <tbody key={i}>
          {journeys[bus].map((journey, i) =>
            <tr key={i}>
              <th scope="row">{bus}</th>
              <td>{journey.expected_departure_time}</td>
            </tr>
          )}
        </tbody>
      )}
    </table>
  </>

export default Buses
