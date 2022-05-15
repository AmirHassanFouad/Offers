import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% { transform: rotate(0deg); } 
 100% {transform: rotate(360deg); } 
`;

const Circle = styled.div`
	width: 60px;
	height: 60px;
	border: 0;
	border-radius: 50%;
	border-style: solid;
	border-top: 3px solid #3498db;
	animation-name: ${breatheAnimation};
	animation-duration: 1s;
	animation-iteration-count: infinite;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 450px;
`;

export function Spinner() {
	return (
		<Container>
			<Circle />
		</Container>
	);
}
