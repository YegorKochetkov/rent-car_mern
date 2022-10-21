import React from 'react';
import Slogan from 'app/components/Slogan/Slogan';
import McLaren from 'app/components/StandaloneCar/StandaloneCar';
import tw from 'twin.macro';
import Button from 'app/components/Button/Button';

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

const ButtonsContainer = tw.div`flex flex-wrap gap-3 mt-7`;

function TopSection() {
	return (
		<TopSectionContainer>
			<LeftContainer>
				<Slogan />
				<ButtonsContainer>
					<Button>
						Book your <span>Ride</span>
					</Button>
					<Button theme="outlined">
						Sell your <span>Car</span>
					</Button>
				</ButtonsContainer>
			</LeftContainer>
			<RightContainer>
				<McLaren />
			</RightContainer>
		</TopSectionContainer>
	);
}

export default TopSection;
