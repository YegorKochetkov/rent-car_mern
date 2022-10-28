import React, { useEffect } from 'react';
import tw from 'twin.macro';
import NavBarMenu from '../components/NavBarMenu/NavBarMenu';
import Logo from '../components/Logo/Logo';

const NavBarContainer = tw.menu`
	fixed
	top-0
	flex
	flex-row
	items-center
	justify-between
	w-full
	h-14
	max-w-screen-2xl
	[&_ul]:-mr-3
	mb-8
	widescreen:mb-0
	px-3
	lg:px-12
bg-white/50
	backdrop-blur-xl
	shadow-sm
	transition-all
	duration-500
	z-10
`;

function NavBar() {
	useEffect(() => {
		const navBar = document.getElementById('navbar');
		let scrollPage = 0;

		const handleScroll = () => {
			const mobileMenu = document.getElementById('mobileMenu');

			if (navBar) {
				const prevStyles = navBar.style.height;

				if (prevStyles !== '2.5rem' && window.scrollY - scrollPage > 0) {
					navBar.style.height = '2.5rem';
				}

				if (prevStyles !== '3.5rem' && window.scrollY - scrollPage < 0) {
					navBar.style.height = '3.5rem';
				}
			}

			if (mobileMenu) {
				const prevStyles = mobileMenu.style.top;

				if (prevStyles !== '2.2rem' && window.scrollY - scrollPage > 0) {
					mobileMenu.style.top = '2.2rem';
				}

				if (prevStyles !== '2.5rem' && window.scrollY - scrollPage < 0) {
					mobileMenu.style.top = '2.5rem';
				}
			}

			scrollPage = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<NavBarContainer id="navbar">
			<Logo />
			<NavBarMenu />
		</NavBarContainer>
	);
}

export default NavBar;
