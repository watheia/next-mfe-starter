
const env = {
  
  get supabase_url() : string {
    return process.env['NEXT_PUBLIC_SUPABASE_URL'] ?? 'noop'
  },

  get public_key(): string {
    return process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ?? 'noop'
  },

  routes: {
    get gatekeeper(): string {
      return new URL(process.env['URL'] 
        ?? process.env['VERCEL_URL'] 
        ?? 'http://localhost:4200').href
    },
    get home(): string {
      return new URL(process.env['HOME_URL'] ?? 'http://localhost:4210/home').href
    },
    get blog(): string {
      return new URL(process.env['BLOG_URL'] ?? 'http://localhost:4220/home').href
    },
     get catalog(): string {
      return new URL(process.env['CATALOG_URL'] ?? 'http://localhost:4230/home').href
    },
  }
  
}

export default env;