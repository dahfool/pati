import React from 'react'
import { shallow } from 'enzyme'

import Buses from './buses'

const setup = (journeys) => {

  const component = shallow(<Buses
    journey={journeys}
  />)

  return {
    component
  }

}

describe('Buses', () => {

  it('Should render', () => {
    const { component } = setup()
    expect(component.length).toEqual(1)
  })

})