import React from 'react';
import {
	faCalendarAlt,
	faCarSide,
	faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import tw from 'twin.macro';
import BookingStep from 'app/components/BookingStep/BookingStep';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from 'app/helpers/screens';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Wrapper = tw.div`
	w-full
	flex
	flex-col
	items-center
	gap-7
	mb-16
	py-3
	lg:py-6
`;

const Title = tw.h2`
	text-2xl
	md:text-4xl
	text-black
	font-bold
	capitalize
`;

const StepsContainer = tw.div`
	flex
	flex-col
	sm:flex-row
	justify-evenly
	gap-5
	sm:gap-0
	lg:mt-16
`;

const steps = [
	<BookingStep icon={faMapMarkedAlt} title="Choose Location">
		Find the nearest <span>Rent</span>Car<span>.</span> point and book your car.
	</BookingStep>,
	<BookingStep icon={faCalendarAlt} title="Pick-Up Date">
		Pickup the Best Date to rent a car for you.
	</BookingStep>,
	<BookingStep icon={faCarSide} title="Book Your Car">
		Book your nice car with ease in one single click.
	</BookingStep>,
];

function BookingSteps() {
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	return (
		<Wrapper>
			<Title>Our working steps</Title>
			{isMobile ? (
				<AliceCarousel disableButtonsControls mouseTracking items={steps} />
			) : (
				<StepsContainer>
					{steps.map((step, index) => (
						<div key={index}>{step}</div>
					))}
				</StepsContainer>
			)}
		</Wrapper>
	);
}

export default BookingSteps;
