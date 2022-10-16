import React from 'react';
import HomePage from './app/containers/HomePage';
import tw from 'twin.macro';
import './App.css';

const AppContainer = tw.div`
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
