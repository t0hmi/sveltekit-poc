import { error, redirect, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals: { sb } }) => {
	const { error: err } = await sb.auth.signOut();

	if (err) {
		throw error(500, 'Something went wrong during logout');
	}

	throw redirect(303, '/login');
};
