import React from 'react';
import tw from 'twin.macro';

const Menu = tw.ul`
	flex
	list-none
`;

const NavBarMenuItem = tw.li`
	text-black
	font-medium
	mr-1
	md:mr-5
	cursor-pointer
	transition
	hover:text-red-600
`;

function NavBarMenu() {
	return (
		<Menu>
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
				<a href="/#">Contact Us</a>
			</NavBarMenuItem>
		</Menu>
	);
}

export default NavBarMenu;
