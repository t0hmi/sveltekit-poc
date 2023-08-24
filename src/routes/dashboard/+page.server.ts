import { redirect, type Actions, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session) {
		throw redirect(303, '/');
	}

	const { data, error: err } = await locals.sb
		.from('data')
		.select('*')
		.eq('userId', locals.session.user.id);

	return {
		keyvalues: data
	};
};

export const actions = {
	keyvalue: async ({ request, locals: { sb, session } }) => {
		const formData = await request.formData();
		const key = formData.get('key') as string;
		const value = formData.get('value') as string;

		const { data, error: err } = await sb.from('data').insert({
			key,
			value: parseInt(value),
			userId: session?.user.id
		});

		if (err) {
			throw error(500, 'Server error.');
		}
	}
} satisfies Actions;
