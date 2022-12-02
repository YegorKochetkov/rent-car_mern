import React, { useCallback, useEffect, useState } from 'react';
import tw from 'twin.macro';
import NavBarMenu from '../components/NavBarMenu/NavBarMenu';
import Logo from '../components/Logo/Logo';
import styled from 'styled-components';

const NavBarContainer = styled.menu<{ reduceHeight: boolean }>`
	${tw`
		sticky
		top-0
		flex
		flex-row
		items-center
		justify-between
		w-full
		max-w-screen-2xl
		[&_ul]:-mr-3
		mb-8
		px-3
		lg:px-12
		bg-white/50
		backdrop-blur-xl
		shadow-sm
		transition-all
		duration-500
		z-10
	`}
	${(props) =>
		props.reduceHeight ? tw`h-10 [ul]:top-9` : tw`h-14 [ul]:top-10`}
`;

function NavBar() {
	const [offsetY, setOffsetY] = useState(0);
	const [reduceHeight, setHeight] = useState(false);

	const handleScroll = useCallback(() => {
		if (window.scrollY - offsetY >= 10) {
			setHeight(true);
		}

		if (window.scrollY - offsetY <= -10) {
			setHeight(false);
		}

		setOffsetY(window.scrollY);
	}, [offsetY]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	return (
		<NavBarContainer reduceHeight={reduceHeight}>
			<Logo />
			<NavBarMenu />
		</NavBarContainer>
	);
}

export default NavBar;
