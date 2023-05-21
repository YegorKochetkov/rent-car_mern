import React, { ReactNode } from 'react';
import tw from 'twin.macro';

type ButtonProps = {
	theme?: 'outlined' | 'filled';
	children?: ReactNode;
	classes?: string;
	buttonType?: 'button' | 'submit' | 'reset' | undefined;
};

const BaseButton = tw.button`
	px-5
	py-3
	text-inherit
	text-white
	font-semibold
	[&[type]]:bg-red-600
	border
	rounded-md
	transition-all
	shadow
	hover:shadow-neutral-600
	active:shadow-inner
	active:shadow-neutral-600
	[&>span]:transition-all
	[&>span]:text-black
`;

const Outlined = tw(BaseButton)`
	[&[type]]:bg-transparent
	text-black
	hover:text-white
	hover:[&[type]]:bg-red-600
	[&>span]:text-red-600
	hover:[&>span]:text-black
`;

function Button(props: ButtonProps) {
	const { theme, children, classes, buttonType = 'button' } = props;

	if (theme === 'outlined')
		return (
			<Outlined className={classes} data-testid="button" type={buttonType}>
				{children}
			</Outlined>
		);

	return (
		<BaseButton className={classes} data-testid="button" type={buttonType}>
			{children}
		</BaseButton>
	);
}

export default Button;
