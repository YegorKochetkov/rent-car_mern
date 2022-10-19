import React from 'react';
import tw from 'twin.macro';
import NavBarMenu from './NavBarMenu';
import Logo from '../Logo/Logo';

const NavBarContainer = tw.menu`
	flex
	flex-row
	items-center
	justify-between
	w-full
	max-w-screen-2xl
	px-2
	py-1
	lg:px-12
	md:text-3xl
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
