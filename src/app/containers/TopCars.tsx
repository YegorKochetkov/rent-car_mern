import React from 'react';
import tw from 'twin.macro';
import Car from 'app/components/Car/Car';
import { Cars } from 'app/helpers/cars';

const TopCarContainer = tw.div`
	flex
	flex-col
	items-center
	justify-center
	max-w-screen-2xl
	px-3
	lg:px-12
	mb-10
`;

const Title = tw.h2`
	text-3xl
	lg:text-5xl
	text-black
	font-extrabold
	capitalize
	mb-7
	md:mb-10
`;

const CarsContainer = tw.div`
	grid
	grid-cols-1
	md:grid-cols-2
	xl:grid-cols-3
	2xl:grid-cols-4
	gap-4
	transition-all
`;

function TopCars() {
	return (
		<TopCarContainer>
			<Title>Explore our top deals</Title>
			<CarsContainer>
				{Cars.map((car) => (
					<Car {...car} key={car.name} />
				))}
			</CarsContainer>
		</TopCarContainer>
	);
}

export default TopCars;
