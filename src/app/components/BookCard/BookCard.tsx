import React from 'react';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw from 'twin.macro';
import Button from '../Button/Button';

const CardContainer = tw.div`
		flex
		justify-center
		items-center
		gap-3
		px-2
		py-1
		md:px-6
		md:py-2
		text-xs
		md:text-sm
		rounded
		shadow
	`;

const ItemContainer = tw.div`
	flex
	items-center
`;

const Icon = tw.span`
	mr-1
	md:mr-3
	text-red-600
	fill-current
	text-xs
	md:text-base
`;

const Text = tw.span`
	text-gray-600
	text-xs
	md:text-sm
`;

const LineSeparator = tw.div`
	w-[2px]
	h-[2em]
	bg-gray-300
`;

const BookCardButton = tw(Button)`
	text-sm
`;

function BookCard() {
	return (
		<CardContainer>
			<ItemContainer>
				<Icon>
					<FontAwesomeIcon icon={faCalendarAlt} />
				</Icon>
				<Text>Pick Up Date</Text>
			</ItemContainer>
			<LineSeparator />
			<ItemContainer>
				<Icon>
					<FontAwesomeIcon icon={faCalendarAlt} />
				</Icon>
				<Text>Return Date</Text>
			</ItemContainer>
			<BookCardButton>
				Book your <span>Ride</span>
			</BookCardButton>
		</CardContainer>
	);
}

export default BookCard;
