import React from 'react'
import { shallow } from 'enzyme'

import Head from './head'

const setup = (headers=['test, test1']) => {

  const component = shallow(<Head
    headers={headers}
  />)

  return {
    component,
    th: component.find('th'),
  }

}

describe('Table', () => {

  describe('Head', () => {

    it('Should render', () => {
      const { component } = setup()
      expect(component.length).toEqual(1)
    })

    it('Should have 2 headers', () => {
      const {th} = setup(['test', 'test1'])
      expect(th.length).toEqual(2)
      expect(th.at(0).text()).toEqual('test')
      expect(th.at(1).text()).toEqual('test1')
    })
  })

})