import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="mb-0 pt-12 font-medium" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="mt-8 mb-3 font-medium text-2xl" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="mt-8 mb-3 font-medium text-xl" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="font-medium text-lg" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-muted-foreground leading-snug" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className="list-decimal space-y-2 pl-5 text-muted-foreground"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc space-y-1 pl-5 text-muted-foreground" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800";
    if (href?.startsWith("/")) {
      return (
        <Link className={className} href={href} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a className={className} href={href} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        className={className}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-2 border-input border-l pl-4 text-muted-foreground"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
