import React from 'react'
import { shallow } from 'enzyme'

import Buses from './buses'

const fixtures = {
  126: [
    {
      'line': '126',
      'line_name': '126',
      'expected_departure_time': '16:00'
    },
    {
      'line': '126',
      'line_name': '126',
      'expected_departure_time': '17:50'
    },
    {
      'line': '126',
      'line_name': '126',
      'expected_departure_time': '20:50'
    }],
  314: [
    {
      'line': '314',
      'line_name': '314',
      'expected_departure_time': '17:50'
    },
    {
      'line': '314',
      'line_name': '314',
      'expected_departure_time': '20:50'
    }]
}

const setup = (journeys) => {

  const component = shallow(<Buses
    journeys={journeys}
  />)

  return {
    component,
    tr: component.find('tr'),
    th: component.find('th'),
    td: component.find('td')
  }

}

describe('Buses', () => {

  it('Should render', () => {
    const { component } = setup({})
    expect(component.length).toEqual(1)
  })

  describe('Routes', () => {

    it('Should have 5 row', () => {
      const {tr} = setup(fixtures)
      expect(tr.length).toEqual(5)
    })

    it('Should have 5 th', () => {
      const {th} = setup(fixtures)
      expect(th.length).toEqual(5)
    })

    it('Should have 5 td', () => {
      const {td} = setup(fixtures)
      expect(td.length).toEqual(5)
    })

    it('Should have bus number', () => {
      const {th} = setup(fixtures)
      expect(th.at(0).text()).toEqual('126')
    })

    it('Should have a departure time', () => {
      const {td} = setup(fixtures)
      expect(td.at(0).text()).toEqual('16:00')
    })

  })

})