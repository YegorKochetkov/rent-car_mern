import React from 'react';
import tw from 'tailwind-styled-components';
import { TailwindComponent } from 'tailwind-styled-components/dist/tailwind';
import Logo from '../logo';

const NavBarContainer: TailwindComponent<any> = tw.div`
	flex
	flex-row
	items-center
	justify-between
	w-full
	max-w-2xl
`;

function NavBar() {
	return (
		<NavBarContainer>
			<Logo />
		</NavBarContainer>
	);
}

export default NavBar;
