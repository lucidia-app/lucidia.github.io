import React from 'react'
import styled from 'styled-components'
import breakpoint from '../components/Breakpoints'
import landingImage from '../assets/images/homescreen/homescreen.webp'
const LandingImage = () => {

	return (
		<Root>
			<Image 
				src={landingImage}
			/>
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	@media only screen and ${breakpoint.device.xs} {
		// width: 740px;
		height: auto;
	}
	@media only screen and ${breakpoint.device.sm} {
		// width: 700px;
		height: auto;
	}
	@media only screen and ${breakpoint.device.lg} {
		// width: 780px;
		// height: auto;
	}
`

const Image = styled.img`
	animation-duration: 2s;
	animation-iteration-count: infinite;
	animation-name: linear-bounce;
	animation-timing-function: linear;

	@keyframes linear-bounce {
		0% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
		100% { transform: translateY(0); }
	}
	@media only screen and ${breakpoint.device.xs} {
		// width: 400px;
		height: auto;
	}
	@media only screen and ${breakpoint.device.sm} {
		// width: auto;
		height: 700px;
	}
	@media only screen and ${breakpoint.device.lg} {
		// width: auto;
		height: 740px;
	}
`

export default LandingImage
