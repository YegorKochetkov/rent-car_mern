import Slogan from 'app/components/Slogan/Slogan';
import React from 'react';
import tw from 'twin.macro';

const TopSectionContainer = tw.div`
	flex
	justify-between
	min-h-screen
	w-full
	max-w-screen-2xl
	mt-4
	md:mt-8
	lg:mt-12
	lg:px-12
	px-3
`;

const LeftContainer = tw.div`
	flex
	flex-col
	w-1/2
`;

const RightContainer = tw.div`
	relative
	flex
	flex-col
	w-1/2
`;

function TopSection() {
	return (
		<TopSectionContainer>
			<LeftContainer>
				<Slogan />
			</LeftContainer>
			<RightContainer></RightContainer>
		</TopSectionContainer>
	);
}

export default TopSection;
