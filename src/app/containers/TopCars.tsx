import CarCard from 'app/components/CarCard/CarCard';
import { mockCars } from 'app/helpers/mockCars';
import carService from 'app/services/carService';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { selectTopCars, setTopCars } from 'app/store/slices/topCarsSlice';
import { motion, Variants } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const TopCarContainer = tw.div`
	flex
	flex-col
	items-center
	justify-center
	max-w-screen-2xl
	px-3
	lg:px-12
	mb-12
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

const CarsContainer = styled(motion.div)`
	${tw`
		grid
		grid-cols-1
		md:grid-cols-2
		xl:grid-cols-3
		gap-4
		transition-all
	`}
`;

const motionVariants: Variants = {
	onscreen: {
		transition: { staggerChildren: 0.05, delayChildren: 0.2 },
	},
	offscreen: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

function TopCars() {
	const dispatch = useAppDispatch();
	const cars = useAppSelector(selectTopCars);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchTopCars = async () => {
			setIsLoading(true);

			const cars = await carService
				.getCars()
				.catch((error) => console.log('Error fetching cars: ', error));

			if (cars) {
				dispatch(setTopCars(cars));
			}

			// Fallback while backend don't ready;
			// remove when backend is ready
			if (!cars) {
				dispatch(setTopCars(mockCars));
			}

			setIsLoading(false);
		};

		fetchTopCars();
	}, [cars, dispatch]);

	if (isLoading) {
		return <h3>Loading...</h3>;
	}

	if (cars.length === 0) {
		return <h3>No cars :(</h3>;
	}

	return (
		<TopCarContainer id="cars">
			<Title>Explore our top deals</Title>
			<CarsContainer
				variants={motionVariants}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.1 }}
			>
				{cars.length > 0 &&
					cars.map((car) => <CarCard {...car} key={car.id} />)}
			</CarsContainer>
		</TopCarContainer>
	);
}

export default TopCars;
