import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env['NEXT_PUBLIC_SUPABASE_URL'] ?? '',
  process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ?? ''
);

// export const getActiveProductsWithPrices = async (): Promise<ProductWithPrice[]> => {
//   const { data, error } = await supabase
//     .from('products')
//     .select('*, prices(*)')
//     .eq('active', true)
//     .eq('prices.active', true)
//     .order('metadata->index')
//     .order('unit_amount', { foreignTable: 'prices' });

//   if (error) {
//     console.log(error.message);
//     throw error;
//   }

//   return data || [];
// };

// export const updateUserName = async (user: User, name: string) => {
//   await supabase
//     .from<UserDetails>('users')
//     .update({
//       userNa: name,
//     })
//     .eq('id', user.id);
// };
