/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import Footer from '../src/components/Footer/Footer';

it('Create the Footer component snapshot', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment(<Footer />)).toMatchSnapshot();
});
