declare module "*.mdx" {
  let MDXComponent: (props) => React.ReactNode;
  export default MDXComponent;

  export const metadata: {
    title: string;
    description: string;
    date: string;
    tag: string[];
  };
}
