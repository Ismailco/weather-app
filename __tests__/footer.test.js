/**
 * @jest-environment jsdom
 */
import Footer from '../src/components/Footer/Footer';
import { render } from '@testing-library/react';
import React from 'react';

it('Create the Footer component snapshot', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment(<Footer />)).toMatchSnapshot();
});
