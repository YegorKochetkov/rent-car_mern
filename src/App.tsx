import React from 'react';
import HomePage from './app/containers/HomePage';
import tw from 'tailwind-styled-components';
import { TailwindComponent } from 'tailwind-styled-components/dist/tailwind';
import './App.css';

const AppContainer: TailwindComponent<any> = tw.div`
	flex
	flex-col
	w-full
	h-full
`;

function App() {
	return (
		<AppContainer>
			<HomePage />
		</AppContainer>
	);
}

export default App;
