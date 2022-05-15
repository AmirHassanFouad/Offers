export enum FontColor {
	alert = "#dc143c ",
	default = "#000",
}

export enum FontSize {
	large = "1.25rem",
	normal = "1rem",
	small = "0.75rem",
}

export type Color = keyof typeof FontColor;
export type Size = keyof typeof FontSize;
