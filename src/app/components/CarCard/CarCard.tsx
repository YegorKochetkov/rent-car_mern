import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, Variants } from 'framer-motion';
import { Car } from 'gql/graphql';
import React from 'react';
import tw from 'twin.macro';
import Button from '../Button/Button';
import {
	faFillDrip,
	faGears,
	faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';

const CarContainer = tw.div`
	relative
	grid
	grid-rows-[repeat(5, 1fr)]
	w-[12em]
	sm:w-[15em]
	h-[9.5em]
	p-3
	rounded-md
	shadow-md
	hover:shadow-lg
	bg-white
	[&_button]:transition-all
	[&_button]:duration-500
	[&_button]:text-base
	[&_button]:w-[9em]
	sm:[&&_button]:w-full
	sm:hover:[&&_button]:w-[13.5em]
	hover:[&>picture]:w-[5em]
	sm:[&>picture]:w-[15em]
	hover:[&>picture]:h-full
`;

const CarThumbnail = tw.picture`
	absolute
	inset-0
	w-[5em]
	h-full
	backdrop-blur-lg
	flex
	justify-center
	items-center
	overflow-hidden
	rounded-l-md
	shadow
	transition-all
	duration-500
`;

const CarName = tw.h3`
	text-base
	font-bold
	text-black
	w-[12em]
	text-right
	mb-6
	truncate
`;

const PricesContainer = tw.div`
	flex
	flex-col
	gap-1
	self-end
`;

const DailyPrice = tw.h5`
	text-red-600
	font-bold
	text-base
	text-right
	[&>span]:text-inherit
	[&>span]:text-sm
	[&>span]:font-thin
`;

const MonthlyPrice = tw.h5`
	text-gray-600
	font-bold
	text-base
	text-right
	[&>span]:text-inherit
	[&>span]:text-sm
	[&>span]:font-thin
`;

const CarDetailsContainer = tw.div`
	flex
	flex-wrap
	justify-between
	w-[6em]
	sm:w-[9em]
	mt-1
	mb-3
	sm:mb-7
`;

const CarDetails = tw.p`
	flex
	items-center
	capitalize
	[&>svg]:text-gray-400
	[&>svg]:text-sm
	[&>svg]:mr-1
`;

const CarInfo = tw.span`
	text-gray-400
	text-sm
`;

const Separator = tw.div`
	w-[9em]
	h-[1px]
	flex
	bg-gray-300
`;

const CarContent = tw.div`
	flex
	flex-col
	items-end
`;

const carCardVariants: Variants = {
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	offscreen: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

function CarCard(props: Car) {
	const { name, thumbnail, dailyPrice, monthlyPrice, mileage, gearType, gas } =
		props;

	const formattedDailyPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		currencySign: 'accounting',
		maximumFractionDigits: 0,
	}).format(dailyPrice);

	const formattedMonthlyPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		currencySign: 'accounting',
		maximumFractionDigits: 0,
	}).format(monthlyPrice);

	const formattedMileage = new Intl.NumberFormat('en-US', {
		notation: 'compact',
		compactDisplay: 'short',
	}).format(mileage);

	return (
		<motion.div variants={carCardVariants}>
			<CarContainer data-testid="card">
				<CarThumbnail>
					<source
						srcSet={process.env.PUBLIC_URL + `/assets/images/${thumbnail.sm}`}
						media="(min-width: 640px)"
					/>
					<img
						src={process.env.PUBLIC_URL + `/assets/images/${thumbnail.xs}`}
						alt={`${name}`}
					/>
				</CarThumbnail>
				<CarContent>
					<CarName title={name}>{name}</CarName>
					<PricesContainer>
						<DailyPrice>
							{formattedDailyPrice}
							<span>/Day</span>
						</DailyPrice>
						<MonthlyPrice>
							{formattedMonthlyPrice}
							<span>/Month</span>
						</MonthlyPrice>
					</PricesContainer>
					<Separator />
					<CarDetailsContainer>
						<CarDetails>
							<FontAwesomeIcon icon={faTachometerAlt} />
							<CarInfo>{formattedMileage}</CarInfo>
						</CarDetails>
						<CarDetails>
							<FontAwesomeIcon icon={faGears} />
							<CarInfo>{gearType}</CarInfo>
						</CarDetails>
						<CarDetails>
							<FontAwesomeIcon icon={faFillDrip} />
							<CarInfo>{gas}</CarInfo>
						</CarDetails>
					</CarDetailsContainer>
					<Button>Rent now</Button>
				</CarContent>
			</CarContainer>
		</motion.div>
	);
}

export default CarCard;
