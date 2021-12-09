import React from 'react';
import { render, screen } from '@testing-library/react';
import { Component } from './component';

describe('example test suite', () => {
  it('renders test component', () => {
    render(<Component text="Hello World" />);
    const myEl = screen.getByTestId('test-component');
    expect(myEl).toBeInTheDocument();
  });
});
