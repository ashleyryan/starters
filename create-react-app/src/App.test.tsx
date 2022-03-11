import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { CdsDropdown } from '@cds/react/dropdown';

test('renders learn react link and button', async () => {
  render(<App />);
  const linkElement = screen.getByText(/clarity in react/i);
  expect(linkElement).toBeInTheDocument();

  const buttonElement = await screen.findByRole('button', { name: 'Show Alert' });
  expect(buttonElement).toBeInTheDocument();
});

const TestComponent = () => {
  const ref = React.useRef<HTMLSpanElement>();

  return (
    <>
      <span ref={ref}>Anchor Element</span>
      <CdsDropdown anchor={ref.current}></CdsDropdown>
    </>
  );
};

test('renders CdsDropwn', () => {
  render(<TestComponent />);
});
