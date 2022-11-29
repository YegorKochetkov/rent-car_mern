import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const Button = styled.button<{ isOpen: boolean }>`
	${tw`
		relative
		w-8
		h-8
		self-end
		transition-colors
		[&>div]:hover:bg-red-600
		[&>div]:before:hover:bg-red-600
		[&>div]:after:hover:bg-red-600
	`}
	${(props) =>
		props.isOpen &&
		tw`
		[&>div]:bg-transparent
		[&>div]:hover:bg-transparent
		[&>div]:rotate-[-360deg]
		[&>div]:before:translate-y-0
		[&>div]:before:rotate-45
		[&>div]:after:translate-y-0
		[&>div]:after:-rotate-45
	`}
`;

const ButtonLines = tw.div`
	absolute
	top-4
	-mt-0.5
	h-1
	w-8
	rounded
	bg-black
	before:absolute
	before:h-1
	before:w-8
	before:-translate-y-3
	before:-translate-x-4
	before:rounded
	before:bg-black
	before:content-['']
	after:absolute
	after:h-1
	after:w-8
	after:translate-y-3
	after:-translate-x-4
	after:rounded
	after:bg-black
	after:content-['']
	[transition:transform_500ms]
`;

type Props = {
	toggleMenu: () => void;
	isOpen: boolean;
};

function HamburgerButton({ toggleMenu, isOpen }: Props) {
	return (
		<Button onClick={toggleMenu} isOpen={isOpen}>
			<ButtonLines />
		</Button>
	);
}

export default HamburgerButton;
