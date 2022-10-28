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

const SmallText = tw.span`
	text-inherit
	text-sm
	font-thin
`;

const DailyPrice = tw.h5`
	text-red-600
	font-bold
	text-base
`;

const MonthlyPrice = tw.h5`
	text-gray-600
	font-bold
	text-base
`;

const SmallIcon = tw.div`
	text-gray-400
	text-sm
	mr-1
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
					<SmallText>/Day</SmallText>
				</DailyPrice>
				<MonthlyPrice>
					{monthlyPrice}
					<SmallText>/Month</SmallText>
				</MonthlyPrice>
			</PricesContainer>
			<Separator />
			<CarDetailsContainer>
				<CarDetail>
					<SmallIcon>
						<FontAwesomeIcon icon={faTachometerAlt} />
					</SmallIcon>
					<CarInfo>{mileage}</CarInfo>
				</CarDetail>
				<CarDetail>
					<SmallIcon>
						<FontAwesomeIcon icon={faGears} />
					</SmallIcon>
					<CarInfo>{gearType}</CarInfo>
				</CarDetail>
				<CarDetail>
					<SmallIcon>
						<FontAwesomeIcon icon={faFillDrip} />
					</SmallIcon>
					<CarInfo>{gas}</CarInfo>
				</CarDetail>
			</CarDetailsContainer>
			<RentButton>Rent now</RentButton>
		</CarContainer>
	);
}

export default Car;
