
type Character ={
	id: number;
	name: string;
	image: string;
	occupation: string;
}

export const load = async ({fetch}) => {

	const response = await fetch(`api/characters`);
	const characters: Character[] = await response.json();

	return { characters } 	
};