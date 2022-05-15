import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 7vh;
	padding: 9px;
	display: flex;
	justify-content: center;
	position: relative;
`;

const Input = styled.input`
	width: 55%;
	min-height: 35.5px;
	border-radius: 20px;
	border: 0;
	padding: 2px 1.875rem;
	font-size: 1.5rem;
	transition: width 0.5s ease-in-out;

	&:focus {
		width: 65%;
	}
`;

interface Props {
	onChange: (value: string) => void;
}

function WrappedComponent({ onChange }: Props) {
	return (
		<Container>
			<Input
				placeholder="Search..."
				onChange={(e) => onChange(e.target.value)}
			/>
		</Container>
	);
}

export const Search = React.memo(WrappedComponent);
