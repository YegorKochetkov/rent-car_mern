import React from 'react';
import tw from 'twin.macro';
import NavBarMenu from '../components/NavBarMenu/NavBarMenu';
import Logo from '../components/Logo/Logo';

const NavBarContainer = tw.menu`
	sticky
	top-0
	flex
	flex-row
	items-center
	justify-between
	w-full
	max-w-screen-2xl
	px-3
	py-2
	[&_div]:-mx-3
	lg:px-12
	md:text-3xl
bg-white/40
	backdrop-blur-sm
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
