import React from 'react';
import Buttons from 'views/Buttons';

import { render, cleanup, fireEvent } from './test-utils';
import '@testing-library/jest-dom/extend-expect';

const props = {
  activeStep: 0,
  handleBack: () => {},
  handleNext: () => {}
}

describe('Buttons', () => {
  afterEach(cleanup);

  it('matches snapshot', () => {
    const div = document.createElement('div');
    const component = render(<Buttons {...props} />, div);
    expect(component.container).toMatchSnapshot();
  })

  it('is disabled if user has not accepted privacy terms', () => {
    const { getByTestId } = render(<Buttons {...props} />)
    const rightButton = getByTestId('right-button')

    expect(rightButton.disabled).toEqual(true);
  })
})

