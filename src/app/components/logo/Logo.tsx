import React from 'react';
import tw from 'twin.macro';
import CarLogoImg from 'assets/images/car-logo.png';

const LogoContainer = tw.a`
	flex
	items-center
	min-w-fit
	text-2xl
	font-bold
	md:text-3xl
	text-black
	transition
	hover:text-red-600
	[&>span]:transition
	[&>span]:text-red-600
	[&>span]:hover:text-black
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
