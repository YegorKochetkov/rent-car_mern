import React, { memo } from 'react';
import tw from 'twin.macro';

const NavBarMenuItem = tw.li`
w-full
	text-black
	text-center
	font-medium
	cursor-pointer
	transition
	hover:text-red-600
`;

function MenuItems() {
	return (
		<React.Fragment>
			<NavBarMenuItem>
				<a href={`${process.env.PUBLIC_URL}/#`}>Home</a>
			</NavBarMenuItem>
			<NavBarMenuItem>
				<a href={`${process.env.PUBLIC_URL}/#cars`}>Cars</a>
			</NavBarMenuItem>
			<NavBarMenuItem>
				<a href={`${process.env.PUBLIC_URL}/#`}>Services</a>
			</NavBarMenuItem>
			<NavBarMenuItem>
				<a href={`${process.env.PUBLIC_URL}/#contacts`}>Contact&nbsp;Us</a>
			</NavBarMenuItem>
		</React.Fragment>
	);
}

export default memo(MenuItems);
