import React from "react"
import styled from "styled-components"
import breakpoint from '../components/Breakpoints'
import AppleIcon from '../assets/images/apple-store.svg'


const InfoBlock = () => {

	return (
		<Root>
		<Welcome>
			Car Insurance done Quicker
		</Welcome>
		<Sub>
			Optimise your driving profile for the <u>cheapest</u> insurance premiums.
		</Sub>
		<AppStore>
			<AppleImg src={AppleIcon} />
		</AppStore>
		</Root>
	)
}

const Root = styled.div`
	padding-left: 10px;
	@media only screen and ${breakpoint.device.xs} {
	}
	@media only screen and ${breakpoint.device.sm} {
		max-width: 440px;
	}
	@media only screen and ${breakpoint.device.lg} {
		max-width: 500px;
	}

`

const Welcome = styled.div`
	width: 100%; 
	font-family: Sharp-grotesk-medium; 
	font-weight: bold;
	margin-bottom: 40px;
	@media only screen and ${breakpoint.device.xs} {
	}
	@media only screen and ${breakpoint.device.sm} {
		font-size: 55px;
	}
	@media only screen and ${breakpoint.device.lg} {
		font-size: 65px;	
	}
`;

const Sub = styled.div`
	width: 100%; 
	font-family: Sharp-sans-medium; 
	font-weight: bold;
	margin-bottom: 40px;
	transition: left 2s;
	@media only screen and ${breakpoint.device.xs} {
	}
	@media only screen and ${breakpoint.device.sm} {
		font-size: 20px;
	}
	@media only screen and ${breakpoint.device.lg} {
		font-size: 24px;	
	}
	
`;

const AppStore = styled.div`
	width: 100%;
	display: flex;
`

const AppleImg = styled.img`
	transition: all .2s ease-in-out;
	&:hover {
		transform: scale(1.06);
		cursor: pointer;
	}
`
export default InfoBlock;
