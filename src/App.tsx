import HomePage from 'app/containers/HomePage';
import React from 'react';
import tw from 'twin.macro';

const AppContainer = tw.div`
	flex
	flex-col
	w-full
	h-full
	text-2xl
	overflow-x-clip
`;

function App() {
	return (
		<AppContainer>
			<HomePage />
		</AppContainer>
	);
}

export default App;
