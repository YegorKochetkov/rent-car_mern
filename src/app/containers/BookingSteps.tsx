import React from 'react';
import {
	faCalendarAlt,
	faCarSide,
	faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import tw from 'twin.macro';
import BookingStep from 'app/components/BookingStep/BookingStep';

const Wrapper = tw.div`
	w-full
	flex
	flex-col
	items-center
	py-3
	lg:py-6
`;

const Title = tw.h2`
	text-2xl
	md:text-4xl
	text-black
	font-bold
`;

const StepsContainer = tw.div`
	flex
	justify-evenly
	gap-6
	flex-wrap
	mt-7
	lg:mt-16
`;

function BookingSteps() {
	return (
		<Wrapper>
			<Title>Our Working Steps</Title>
			<StepsContainer>
				<BookingStep icon={faMapMarkedAlt} title="Choose Location">
					Find the nearest <span>Rent</span>Car<span>.</span> point and book
					your car.
				</BookingStep>
				<BookingStep icon={faCalendarAlt} title="Pick-Up Date">
					Pickup the Best Date to rent a car for you.
				</BookingStep>
				<BookingStep icon={faCarSide} title="Book Your Car">
					Book your nice car with ease in one single click.
				</BookingStep>
			</StepsContainer>
		</Wrapper>
	);
}

export default BookingSteps;
