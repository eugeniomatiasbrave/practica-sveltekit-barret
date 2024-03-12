import { redirect } from '@sveltejs/kit';

export const load = async ({locals}) => {

	if (!locals.user) {
		throw redirect(303, '/login');
	}
};


export const actions = {
logout:({cookies})=>{

	cookies.delete(' session', { path: '/'});
	throw redirect(303, '/');
  }	
};