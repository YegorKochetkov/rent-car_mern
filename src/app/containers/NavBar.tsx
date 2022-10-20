import React from 'react';
import tw from 'twin.macro';
import NavBarMenu from '../components/NavBar/NavBarMenu';
import Logo from '../components/Logo/Logo';

const NavBarContainer = tw.menu`
	relative
	flex
	flex-row
	items-center
	justify-between
	w-full
	max-w-screen-2xl
	px-2
	py-1
	[&_div]:-mx-2
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
