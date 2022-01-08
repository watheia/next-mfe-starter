const env = {
  get supabase_url(): string {
    return (
      process.env['NEXT_PUBLIC_SUPABASE_URL'] ?? 'https://cckvvwirlqntaxpvdqhx.supabase.co'
    );
  },

  get public_key(): string {
    //note this is a public token for read-only access. Ok to leak secret in source control.
    return (
      process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ??
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDU0NzQ3MywiZXhwIjoxOTU2MTIzNDczfQ.TdxqbxdSEMIgWIpshMYZc_eeI3jE9eJCmepUL9OOMqM'
    );
  },

  get jwt_secret(): string {
    return (
      process.env['JWT_SECRET'] ??
      'eAwf6CRu2tWxvNP6wRPZgWqruDMxmYGEbnTTLLjxhPJEKXAnCxcfuUQYJxXyM4yW'
    );
  },

  get cookie_name(): string {
    return process.env['COOKIE_NAME'] ?? 'watheia.mfe.api.session';
  },

  get url(): string {
    return new URL(
      process.env['URL'] ?? process.env['VERCEL_URL'] ?? 'http://localhost:4200'
    ).href;
  },
  get home_url(): string {
    return new URL(process.env['HOME_URL'] ?? 'http://localhost:4210/home').href;
  },
  get blog_url(): string {
    return new URL(process.env['BLOG_URL'] ?? 'http://localhost:4220/home').href;
  },
  get catalog_url(): string {
    return new URL(process.env['CATALOG_URL'] ?? 'http://localhost:4230/home').href;
  },
};

export default env;
