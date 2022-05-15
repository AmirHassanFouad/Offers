import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 450px;
	color: white;
`;

interface Props {
	children: React.ReactNode;
}

export function Empty({ children }: Props) {
	return <Container>{children}</Container>;
}
