import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Template } from './Template'

describe('Template', () => {
  const contents = 'contents'

  it('renders correctly', () => {
    const onGoBack = jest.fn()
    const component = renderer.create(<Template onGoBack={onGoBack}>contents</Template>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('when clicking on home button', () => {
    it('triggers callback', () => {
      const onGoBack = jest.fn()
      const wrapper = shallow(<Template onGoBack={onGoBack}>contents</Template>)

      const ctaButton = wrapper.find('[data-test="home-btn"]')
      ctaButton.simulate('click')

      expect(onGoBack).toHaveBeenCalled()
    })
  })
})
