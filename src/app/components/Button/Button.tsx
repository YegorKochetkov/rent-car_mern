import React, { ReactNode } from 'react';
import tw from 'twin.macro';

type ButtonProps = {
	theme?: 'outlined' | 'filled';
	children?: ReactNode;
};

const BaseButton = tw.button`
	px-5
	py-3
	text-lg
	text-white
	font-semibold
	bg-red-600
	border
	rounded-md
	transition-all
	shadow
	hover:shadow-neutral-600
	active:shadow-inner
	active::shadow-neutral-600
	[&>span]:transition-all
	[&>span]:text-black
`;

const Outlined = tw(BaseButton)`
	bg-transparent
	text-black
	hover:text-white
	hover:bg-red-600
	[&>span]:text-red-600
	[&>span]:hover:text-black
`;

function Button(props: ButtonProps) {
	const { theme, children } = props;
	if (theme === 'outlined') return <Outlined>{children}</Outlined>;

	return <BaseButton>{children}</BaseButton>;
}

export default Button;
