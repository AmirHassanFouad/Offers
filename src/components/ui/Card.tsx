import styled from "styled-components";

const Container = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	background-color: white;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
	}
`;

interface Props {
	style?: React.CSSProperties;
	children: React.ReactNode;
}

export function Card({ style, children }: Props) {
	return <Container style={{ ...style }}>{children}</Container>;
}
