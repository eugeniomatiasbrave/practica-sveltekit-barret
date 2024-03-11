
import {env} from '$env/dynamic/private'


type Character ={
	id: number;
	name: string;
	image: string;
	occupation: string;
}

const API = env.PRIVATE_BOBS_BURGERS_API;

export const load = async () => {

	const response = await fetch(`${API}/characters`);
	const characters: Character[] = await response.json();

	return { characters } 	
};