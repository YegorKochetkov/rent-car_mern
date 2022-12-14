import React from 'react';
import tw from 'twin.macro';
import BlobImage from '../../../assets/images/blob.svg';
import Car from '../../../assets/images/mclaren-orange-big.png';

const Wrapper = tw.div`
	relative
`;

const BlobContainer = tw.div`
	absolute
	-rotate-12
	-left-[2em]
	-top-[4em]
	w-[20em]
	sm:-top-[13em]
	sm:-left-[5em]
	sm:w-[40em]
	[&>img]:w-full
	[&>img]:h-auto
	[&>img]:max-h-max
`;

const CarContainer = tw.div`
	absolute
	w-[20em]
	sm:w-[28em]
	[&>img]:w-full
	[&>img]:h-auto
	[&>img]:max-h-max
`;

function McLaren() {
	return (
		<Wrapper>
			<BlobContainer>
				<img src={BlobImage} alt="abstract round shapeless background" />
			</BlobContainer>
			<CarContainer>
				<img src={Car} alt="orange McLaren" />
			</CarContainer>
		</Wrapper>
	);
}

export default McLaren;
