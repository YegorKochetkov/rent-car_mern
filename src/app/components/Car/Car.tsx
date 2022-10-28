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
	flex
	flex-col
	items-center
	w-[10em]
	p-3
	pb-4
	rounded-md
	shadow-md
	hover:shadow-lg
	bg-white
	[&>button]:text-base
	[&>button]:w-full
`;

const CarThumbnail = tw.div`
	w-full
	h-full
`;

const CarName = tw.h3`
	text-base
	font-bold
	text-black
	m-1
`;

const PricesContainer = tw.div`
	w-full
	flex
	gap-4
	justify-start
	mt-3
`;

const DailyPrice = tw.h5`
	text-red-600
	font-bold
	text-base
	[&>span]:text-inherit
	[&>span]:text-sm
	[&>span]:font-thin
`;

const MonthlyPrice = tw.h5`
	text-gray-600
	font-bold
	text-base
	[&>span]:text-inherit
	[&>span]:text-sm
	[&>span]:font-thin
`;

const CarDetailsContainer = tw.div`
	flex
	justify-between
	w-full
	mb-4
`;

const CarDetail = tw.p`
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
	min-w-full
	min-h-[1px]
	flex
	my-2
	bg-gray-300
`;

const RentButton = tw(Button)`
	min-w-full
	mt-5
	capitalize
`;

function Car(props: CarType) {
	const { name, thumbnail, dailyPrice, monthlyPrice, mileage, gearType, gas } =
		props;

	return (
		<CarContainer>
			<CarThumbnail>
				<img src={thumbnail} alt={`${name}`} />
			</CarThumbnail>
			<CarName>{name}</CarName>
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
				<CarDetail>
					<FontAwesomeIcon icon={faTachometerAlt} />
					<CarInfo>{mileage}</CarInfo>
				</CarDetail>
				<CarDetail>
					<FontAwesomeIcon icon={faGears} />
					<CarInfo>{gearType}</CarInfo>
				</CarDetail>
				<CarDetail>
					<FontAwesomeIcon icon={faFillDrip} />
					<CarInfo>{gas}</CarInfo>
				</CarDetail>
			</CarDetailsContainer>
			<RentButton>Rent now</RentButton>
		</CarContainer>
	);
}

export default Car;
