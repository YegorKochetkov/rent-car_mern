import React from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import NavBar from 'app/components/navbar';

const PageContainer = tw(styled.div``)`
	flex
	flex-col
	items-center
	w-full
	h-full
	overflow-x-hidden
`;

const Button = tw(styled.button``)`
	p-3
	m-1
	rounded-md
	bg-slate-100
	shadow
	shadow-gray-400/50
	hover:shadow
	hover:shadow-gray-600/60
	active:shadow-inner
	active:shadow-gray-600/60
	transition
`;

const AccentSpan = tw(styled.span``)`text-red-400`;

function HomePage() {
	return (
		<PageContainer>
			<NavBar />
			Hello world!
			<Button>
				Super button<AccentSpan>text</AccentSpan>
			</Button>
		</PageContainer>
	);
}

export default HomePage;
