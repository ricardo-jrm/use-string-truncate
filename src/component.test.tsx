import React from 'react';
import { render, screen } from '@testing-library/react';
import { TruncateString } from '.';

describe('test component', () => {
  it('renders component', () => {
    render(<TruncateString str="Lorem ipsum dolor sit amet" length={20} />);
    const myEl = screen.getByTestId('str-trc');
    expect(myEl).toBeInTheDocument();
  });
  it('truncates string', () => {
    render(<TruncateString str="Lorem ipsum dolor sit amet" length={20} />);
    const myEl = screen.getByTestId('str-trc');
    expect(myEl.textContent).toBe('Lorem ipsum dolor...');
  });
  it('truncates string but keeps the last word', () => {
    render(
      <TruncateString
        str="Lorem ipsum dolor sit amet"
        length={20}
        keepLastWord
      />,
    );
    const myEl = screen.getByTestId('str-trc');
    expect(myEl.textContent).toBe('Lorem ipsum ... amet');
  });
});
