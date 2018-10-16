// @flow
import * as React from 'react'

import Head from './head'

type Props = {
  headers: Array<string>,
  children: React.Node,
}

const Table = ({headers, children}: Props) =>
  <table className='table'>
    <Head headers={headers}/>
    {children}
  </table>

export default Table