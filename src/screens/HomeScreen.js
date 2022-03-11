import React from "react"
import breakpoint from '../components/Breakpoints'
import styled from "styled-components"
import Header from '../components/Header'
import InfoBlock from '../components/InfoBlock'
import LandingImage from '../components/LandingImage'

const HomeScreen = () => {

	return (
		<Root>
		<HeaderContainer>
		<HeaderStub>
			<Header />
		</HeaderStub>
		</HeaderContainer>
		<BodyContainer>
			<BodyStub>
		<BodyWelcomeContainer>
			<InfoBlock />
		</BodyWelcomeContainer>
		<BodyMobileContainer>
			<LandingImage />
		</BodyMobileContainer>
			</BodyStub>
		</BodyContainer>
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
`

const HeaderContainer = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
`

const HeaderStub = styled.div`
	height: 100%;
	@media only screen and ${breakpoint.device.xs} {
		width: 100%
	}
	@media only screen and ${breakpoint.device.sm} {
		width: 100%
	}
	@media only screen and ${breakpoint.device.lg} {
		width: 1550px; 
	}
`

const BodyContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
`

const BodyStub = styled.div`
	@media only screen and ${breakpoint.device.xs} {
		display: flex;
		flex-direction: column !important;
		width: 100%;
		height: 100%;
	}
	@media only screen and ${breakpoint.device.sm} {
		display: flex;
		flex-direction: row !important;
		width: 100%;
		height: auto;
	}
	@media only screen and ${breakpoint.device.lg} {
		display: flex;
		flex-direction: row !important;
		width: 1550px;
		height: 100%;
		padding-left: 10px;
		padding-right: 10px;
	}
`

const BodyWelcomeContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`

const BodyMobileContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	// align-items: flex-end;
	@media only screen and ${breakpoint.device.xs} {
		// width: 400px;
	}
	@media only screen and ${breakpoint.device.sm} {
		// width: auto;
	}
	@media only screen and ${breakpoint.device.lg} {
		// width: 500px;
	}
`

export default HomeScreen
