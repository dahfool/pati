import React from 'react'
import { shallow } from 'enzyme'

import Trains from './trains'

const fixtures = [
  {
    'startDateTime': '2018-10-17T18:27:00',
    'duration': 25,
    'arrivalDateTime': '2018-10-17T18:52:00',
  }
]

const setup = (journeys, header='Victoria') => {

  const component = shallow(<Trains
    journeys={journeys}
    header={header}
  />)

  return {
    component,
    header: component.find('h3'),
    th: component.find('th'),
    td: component.find('td')
  }

}

describe('Trains', () => {

  it('Should render', () => {
    const { component } = setup([])
    expect(component.length).toEqual(1)
  })

  describe('Routes', () => {

    it('Should have a header', () => {
      const {header} = setup(fixtures)
      expect(header.text()).toEqual('Victoria')
    })

    it('Should have 5 th', () => {
      const {th} = setup(fixtures)
      expect(th.length).toEqual(5)
    })

    it('Should have 5 td', () => {
      const {td} = setup(fixtures)
      expect(td.length).toEqual(5)
    })

  })

})