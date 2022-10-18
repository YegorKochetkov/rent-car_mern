import React from 'react';
import tw from 'twin.macro';

const MobileMenu = tw.ul`
	absolute
	top-0
	bottom-0
	left-0
	right-0
	flex
	flex-col
	items-center
	gap-4
	p-3
	list-none
	text-4xl
	bg-white
`;

const Menu = tw.ul`
	static
	flex
	flex-row
	items-baseline
	justify-end
	gap-5
	text-base
	bg-white
`;

const NavBarMenuItem = tw.li`
	text-black
	font-medium
	cursor-pointer
	transition
	hover:text-red-600
`;

const HamburgerButton = tw.button`
	self-end
	hover:text-red-600
`;

const MenuItems = () => (
	<>
		<NavBarMenuItem>
			<a href="/#">Home</a>
		</NavBarMenuItem>
		<NavBarMenuItem>
			<a href="/#">Cars</a>
		</NavBarMenuItem>
		<NavBarMenuItem>
			<a href="/#">Services</a>
		</NavBarMenuItem>
		<NavBarMenuItem>
			<a href="/#">Contact&nbsp;Us</a>
		</NavBarMenuItem>
	</>
);
//TODO: add useLockBodyScroll()
function NavBarMenu() {
	const isMobile = navigator.maxTouchPoints >= 1;

	return isMobile ? (
		<MobileMenu>
			<HamburgerButton>&#9776;</HamburgerButton>
			<MenuItems />
		</MobileMenu>
	) : (
		<Menu>
			<MenuItems />
		</Menu>
	);
}

export default NavBarMenu;
