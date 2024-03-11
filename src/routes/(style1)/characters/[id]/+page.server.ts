import {error} from '@sveltejs/kit';

type DetailedCharacter ={
	id: number;
	name: string;
	image: string;
	gender: string;
    hairColor: string;
	occupation: string;
	firstEpisode: string;
    voicedBy: string;
    url: string;
	wikiUrl: string;
	relatives: { name: string }[];
}

const API = 'https://svelte.fun/api/bobs-burgers';

export const load = async ({fetch, params}) => {
    const { id } = params;
	const response = await fetch(`${API}/characters/${id}`);

	if (!response.ok) {
		const err = await response.json();
		throw error(response.status, err.message);
	}

	const character: DetailedCharacter = await response.json();

	return { character } 	
};