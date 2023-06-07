import React, { memo } from 'react';
import tw from 'twin.macro';

const LogoContainer = tw.a`
	flex
	items-center
	min-w-fit
	text-2xl
	font-bold
	md:text-3xl
	transition
	[&>span]:transition
	text-red-600
	hover:text-black
	[&>span]:text-black
	hover:[&>span]:text-red-600
`;

const LogoImage = tw.img`
	h-8
	md:h-9
	mr-1
`;

function Logo() {
	return (
		<LogoContainer href={process.env.PUBLIC_URL + '/#'}>
			<LogoImage
				src={process.env.PUBLIC_URL + '/assets/images/logo.svg'}
				alt="Car shape in circle"
			/>
			Rent<span>Car</span>.
		</LogoContainer>
	);
}

export default memo(Logo);
