import type { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    // External links open in a new tab; in-site and mailto links keep the
    // default behavior.
    a: (props: ComponentProps<"a">) =>
      /^https?:\/\//.test(props.href ?? "") ? (
        <a target="_blank" rel="noreferrer noopener" {...props} />
      ) : (
        <a {...props} />
      ),
    ...components,
  };
}
