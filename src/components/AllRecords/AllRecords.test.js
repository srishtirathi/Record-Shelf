/* eslint-disable react/jsx-props-no-spreading */
import { render } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import AllRecords from './AllRecords';
import { mockAllRecords } from '../../mockdata/mockdata';

describe(AllRecords.name, () => {
  const mockProps = {
    allRecords: mockAllRecords,
    map: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
  it('should match snapshot', () => {
    const { container } = render(<BrowserRouter><AllRecords {...mockProps} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
});
