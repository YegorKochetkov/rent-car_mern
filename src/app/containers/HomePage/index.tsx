import React from 'react';
import tw from 'tailwind-styled-components';
import { TailwindComponent } from 'tailwind-styled-components/dist/tailwind';
import NavBar from 'app/components/navbar';

const PageContainer: TailwindComponent<any> = tw.div`
	flex
	flex-col
	items-center
	w-full
	h-full
	overflow-x-hidden
`;

const Button: TailwindComponent<any> = tw.button`
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

const AccentSpan: TailwindComponent<any> = tw.span`text-red-400`;

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
