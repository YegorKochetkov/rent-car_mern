import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/world/i);
	const buttonElement = screen.getByText(/super button/i);
	expect(linkElement).toBeInTheDocument();
	expect(buttonElement).toBeInTheDocument();
});
