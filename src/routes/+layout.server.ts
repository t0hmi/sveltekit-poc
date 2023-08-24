import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import type { LayoutServerLoad } from './$types';
import '$lib/supabase';

export const load: LayoutServerLoad = async (event) => {
	return { session: await getServerSession(event), keyvalues: [] };
};
