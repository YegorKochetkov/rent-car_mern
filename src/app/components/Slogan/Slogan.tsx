import React from 'react';
import tw from 'twin.macro';

const Header = tw.h1`
	mb-4
	font-bold
	md:font-extrabold
	lg:font-black
	text-black
	text-2xl
	sm:text-3xl
	md:text-5xl
	xl:text-6xl
	md:leading-snug
	xl:leading-tight
`;

const Description = tw.p`
	text-sm
	md:text-lg
	lg:text-xl
	xl:text-2xl
	max-h-full
	text-gray-800
`;

function Slogan() {
	return (
		<React.Fragment>
			<Header>Rent The Best Quality Car's With Us</Header>
			<Description>
				Always choose the best car from our local stores or order it remotely at
				the best price for you and get the best quality cars for as long as you
				like
			</Description>
		</React.Fragment>
	);
}

export default Slogan;
