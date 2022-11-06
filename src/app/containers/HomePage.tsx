import React from 'react';
import tw from 'twin.macro';
import NavBar from 'app/containers/NavBar';
import TopSection from './TopSection';
import BookCard from 'app/components/BookCard/BookCard';
import BookingSteps from './BookingSteps';
import AboutUs from './AboutUs';
import TopCars from './TopCars';

const PageContainer = tw.div`
	flex
	flex-col
	items-center
	w-full
	h-full
`;

function HomePage() {
	return (
		<PageContainer>
			<NavBar />
			<TopSection />
			<BookCard />
			<BookingSteps />
			<AboutUs />
			<TopCars />
		</PageContainer>
	);
}

export default HomePage;
