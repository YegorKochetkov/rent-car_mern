import React from 'react';
import tw from 'tailwind-styled-components';
import './App.css';

const Button = tw.button`
	shadow
	shadow-gray-400/50
	hover:shadow
	hover:shadow-gray-600
	active:shadow-inner
	active:shadow-gray-600
	p-3
	transition
	bg-slate-100
	rounded-md
`;

function App() {
	return (
		<div className="App">
			<h1 className="text-4xl mb-2 font-bold underline">Hello world!</h1>
			<Button>Super button</Button>
		</div>
	);
}

export default App;
