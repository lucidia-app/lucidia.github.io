import React from 'react';
import styled from 'styled-components';


const Pill = ({
	title,
	onPress,
}) => {
	return (
		<Button
			onPress={onPress}
		>
			{title}
		</Button>
	)
}

const Button = styled.button`
	height: 40px;
	min-width: 150px;
	background-color: black;
	border: none;
	border-radius: 20px;
	color: white;
	font-family: Sharp-grotesk-medium; 
	padding-left: 15px;
	padding-right: 15px;
	transition: all .2s ease-in-out;
	&:hover {
		transform: scale(1.06);
		cursor: pointer;
	}
`;

export default Pill;
