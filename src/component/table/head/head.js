import React from 'react'

type Props = {
  headers: Array<string>
}

const Head = ({headers=[]}: Props) =>
  <thead className='thead-dark'>
    <tr>
      {headers.map((header, i) =>
        <th scope='col' key={i}>{header}</th>
      )}
    </tr>
  </thead>

export default Head