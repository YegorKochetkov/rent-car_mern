import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuItems from './MenuItems';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SCREENS } from 'app/helpers/screens';

const MobileMenu = styled.ul<{ isOpen: boolean }>`
	${tw`
		hidden
		absolute
		top-10
		bottom-0
		left-0
		right-0
		flex-col
		items-center
		gap-4
		p-3
		list-none
		text-4xl
		bg-white
		origin-top
		animate-open-menu
	`}
	${(props) => props.isOpen && tw`flex`}
`;

const Menu = tw.ul`
	static
	flex
	flex-row
	items-baseline
	justify-end
	gap-5
	text-2xl
`;

const HamburgerButton = tw.button`
	relative
	w-8
	h-8
	self-end
	hover:text-red-600
`;

//TODO: add useLockBodyScroll()
function NavBarMenu() {
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

	const toggleMobileMenu = () => {
		setIsOpenMobileMenu(!isOpenMobileMenu);
	};

	return isMobile ? (
		<React.Fragment>
			<HamburgerButton onClick={toggleMobileMenu}>&#9776;</HamburgerButton>
			<MobileMenu isOpen={isOpenMobileMenu}>
				<MenuItems />
			</MobileMenu>
		</React.Fragment>
	) : (
		<Menu>
			<MenuItems />
		</Menu>
	);
}

export default NavBarMenu;
