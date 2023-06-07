import React from 'react';
import tw from 'twin.macro';

const Wrapper = tw.div`
	relative
`;

const BlobContainer = tw.div`
	absolute
	-top-[8em]
	-left-[3em]
	-z-20
	w-[30em]
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
				<img
					src={process.env.PUBLIC_URL + '/assets/images/blob.svg'}
					alt="abstract round shapeless background"
				/>
			</BlobContainer>
			<CarContainer>
				<source
					srcSet={process.env.PUBLIC_URL + '/assets/images/mclaren.webp'}
					type="image/webp"
				/>
				<img
					src={process.env.PUBLIC_URL + '/assets/images/mclaren.png'}
					alt="orange McLaren"
					ref={imgRef}
				/>
			</CarContainer>
		</Wrapper>
	);
}

export default McLaren;
