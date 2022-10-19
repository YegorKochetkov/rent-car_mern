import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from 'app/components/NavBar/NavBar';
import HomePage from 'app/containers/HomePage/HomePage';

test('render menu', () => {
	render(<NavBar />);
	const linkElement = screen.getByText(/rent/i);
	expect(linkElement).toBeInTheDocument();
});

test('render main', () => {
	render(<HomePage />);
	const buttonElement = screen.getByText(/super button/i);
	expect(buttonElement).toBeInTheDocument();
});
