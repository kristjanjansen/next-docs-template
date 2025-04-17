import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-8 text-3xl font-bold text-neutral-500">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-16 text-xl font-semibold text-neutral-500">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 mt-10 text-lg font-medium text-neutral-500">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h3 className="mb-2 mt-10 font-medium text-neutral-500">{children}</h3>
    ),
    pre: ({ children }) => (
      <pre className="mb-8 mt-6 overflow-scroll rounded-lg bg-gray-100 p-4">
        {children}
      </pre>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="underline underline-offset-2 break-all"
        target="_blank"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-outside list-disc space-y-2 pl-5">{children}</ul>
    ),
    blockquote: ({ children }) => (
      <blockquote className="text-neutral-500 border-l-[5px] pl-5 border-neutral-300 leading-relaxed">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
