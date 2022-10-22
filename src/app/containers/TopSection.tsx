import React from 'react';
import Slogan from 'app/components/Slogan/Slogan';
import McLaren from 'app/components/StandaloneCar/StandaloneCar';
import tw from 'twin.macro';

const TopSectionContainer = tw.div`
	flex
	justify-between
	w-full
	min-h-[11em]
	widescreen:min-h-[90vh]
	widescreen:md:min-h-[14em]
	max-w-screen-2xl
	px-3
	lg:px-12
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
	-z-30
`;

function TopSection() {
	return (
		<TopSectionContainer>
			<LeftContainer>
				<Slogan />
			</LeftContainer>
			<RightContainer>
				<McLaren />
			</RightContainer>
		</TopSectionContainer>
	);
}

export default TopSection;
