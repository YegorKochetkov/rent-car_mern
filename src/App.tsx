import React from 'react';
import tw from 'tailwind-styled-components';
import './App.css';

const Button = tw.button`
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

function App() {
	return (
		<div className="App">
			<h1 className="mb-4 text-4xl font-bold underline">Hello world!</h1>
			<Button>Super button</Button>
		</div>
	);
}

export default App;
