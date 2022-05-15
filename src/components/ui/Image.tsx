import { useState } from "react";

import DefaultImage from "../../images/no_image_available.jpeg";

interface Props {
	src: string;
	width: string;
	height: string;
	style?: React.CSSProperties;
}

export function Image({ src, width, height, style }: Props) {
	const [source, setSrc] = useState(src);

	return (
		<img
			style={{ ...style }}
			width={width}
			height={height}
			src={source || DefaultImage}
			alt="Car"
			onError={() => setSrc(DefaultImage)}
		/>
	);
}
