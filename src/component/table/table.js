import React from 'react'

import Head from './head'

const Table = ({headers, children}) =>
  <table className='table'>
    <Head headers={headers}/>
    {children}
  </table>

export default Table