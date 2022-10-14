import React from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import Logo from '../logo';

const NavBarContainer = tw(styled.div``)`
	flex
	flex-row
	items-center
	justify-between
	w-full
	max-w-2xl
	lg:pl-12
	lg:pr-12
`;

function NavBar() {
	return (
		<NavBarContainer>
			<Logo />
		</NavBarContainer>
	);
}

export default NavBar;
