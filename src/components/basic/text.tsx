import { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const heading_cva = cva("text-[3rem] font-serif ", {
  variants: {
    theme: {
      dark: "text-white",
      light: "text-black",
    },
  },
});

const main_heading_cva = cva(
  "font-serif text-[5.5rem] mt-3 font-bold tracking-wider ",
  {
    variants: {
      theme: {
        dark: "text-white",
        light: "text-black",
      },
    },
  }
);

const content_cva = cva("text-[1.5rem] ", {
  variants: {
    theme: {
      dark: "text-wob-level2",
      light: "text-bow-level2",
    },
  },
});

interface MainHeadingProps extends VariantProps<typeof main_heading_cva> {
  className?: string;
}
export function MainHeading(props: PropsWithChildren<MainHeadingProps>) {
  return (
    <h1
      className={main_heading_cva({
        theme: props.theme ?? "dark",
        className: props.className ?? "",
      })}
    >
      {props.children}
      <span className="text-primary">.</span>
    </h1>
  );
}

interface HeadingProps extends VariantProps<typeof heading_cva> {}
export function Heading(props: PropsWithChildren<HeadingProps>) {
  return (
    <h2 className={heading_cva({ theme: props.theme ?? "light" })}>
      {props.children}
    </h2>
  );
}

interface ContentProps extends VariantProps<typeof content_cva> {}
export function Content(props: PropsWithChildren<ContentProps>) {
  return (
    <p className={content_cva({ theme: props.theme ?? "light" })}>
      {props.children}
    </p>
  );
}
