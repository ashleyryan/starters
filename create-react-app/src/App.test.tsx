import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

test('disabled button cant be clicked', async () => {
  const user = userEvent.setup();
  render(<App />);

  const alertElement = document.querySelector('cds-alert');
  expect(alertElement).not.toBeInTheDocument();

  const buttonElement = await screen.findByRole('button', { name: 'Show Alert' });

  // the button is disabled
  expect(buttonElement).toBeDisabled();

  await user.click(buttonElement);

  expect(document.querySelector('cds-alert')).not.toBeInTheDocument();
});
