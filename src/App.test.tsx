import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from 'app/containers/NavBar';
import HomePage from 'app/containers/HomePage';
import TopSection from 'app/containers/TopSection';

test('render menu', () => {
	render(<NavBar />);
	const nav = screen.getByText(/rent/i);
	expect(nav).toBeInTheDocument();
});

test('render about us', () => {
	render(<HomePage />);
	const header = screen.getByText(
		/Feel the best experience with out rent deal/i,
	);
	expect(header).toBeInTheDocument();
});

test('render top slogan', () => {
	render(<TopSection />);
	const slogan = screen.getByText(/rent the best/i);
	expect(slogan).toBeInTheDocument();
});

test('render top standalone car', () => {
	render(<TopSection />);
	const blob = screen.getByAltText(/abstract/i);
	expect(blob).toBeInTheDocument();
});

test('render buttons', () => {
	render(<TopSection />);
	const buttons = screen.getAllByTestId('button');
	expect(buttons).toHaveLength(2);
});

test('render book card', () => {
	render(<HomePage />);
	const bookCard = screen.getByText(/return date/i);
	expect(bookCard).toBeInTheDocument();
});

test('render booking steps', () => {
	render(<HomePage />);
	const steps = screen.getAllByTestId('step');
	expect(steps).toHaveLength(3);
});

test('render car card', () => {
	render(<HomePage />);
	const cards = screen.getAllByTestId('card');
	expect(cards).toHaveLength(8);
});
