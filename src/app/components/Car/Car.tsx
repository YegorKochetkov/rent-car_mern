import React from 'react';
import { CarType } from 'app/types/car';
import tw from 'twin.macro';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFillDrip,
	faGears,
	faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';

const CarContainer = tw.div`
	relative
	grid
	grid-rows-[repeat(5, 1fr)]
	w-[14em]
	h-[9.5em]
	p-3
	rounded-md
	shadow-md
	hover:shadow-lg
	bg-white
	[&_button]:transition-all
	[&_button]:duration-500
	[&_button]:text-base
	[&_button]:w-[12em]
	hover:[&_button]:w-[12em]
	sm:[&_button]:w-full
	hover:[&>span]:w-[5em]
	sm:[&>span]:w-[14em]
	hover:[&>span]:h-full
`;

const CarThumbnail = tw.span`
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
	w-[8em]
	gap-x-3
	mb-8
`;

const CarDetails = tw.p`
	flex
	items-center
	[&>svg]:text-gray-400
	[&>svg]:text-sm
	[&>svg]:mr-1
`;

const CarInfo = tw.span`
	text-gray-400
	text-sm
`;

const Separator = tw.div`
	w-[8em]
	h-[1px]
	flex
	bg-gray-300
`;

const CarContent = tw.div`
	flex
	flex-col
	items-end
`;

function Car(props: CarType) {
	const { name, thumbnail, dailyPrice, monthlyPrice, mileage, gearType, gas } =
		props;

	return (
		<CarContainer data-testid="card">
			<CarThumbnail>
				<img src={thumbnail} alt={`${name}`} />
			</CarThumbnail>
			<CarContent>
				<CarName title={name}>{name}</CarName>
				<PricesContainer>
					<DailyPrice>
						{dailyPrice}
						<span>/Day</span>
					</DailyPrice>
					<MonthlyPrice>
						{monthlyPrice}
						<span>/Month</span>
					</MonthlyPrice>
				</PricesContainer>
				<Separator />
				<CarDetailsContainer>
					<CarDetails>
						<FontAwesomeIcon icon={faTachometerAlt} />
						<CarInfo>{mileage}</CarInfo>
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
	);
}

export default Car;
