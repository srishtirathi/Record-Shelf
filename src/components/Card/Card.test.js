/* eslint-disable react/jsx-props-no-spreading */
import { render } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import Card from './Card';

describe(Card.name, () => {
  const mockProps = {
    name: 'abc',
    artist: 'abc',
    albumArtUrl: 'abc',
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(<BrowserRouter><Card {...mockProps} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
});
