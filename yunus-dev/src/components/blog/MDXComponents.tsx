import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-serif text-4xl text-text-primary mt-10 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-serif text-3xl text-text-primary mt-10 mb-3 pb-2 border-b border-border-subtle">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif text-2xl text-text-primary mt-8 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="font-sans font-medium text-text-secondary leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
    >
      {children}
    </Link>
  ),
  code: ({ children }) => (
    <code className="font-mono text-sm bg-bg-surface border border-border-subtle px-1.5 py-0.5 rounded text-text-primary">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-bg-surface border border-border-subtle rounded-card p-4 overflow-x-auto text-sm font-mono text-text-primary my-6">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent pl-4 my-6 text-text-muted font-sans font-medium italic">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside font-sans font-medium text-text-secondary space-y-1 mb-4 pl-1">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside font-sans font-medium text-text-secondary space-y-1 mb-4 pl-1">
      {children}
    </ol>
  ),
  hr: () => <hr className="border-border-subtle my-10" />,
};
