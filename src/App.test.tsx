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

test('render main', () => {
	render(<HomePage />);
	const paragraph = screen.getByText(/lorem/i);
	expect(paragraph).toBeInTheDocument();
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
	render(<HomePage />);
	const buttons = screen.getAllByTestId('button');
	expect(buttons).toHaveLength(3);
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
