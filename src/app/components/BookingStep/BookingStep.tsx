import React, { ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw from 'twin.macro';

const StepContainer = tw.div`
	flex
	flex-col
	items-center
	basis-1/3
	hover:cursor-pointer
	[&>*]:transition-all
	[&>h3]:hover:text-red-600
	[&>div]:hover:shadow-lg
	[&>div]:active:shadow-inner
`;

const StepIcon = tw.div`
	flex
	items-center
	justify-center
	p-6
	rounded-lg
	shadow-md
	text-red-600
	text-3xl
`;

const StepTitle = tw.h3`
	mt-4
	text-black
	text-base
	md:text-lg
	font-semibold
`;

const StepDescription = tw.p`
	w-10/12
	text-sm
	md:text-base
	text-center
	text-gray-600
	[&>span]:text-red-600
`;

type BookingStepProps = {
	icon: IconDefinition;
	title: string;
	children: ReactNode;
};

function BookingStep(props: BookingStepProps) {
	return (
		<StepContainer data-testid="step">
			<StepIcon>
				<FontAwesomeIcon icon={props.icon} />
			</StepIcon>
			<StepTitle>{props.title}</StepTitle>
			<StepDescription>{props.children}</StepDescription>
		</StepContainer>
	);
}

export default BookingStep;
