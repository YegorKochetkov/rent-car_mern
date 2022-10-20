import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from 'app/containers/NavBar';
import HomePage from 'app/containers/HomePage';
import TopSection from 'app/containers/TopSection';

test('render menu', () => {
	render(<NavBar />);
	const linkElement = screen.getByText(/rent/i);
	expect(linkElement).toBeInTheDocument();
});

test('render main', () => {
	render(<HomePage />);
	const paragraph = screen.getByText(/lorem/i);
	expect(paragraph).toBeInTheDocument();
});

test('render top section', () => {
	render(<TopSection />);
	const buttonElement = screen.getByText(/rent the best/i);
	expect(buttonElement).toBeInTheDocument();
});
