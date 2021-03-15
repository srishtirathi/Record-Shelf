/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import Home from './Home';

describe(Home.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(<BrowserRouter><Home /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
  it('should render text and button', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    screen.getByText('Seems a bit empty in here :(');

    screen.getByText('Sync');
  });
  test('Should take to AllRecords page on click', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    const homeLink = screen.getByText('Sync');
    fireEvent.click(homeLink);
    expect(document.location.href).toBe('http://localhost/allrecords');
  });
});
