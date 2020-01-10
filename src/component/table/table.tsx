import React from 'react'

import Head from './head'

interface Props {
  headers: Array<string>,
  children: React.ReactNode,
}

const Table: React.FC<Props> = ({headers, children}) =>
  <table className='table'>
    <Head headers={headers}/>
    {children}
  </table>

export default Table
