import BookCard from 'app/components/BookCard/BookCard';
import NavBar from 'app/containers/NavBar';
import React from 'react';
import tw from 'twin.macro';
import AboutUs from './AboutUs';
import BookingSteps from './BookingSteps';
import FooterSection from './FooterSection';
import TopCars from './TopCars';
import TopSection from './TopSection';

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
			<FooterSection />
		</PageContainer>
	);
}

export default HomePage;
