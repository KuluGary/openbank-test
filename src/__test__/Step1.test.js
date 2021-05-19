import React from 'react'
import Step1 from 'views/Steps/Step1'

import { render, cleanup } from './test-utils'
import '@testing-library/jest-dom/extend-expect'

const props = {
  validator: false,
  setValidator: () => {}
}

describe('Step 1', () => {
  afterEach(cleanup)

  it('matches snapshot', () => {
    const div = document.createElement('div')
    const component = render(<Step1 {...props} />, div)
    expect(component.container).toMatchSnapshot()
  })

  it('renders component', () => {
    const { getByTestId } = render(<Step1 {...props} />)

    expect(getByTestId('step1')).toBeInTheDocument()
  })
})
