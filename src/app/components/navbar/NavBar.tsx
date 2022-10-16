import React from 'react';
import tw from 'twin.macro';
import NavBarMenu from './NavBarMenu';
import Logo from '../logo/Logo';

const NavBarContainer = tw.div`
	flex
	flex-row
	items-center
	justify-between
	w-full
	max-w-screen-2xl
	lg:pr-12
	lg:pl-12
`;

function NavBar() {
	return (
		<NavBarContainer>
			<Logo />
			<NavBarMenu />
		</NavBarContainer>
	);
}

export default NavBar;
