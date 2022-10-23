import React from 'react';
import tw from 'twin.macro';
import CarLogoImg from 'assets/images/logo.svg';

const LogoContainer = tw.a`
	flex
	items-center
	min-w-fit
	text-2xl
	font-bold
	md:text-3xl

	text-red-600
	transition
	hover:text-black
	[&>span]:transition
	[&>span]:text-black
	[&>span]:hover:text-red-600
`;

const LogoImage = tw.img`
	h-8
	md:h-9
	mr-1
`;

function Logo() {
	return (
		<LogoContainer href="/">
			<LogoImage src={CarLogoImg} alt="Car shape in circle" />
			Rent<span>Car</span>.
		</LogoContainer>
	);
}

export default Logo;
