import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import {
	faCalendarAlt,
	faCaretDown,
	faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from 'react-calendar';
import Button from '../Button/Button';
import './Calendar.css';

const CardContainer = tw.div`
	relative
	flex
	justify-center
	items-center
	gap-3
	px-2
	py-1
	md:px-6
	md:py-2
	mb-10
	text-xs
	md:text-sm
	rounded
	shadow-md
`;

const ItemContainer = tw.div`
	flex
	flex-col
	flex-nowrap
	items-center
	gap-2
	sm:flex-row
	md:gap-3
	px-2
	py-1
	rounded
	cursor-pointer
	hover:shadow
	active:shadow-inner
`;

const ItemWrapper = tw.div`
	sm:relative
`;

const Icon = tw.span`
	text-red-600
	fill-current
	text-xs
	md:text-base
`;

const SmallArrowIcon = tw.span`
	text-gray-500
	fill-current
	text-xs
	md:text-base
`;

const Text = tw.span`
	min-w-fit
	text-gray-600
	text-xs
	md:text-sm
	select-none
	text-center
`;

const LineSeparator = tw.div`
	w-[2px]
	h-[2em]
	bg-gray-300
`;

const DateCalendar = styled(Calendar)`
	${tw`
		absolute
		top-[7em]
		sm:top-[3.5em]
		left-[-0.5em]
		w-fit
		max-w-none
		select-none
	`}
`;

const BookCardButton = tw(Button)`
	text-sm
`;

function BookCard() {
	const [startDate, setStartDate] = useState(new Date());
	const [isStartDateOpen, setStartDateOpen] = useState(false);
	const [returnDate, setReturnDate] = useState(new Date());
	const [isReturnDateOpen, setReturnDateOpen] = useState(false);

	const toggleStartDateCalendar = () => {
		setStartDateOpen(!isStartDateOpen);
		if (isReturnDateOpen) setReturnDateOpen(false);
	};

	const toggleReturnDateCalendar = () => {
		setReturnDateOpen(!isReturnDateOpen);
		if (isStartDateOpen) setStartDateOpen(false);
	};

	return (
		<CardContainer>
			<ItemWrapper>
				<ItemContainer onClick={toggleStartDateCalendar}>
					<Icon>
						<FontAwesomeIcon icon={faCalendarAlt} />
					</Icon>
					<Text>Pick-Up Date</Text>
					<SmallArrowIcon>
						<FontAwesomeIcon icon={isStartDateOpen ? faCaretUp : faCaretDown} />
					</SmallArrowIcon>
				</ItemContainer>
				{isStartDateOpen && (
					<DateCalendar value={startDate} onChange={setStartDate} />
				)}
			</ItemWrapper>
			<LineSeparator />
			<ItemWrapper>
				<ItemContainer onClick={toggleReturnDateCalendar}>
					<Icon>
						<FontAwesomeIcon icon={faCalendarAlt} />
					</Icon>
					<Text>Return Date</Text>
					<SmallArrowIcon>
						<FontAwesomeIcon
							icon={isReturnDateOpen ? faCaretUp : faCaretDown}
						/>
					</SmallArrowIcon>
				</ItemContainer>
				{isReturnDateOpen && (
					<DateCalendar value={returnDate} onChange={setReturnDate} />
				)}
			</ItemWrapper>
			<BookCardButton>
				Book your <span>Ride</span>
			</BookCardButton>
		</CardContainer>
	);
}

export default BookCard;
