import React from 'react';
import tw from 'twin.macro';
import NavBar from 'app/components/navbar/NavBar';

const PageContainer = tw.div`
	flex
	flex-col
	items-center
	w-full
	h-full
	overflow-x-hidden
`;

const Button = tw.button`
	m-1
	rounded-md
	bg-slate-100
	p-3
	shadow
	shadow-gray-400/50
	transition
	hover:shadow
	hover:shadow-gray-600/60
	active:shadow-inner
	active:shadow-gray-600/60
`;

const AccentSpan = tw.span`text-red-600`;

function HomePage() {
	return (
		<PageContainer>
			<NavBar />
			<Button>
				Super button<AccentSpan>text</AccentSpan>
			</Button>
		</PageContainer>
	);
}

export default HomePage;
