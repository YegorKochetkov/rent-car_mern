import React from 'react';
import tw from 'tailwind-styled-components';
import { TailwindComponent } from 'tailwind-styled-components/dist/tailwind';
import CarLogoImg from 'assets/images/car-logo.png';

const LogoContainer: TailwindComponent<any> = tw.div`
	flex
	items-center
	p-1
`;

const LogoText: TailwindComponent<any> = tw.p`
	text-xl
	md:text-2xl
	text-black
	font-bold
`;

const LogoImage: TailwindComponent<any> = tw.img`
	h-7
	md:h-8
	mr-1
`;

const AccentSpan: TailwindComponent<any> = tw.span`text-red-500`;

function Logo() {
	return (
		<LogoContainer>
			<LogoImage src={CarLogoImg} alt="Car shape in circle" />

			<LogoText>
				Holy<AccentSpan>Car</AccentSpan>.
			</LogoText>
		</LogoContainer>
	);
}

export default Logo;
