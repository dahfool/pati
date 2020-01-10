import React from 'react'

interface Props {
  headers: Array<string>
}

const Head: React.FC<Props> = ({headers=[]}) =>
  <thead className='thead-dark'>
    <tr>
      {headers.map((header, i) =>
        <th scope='col' key={i}>{header}</th>
      )}
    </tr>
  </thead>

export default Head
