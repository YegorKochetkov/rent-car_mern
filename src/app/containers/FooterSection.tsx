import Logo from 'app/components/Logo/Logo';
import React from 'react';
import tw from 'twin.macro';

const Footer = tw.footer`
	grid
	grid-cols-1
	sm:grid-cols-2
	justify-center
	gap-12
	max-w-screen-2xl
	p-6
	lg:px-12
	border-t
	border-red-600
`;

const AboutUsContainer = tw.section`
	flex
	flex-col
	gap-2
	text-base
	[&>a]:text-xl
	[&>a>img]:h-6
	[&_p_span]:text-red-600
`;

const Links = tw.section`
	flex
	flex-col
	text-base
	[&>h3]:text-lg
	[&>h3]:text-black
	[&>h3]:uppercase
	[&>h3]:mb-2
	[&>a]:hover:text-red-600
	[&>a>img]:h-6
	[&_p_span]:text-red-600
`;

const LinksContainer = tw.div`
	grid
	[grid-template-columns:repeat(auto-fit,minmax(12rem,1fr))]
	justify-start
	gap-4
	w-full
	sm:w-auto
`;

const LinksWrapper = tw.ul`
	flex
	flex-wrap
	gap-5
`;

function FooterSection() {
	return (
		<Footer>
			<AboutUsContainer>
				<Logo />
				<p>
					<span>Rent</span>Car<span>.</span> is a Car renting and selling
					company located in many countries across the world which has high
					quality cars and top rated services.
				</p>
			</AboutUsContainer>
			<LinksContainer>
				<Links>
					<h3>Help</h3>
					<LinksWrapper>
						<li>
							<a href="/#">Support</a>
						</li>
						<li>
							<a href="/#">FAQ</a>
						</li>
						<li>
							<a href="/#">Blog</a>
						</li>
					</LinksWrapper>
				</Links>
				<Links>
					<h3>Contacts</h3>
					<LinksWrapper>
						<li>
							<a href="tel:">(800) 555-0123</a>
						</li>
						<li>
							<a href="mailto:">rentcar@company.com</a>
						</li>
					</LinksWrapper>
				</Links>
				<Links>
					<h3>Legal</h3>
					<LinksWrapper>
						<li>
							<a href="/#">Terms & Conditions</a>
						</li>
						<li>
							<a href="/#">Privacy policy</a>
						</li>
					</LinksWrapper>
				</Links>
			</LinksContainer>
		</Footer>
	);
}

export default FooterSection;
