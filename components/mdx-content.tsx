import * as runtime from "react/jsx-runtime";
import Image from "next/image";

const sharedComponents = {
  Image
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType<any>>;
  frontmatter?: Record<string, string | string[]>;
  [key: string]: any;
}

export const MDXContent = ({
  code,
  components,
  frontmatter,
  ...props
}: MDXProps) => {
  const Component = useMDXComponent(code);
  return (
    <Component
      components={{ ...sharedComponents, ...components }}
      {...props}
      frontmatter={frontmatter}
    />
  );
};
