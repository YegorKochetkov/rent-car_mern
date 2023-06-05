import lockBodyScroll from 'app/helpers/lockBodyScroll';
import { SCREENS } from 'app/helpers/screens';
import React, { memo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import tw from 'twin.macro';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import MenuItems from '../MenuItems/MenuItems';

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
		pb-14
		list-none
		text-4xl
		bg-white
		origin-top
		animate-open-menu
		overflow-y-auto
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
	pr-3
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

export default memo(NavBarMenu);
