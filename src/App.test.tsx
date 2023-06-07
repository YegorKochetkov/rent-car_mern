import { render, screen } from '@testing-library/react';
import BookCard from 'app/components/BookCard/BookCard';
import CarCard from 'app/components/CarCard/CarCard';
import AboutUs from 'app/containers/AboutUs';
import BookingSteps from 'app/containers/BookingSteps';
import NavBar from 'app/containers/NavBar';
import TopSection from 'app/containers/TopSection';
import React from 'react';
import 'react-intersection-observer/test-utils';

test('render menu', () => {
	render(<NavBar />);
	const nav = screen.getByText(/rent/i);
	expect(nav).toBeInTheDocument();
});

test('render about us', () => {
	render(<AboutUs />);
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
	render(<BookCard />);
	const bookCard = screen.getByText(/return date/i);
	expect(bookCard).toBeInTheDocument();
});

test('render booking steps', () => {
	render(<BookingSteps />);
	const steps = screen.getAllByTestId('step');
	expect(steps).toHaveLength(3);
});

test('render car card', () => {
	const mockCar = {
		id: 'sdfasdf',
		name: 'Rolls-Royce Ghost',
		mileage: 2000,
		thumbnail: {
			id: 'ksdfsa',
			xs: 'rolls_royce_120.png',
			sm: 'rolls_royce.png',
		},
		dailyPrice: 150,
		monthlyPrice: 3600,
		gearType: 'auto',
		gas: 'petrol',
	};

	render(<CarCard {...mockCar} />);
	const card = screen.getByTestId('card');
	expect(card).toHaveTextContent(/Rolls-Royce/i);
});
