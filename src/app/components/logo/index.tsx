import React from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import CarLogoImg from 'assets/images/car-logo.png';

const LogoContainer = tw(styled.div``)`
	flex
	items-center
`;

const LogoText = tw(styled.div``)`
	m-1
	text-xl
	md:text-2xl
	text-black
	font-bold
`;

const LogoImage = styled.img`
	height: 100%;
	width: auto;
`;

const LogoImageContainer = tw(styled.div``)`
	w-auto
	h-7
	md:h-8
`;

function Logo() {
	return (
		<LogoContainer>
			<LogoImageContainer>
				<LogoImage src={CarLogoImg} alt="Car shape in circle" />
			</LogoImageContainer>

			<LogoText>HolyCar.</LogoText>
		</LogoContainer>
	);
}

export default Logo;
