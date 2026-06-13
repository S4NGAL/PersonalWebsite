export const routes = {
  home: "/",
  about: "/about",
  projects: "/projects",
  project: (slug: string) => `/projects/${slug}`,
  blog: "/blog",
  post: (slug: string) => `/blog/${slug}`,
  playground: "/playground",
  uses: "/uses",
} as const;
