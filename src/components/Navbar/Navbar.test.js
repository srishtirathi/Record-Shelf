/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './Navbar';

describe(Navbar.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
  it('should render text ', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    screen.getByText('My Record Shelf');
  });
});
