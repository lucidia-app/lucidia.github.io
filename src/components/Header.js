import React from "react"
import styled from 'styled-components'
import breakpoint from '../components/Breakpoints'
import Picture from 'react-picture-webp'
import { picture_config } from '../PictureConfig';

import logo1x from "../assets/images/desktop/logo@1x.png"
import logo2x from "../assets/images/desktop/logo@2x.png"
import logo3x from "../assets/images/desktop/logo@3x.png"

import { Pill } from '../components/button';

const Header = () => {
	return (
		<Root>
			<Logo 
				src={logo1x}
				srcSet={`${logo2x} 2x, ${logo3x} 3x`}
			/>

		<Pill
			title="Join our Mailing List"
			onPress={() => {}}
		/>
		</Root>
	)
}

const Root = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 10px;
	padding-right: 10px;
`

const Logo = styled.img`
	height: 55%;
`

export default Header
