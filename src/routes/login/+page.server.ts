import type { Actions } from '@sveltejs/kit';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, locals: { sb } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { data, error: err } = await sb.auth.signInWithPassword({
			email,
			password
		});

		if (err) {
			throw error(401, 'Sign In failed, user not found');
		}

		throw redirect(303, '/dashboard');
	}
} satisfies Actions;
