import React from 'react'

const Head = ({headers=[]}) =>
  <thead className='thead-dark'>
    <tr>
      {headers.map((header, i) =>
        <th scope='col' key={i}>{header}</th>
      )}
    </tr>
  </thead>

export default Head