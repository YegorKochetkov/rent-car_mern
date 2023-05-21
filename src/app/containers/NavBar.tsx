import { useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from '../components/Logo/Logo';
import NavBarMenu from '../components/NavBarMenu/NavBarMenu';

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
		z-50
	`}
	${(props) =>
		props.reduceHeight ? tw`h-10 [ul]:top-9` : tw`h-14 [ul]:top-10`}
`;

const scrollThreshold = 5;

function NavBar() {
	const { scrollY } = useScroll();
	const [reduceHeight, setReduceHeight] = useState(false);

	useMotionValueEvent(scrollY, 'change', () => {
		const prev = scrollY.getPrevious();
		const next = scrollY.get();

		if (next - prev > scrollThreshold && reduceHeight === false) {
			setReduceHeight(true);
		}

		if (prev - next > scrollThreshold && reduceHeight === true) {
			setReduceHeight(false);
		}
	});

	return (
		<NavBarContainer reduceHeight={reduceHeight}>
			<Logo />
			<NavBarMenu />
		</NavBarContainer>
	);
}

export default NavBar;
