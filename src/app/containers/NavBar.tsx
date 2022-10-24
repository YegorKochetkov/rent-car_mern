import React, { useEffect } from 'react';
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
	py-3
	[&_ul]:-mr-3
	lg:px-12
bg-white/40
	backdrop-blur-sm
	transition-all
`;

function NavBar() {
	useEffect(() => {
		const navBar = document.getElementById('navbar');
		let scrollPage = 0;

		const handleScroll = () => {
			const mobileMenu = document.getElementById('mobileMenu');

			if (navBar) {
				window.scrollY - scrollPage >= 0
					? (navBar.style.padding = '1px 0.75rem')
					: (navBar.style.padding = '0.75rem');
			}

			if (mobileMenu) {
				window.scrollY - scrollPage >= 0
					? (mobileMenu.style.top = '2rem')
					: (mobileMenu.style.top = '2.5rem');
			}

			scrollPage = window.scrollY;
		};

		window.addEventListener('scroll', () => handleScroll());
		return () => window.removeEventListener('scroll', () => handleScroll());
	}, []);

	return (
		<NavBarContainer id="navbar">
			<Logo />
			<NavBarMenu />
		</NavBarContainer>
	);
}

export default NavBar;
