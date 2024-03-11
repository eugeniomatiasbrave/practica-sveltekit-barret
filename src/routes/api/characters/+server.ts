
import {env} from '$env/dynamic/private'


const API = env.PRIVATE_BOBS_BURGERS_API;

export const GET = async () => {
	await fetch(`${API}/characters`);
	return new Response('Hola Euge !!');
}