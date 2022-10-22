import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuItems from '../MenuItems/MenuItems';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SCREENS } from 'app/helpers/screens';
import lockBodyScroll from 'app/helpers/lockBodyScroll';
import HamburgerButton from '../HamburgerButton/HamburgerButton';

const Wrapper = tw.div`relative flex justify-end w-full`;

const MobileMenu = styled.ul<{ isOpen: boolean }>`
	${tw`
		hidden
		absolute
		top-10
		w-screen
		h-screen
		flex-col
		items-center
		gap-4
		pt-4
		pb-12
		list-none
		text-4xl
		bg-white
		origin-top
		animate-open-menu
		overflow-y-scroll
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
		<Wrapper>
			<HamburgerButton
				toggleMenu={toggleMobileMenu}
				isOpen={isOpenMobileMenu}
			/>
			<MobileMenu isOpen={isOpenMobileMenu}>
				<MenuItems />
			</MobileMenu>
		</Wrapper>
	) : (
		<Menu>
			<MenuItems />
		</Menu>
	);
}

export default NavBarMenu;
