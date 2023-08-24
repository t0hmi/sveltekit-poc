import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit/dist/types';
import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			sb: TypedSupabaseClient;
			session: Session | null;
		}
		interface PageData {
			session: import('@supabase/supabase-js').Session | null;
			keyvalues: KeyValue[];
		}
		// interface Error {}
		// interface Platform {}
	}
}

// export {};
export type KeyValue = {
	key: string;
	value: number;
};
