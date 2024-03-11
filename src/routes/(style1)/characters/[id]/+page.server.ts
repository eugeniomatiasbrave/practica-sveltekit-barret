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

export const load = async (event) => {
    const {fetch, params} = event;	
	
	const response = await fetch(`/api/characters/${params.id}`);

	if (!response.ok) {
		const err = await response.json();
		throw error(response.status, err.message);
	}

	const character: DetailedCharacter = await response.json();

	return { character } 	
};