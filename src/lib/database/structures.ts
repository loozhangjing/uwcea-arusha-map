export type Structure = {
	name: string,
	description: string
}

type Structures = {
	[key: string]: Structure
}

export const STRUCTURES: Structures = {
	RECEPTION: {
		name: "Reception",
		description: "[placeholder]"
	},
	LIBRARY: {
		name: "Library",
		description: "[placeholder]"
	}
}
