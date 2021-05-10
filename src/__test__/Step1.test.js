import React from 'react'
import Step1 from 'views/Steps/Step1'

import { render, cleanup, fireEvent } from './test-utils'
import '@testing-library/jest-dom/extend-expect'

describe('Step 1', () => {
  afterEach(cleanup)

  it('matches snapshot', () => {
    const div = document.createElement('div')
    const component = render(<Step1/>, div)
    expect(component.container).toMatchSnapshot()
  })

  it('renders component', () => {
    const { getByTestId } = render(<Step1 />)

    expect(getByTestId('step1')).toBeInTheDocument()
  })

  it('checks correct typing of terms', () => {
    const { getByTestId } = render(<Step1 />)
    const checkbox = getByTestId('privacy-checkbox');
    
    expect(checkbox.checked).toEqual(false);

    fireEvent.click(checkbox);

    expect(checkbox.checked).toEqual(true);
  })
})
