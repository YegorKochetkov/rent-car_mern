import React from 'react';
import tw from 'twin.macro';

const Header = tw.h1`
	font-extrabold
	lg:font-black
	text-black
	text-3xl
	md:text-5xl
	xl:text-6xl
	capitalize
`;

const Description = tw.p`
	text-base
	md:text-lg
	lg:text-xl
	xl:text-2xl
	max-h-full
	text-gray-600
`;

function Slogan() {
	return (
		<React.Fragment>
			<Header>Rent the best quality car's with us</Header>
			<Description>
				Always choose the best car from our local stores or order it remotely at
				the best price for you and get the best quality cars for as long as you
				like
			</Description>
		</React.Fragment>
	);
}

export default Slogan;
