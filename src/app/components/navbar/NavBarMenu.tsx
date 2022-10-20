import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuItems from '../MenuItems/MenuItems';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SCREENS } from 'app/helpers/screens';
import lockBodyScroll from 'app/helpers/lockBodyScroll';
import HamburgerButton from '../HamburgerButton/HamburgerButton';

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

function NavBarMenu() {
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

	const toggleMobileMenu = () => {
		setIsOpenMobileMenu(!isOpenMobileMenu);
		lockBodyScroll(!isOpenMobileMenu);
	};

	return isMobile ? (
		<React.Fragment>
			<HamburgerButton
				toggleMenu={toggleMobileMenu}
				isOpen={isOpenMobileMenu}
			/>
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
