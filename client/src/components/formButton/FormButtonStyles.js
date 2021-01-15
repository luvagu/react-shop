import styled, { css } from 'styled-components'

const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`

const googleSignInStyles = css`
	background-color: #4258f4;
	color: white;
	border: 1px solid #357ae8;

	&:hover {
    	background-color: #4258f4;
    	color: wheat;
		border: 1px solid black;
	}
`

const invertedStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles
  }
  
  return props.inverted ? invertedStyles : buttonStyles
}

export const FormButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	display: flex;
  	justify-content: center;
  
	${getButtonStyles}
`
