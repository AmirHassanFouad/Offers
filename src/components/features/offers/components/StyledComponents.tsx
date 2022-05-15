import styled from "styled-components";
import { Color, FontColor, FontSize, Size } from "./types";

export const Wrapper = styled.div`
	height: 90vh;
	overflow-y: auto;
	padding: 0 20px;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	gap: 20px;
	margin-bottom: 20px;
`;

export const Details = styled.div`
	padding: 12px;
`;

export const Row = styled.div`
	margin: 4px 0;
`;

export const Name = styled.h3`
	margin: 0 0 4px 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

interface TextProps {
	block?: boolean;
	bold?: boolean;
	size?: Size;
	color?: Color;
}

export const Text = styled.p<TextProps>`
	margin: 0 4px;
	display: ${({ block }) => (block ? "block" : "inline-block")};
	font-weight: ${({ bold }) => (bold ? "700" : "400")};
	font-size: ${({ size }) => (size === "large" ? "1.3rem" : "1rem")};
	font-size: ${({ size }) => (size ? FontSize[size] : FontSize.normal)};
	color: ${({ color }) => (color ? FontColor[color] : FontColor.default)};
`;
