import React from 'react';
import tw from 'twin.macro';

const Button = tw.button`
	m-1
	p-3
	rounded-md
	bg-slate-100
	shadow
	shadow-gray-400/50
	transition
	hover:shadow
	hover:shadow-gray-600/60
	active:shadow-inner
	active:shadow-gray-600/60
`;

const AccentSpan = tw.span`text-red-600`;

function PrimaryButton() {
	return (
		<Button>
			Super button<AccentSpan>text</AccentSpan>
		</Button>
	);
}

export default PrimaryButton;
