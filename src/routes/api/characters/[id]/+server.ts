import {env} from '$env/dynamic/private'

const API = env.PRIVATE_BOBS_BURGERS_API;
export const GET = async ({params}) => {
	const response= await fetch(`${API}/characters/${params.id}`);
	return new Response(response.body);
}