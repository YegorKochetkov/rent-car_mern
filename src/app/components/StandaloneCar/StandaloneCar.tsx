import React from 'react';
import tw from 'twin.macro';
import BlobImage from '../../../assets/images/blob.svg';
import CarPng from '../../../assets/images/mclaren.png';
import CarWebp from '../../../assets/images/mclaren.webp';

const Wrapper = tw.div`
	relative
`;

const BlobContainer = tw.div`
	absolute
	-left-[2em]
	-top-[4em]
	-z-20
	w-[20em]
	sm:-top-[13em]
	sm:-left-[5em]
	sm:w-[40em]
	[&>img]:w-full
	[&>img]:h-auto
	[&>img]:max-h-max
`;

const CarContainer = tw.picture`
	absolute
	w-[20em]
	sm:w-[28em]
	[&>img]:w-full
	[&>img]:h-auto
	[&>img]:max-h-max
	[&>img]:relative
`;

function McLaren() {
	const imgRef = React.useRef<HTMLImageElement>(null);

	function parallax(event: MouseEvent) {
		let width = window.innerWidth / 2;
		let height = window.innerHeight / 2;

		let moveX = event.clientX;
		let moveY = event.clientY;

		const thresholdX = 0.04;
		const thresholdY = 0.02;

		const shiftX = (moveX - width) * thresholdX;
		const shiftY = (moveY - height) * thresholdY;

		if (imgRef.current) {
			imgRef.current.style.transform =
				'translateX(' + shiftX + 'px) translateY(' + shiftY + 'px)';
		}
	}

	React.useEffect(() => {
		document.addEventListener('mousemove', parallax);

		return () => document.removeEventListener('mousemove', parallax);
	}, []);

	return (
		<Wrapper>
			<BlobContainer>
				<img src={BlobImage} alt="abstract round shapeless background" />
			</BlobContainer>
			<CarContainer>
				<source srcSet={CarWebp} type="image/webp" />
				<img src={CarPng} alt="orange McLaren" ref={imgRef} />
			</CarContainer>
		</Wrapper>
	);
}

export default McLaren;
