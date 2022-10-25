import React from 'react';
import Slogan from 'app/components/Slogan/Slogan';
import McLaren from 'app/components/StandaloneCar/StandaloneCar';
import tw from 'twin.macro';
import Button from 'app/components/Button/Button';

const TopSectionContainer = tw.div`
	flex
	justify-between
	w-full
	min-h-[11em]
	widescreen:min-h-[80vh]
	widescreen:md:min-h-[13em]
	max-w-screen-2xl
	px-3
	lg:px-12
	mb-10
`;

const LeftContainer = tw.div`
	flex
	flex-col
	gap-4
	w-1/2
`;

const RightContainer = tw.div`
	relative
	flex
	flex-col
	w-1/2
	-z-1
`;
const ButtonsContainer = tw.div`flex flex-wrap justify-start gap-2 w-full text-base`;

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
