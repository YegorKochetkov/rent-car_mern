import React from 'react';
import tw from 'twin.macro';

const AboutUsContainer = tw.div`
	flex
	flex-col
	md:flex-row
	items-center
	justify-between
	w-full
	max-w-screen-2xl
	mb-20
	px-3
	lg:px-12
	bg-white
`;

const CarContainer = tw.picture`
	relative
	flex
	justify-center
	md:right-14
	[&>img]:w-full
	[&>img]:h-auto
`;

const InfoContainer = tw.div`
	flex
	flex-col
	m-auto
	w-[75%]
	sm:min-w-[50%]
	ml-auto
`;

const Title = tw.h2`
	lg:w-10/12
	text-2xl
	md:text-4xl
	text-black
	font-bold
	md:leading-tight
	capitalize
`;

const InfoText = tw.p`
	lg:w-10/12
	mt-4
	text-base
	md:text-lg
	text-gray-600
	font-normal
`;

function AboutUs() {
	return (
		<AboutUsContainer>
			<CarContainer>
				<source
					srcSet={process.env.PUBLIC_URL + '/assets/images/jeep.webp'}
					type="image/webp"
				/>
				<img
					src={process.env.PUBLIC_URL + '/assets/images/jeep.png'}
					alt="Red Jeep Wrangler"
				/>
			</CarContainer>
			<InfoContainer>
				<Title>Feel the best experience with out rent deal</Title>
				<InfoText>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
					voluptatibus fuga eum tempore blanditiis dolore, cupiditate est
					voluptatem incidunt nihil porro architecto in iure natus assumenda
					sunt eligendi dignissimos vero? Sit quisquam quae facere culpa, vel
					eius nisi corrupti ipsum molestiae reiciendis excepturi. Modi qui
					dolorem nisi magni odit sit hic iusto similique distinctio vel, harum
					eligendi quas at quia. Vitae provident quisquam distinctio autem
					dolorum maiores deleniti veritatis placeat perspiciatis iure maxime
					facilis dicta sit laboriosam eveniet quidem, illum corporis temporibus
					animi impedit molestias inventore. Reiciendis fugiat temporibus totam?
				</InfoText>
			</InfoContainer>
		</AboutUsContainer>
	);
}

export default AboutUs;
