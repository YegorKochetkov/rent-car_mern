import React from 'react';
import Slogan from 'app/components/Slogan/Slogan';
import McLaren from 'app/components/StandaloneCar/StandaloneCar';
import tw from 'twin.macro';

const TopSectionContainer = tw.div`
	flex
	justify-between
	w-full
	min-h-[13em]
	max-w-screen-2xl
	my-5
	md:my-8
	lg:my-12
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
			<RightContainer>
				<McLaren />
			</RightContainer>
		</TopSectionContainer>
	);
}

export default TopSection;
