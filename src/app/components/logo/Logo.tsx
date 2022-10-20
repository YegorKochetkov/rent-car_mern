import React from 'react';
import tw from 'twin.macro';
import CarLogoImg from 'assets/images/car-logo.png';

const LogoContainer = tw.a`
	flex
	items-center
	min-w-fit
	text-blue-500
`;

const LogoText = tw.p`
	text-black
	text-2xl
	md:text-3xl
	font-bold
`;

const LogoImage = tw.img`
	h-8
	md:h-9
	mr-1
`;

const AccentSpan = tw.span`text-red-600`;

function Logo() {
	return (
		<LogoContainer href="/">
			<LogoImage src={CarLogoImg} alt="Car shape in circle" />

			<LogoText>
				Rent<AccentSpan>Car</AccentSpan>.
			</LogoText>
		</LogoContainer>
	);
}

export default Logo;
