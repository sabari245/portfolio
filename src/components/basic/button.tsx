import { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button_cva = cva("border-b-4 border-dashed w-max pb-2", {
  variants: {
    theme: {
      dark: "text-white border-wob-level1",
      light: "text-black border-bow-level1",
    },
    size: {
      sm: "text-lg",
      md: "text-[1.3rem]",
    },
  },
});

interface ButtonProps extends VariantProps<typeof button_cva> {
  text?: string;
  link?: string;
  className?: string;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <a href={props.link ?? "#"} className={props.className}>
      <div
        className={button_cva({
          size: props.size ?? "md",
          theme: props.theme ?? "dark",
        })}
      >
        <div className="flex items-center gap-4">
          {props.text ?? "Contact Me"}
          <span>
            {props.children ?? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            )}
          </span>
        </div>
      </div>
    </a>
  );
}
