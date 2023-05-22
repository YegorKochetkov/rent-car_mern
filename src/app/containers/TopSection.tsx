import Button from 'app/components/Button/Button';
import Slogan from 'app/components/Slogan/Slogan';
import McLaren from 'app/components/StandaloneCar/StandaloneCar';
import { motion } from 'framer-motion';
import React from 'react';
import tw from 'twin.macro';

const TopSectionContainer = tw.div`
	grid
	grid-cols-2
	w-full
	max-w-screen-2xl
	mb-20
	px-3
	lg:px-12
`;

const LeftContainer = tw.div`
	flex
	flex-col
	gap-4
`;

const RightContainer = tw.div`
	flex
	flex-col
	z-[-1]
`;

const ButtonsContainer = tw.div`
	flex flex-wrap justify-start gap-2 w-full text-base
`;

function TopSection() {
	return (
		<TopSectionContainer>
			<motion.div
				initial={{ opacity: 0, x: -200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
			>
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
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<RightContainer>
					<McLaren />
				</RightContainer>
			</motion.div>
		</TopSectionContainer>
	);
}

export default TopSection;
