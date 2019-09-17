import React from 'react'
import renderer from 'react-test-renderer'
import { Flex } from './Flex'

describe('Flex', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Flex>Contents</Flex>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
