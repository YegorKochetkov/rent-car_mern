import React from 'react';
import HomePage from './app/containers/HomePage';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import './App.css';

const AppContainer = tw(styled.div``)`
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
