import { fail , redirect } from '@sveltejs/kit';

export const actions = {
	
	async default({request, cookies}) {
		const formData= await request.formData();

		const username = formData.get('username');
		const password = formData.get('password');

		if ( !username || typeof username !== 'string') {
			return fail(400, { 
				username: {
					value: username,
					error: 'username is required' 
				}
			});
		}

		if ( !password || typeof password !== 'string') {
			return fail(400, {
				username: { value: username, error: null },
				password: {
					value: password,
					error: 'password is required'
				}
			})
		}

		if (username !== 'admin' || password !== 'password') {
			return fail(400, {
				username: { value: username, error: null },
				password: { value: password, error: 'invalid username/password' }
			})
		}

		cookies.set('session', 'Euge',  { path: '/' });
		throw redirect(303, '/');
	  }
	};
