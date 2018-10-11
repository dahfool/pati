import React from 'react'
import PropTypes from 'prop-types';

const Head = ({headers=[]}) =>
  <thead className='thead-dark'>
    <tr>
      {headers.map((header, i) =>
        <th scope='col' key={i}>{header}</th>
      )}
    </tr>
  </thead>

Head.propTypes = {
  headers: PropTypes.array.isRequired
}

export default Head