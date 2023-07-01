import { cva, type VariantProps } from "class-variance-authority";
import { Heading, Content } from "@/components/basic/text";
import Button from "@/components/basic/button";

const projectSection_cva = cva("flex w-screen h-screen bg-white", {
  variants: {
    alignment: {
      left: "flex-row",
      right: "flex-row-reverse",
    },
  },
});

interface ProjectSectionProps extends VariantProps<typeof projectSection_cva> {
  number: string;
  title: string;
  description: string;
  link?: string;
  image: string;
}
export default function ProjectSection(props: ProjectSectionProps) {
  return (
    <section
      className={projectSection_cva({ alignment: props.alignment ?? "left" })}
    >
      <div className="flex items-center justify-center w-1/2 h-screen">
        <div className="flex flex-col items-start w-3/4 gap-20">
          <p className="text-xl text-bow-level3">Project #{props.number}</p>
          <div className="flex flex-col items-start w-3/4 gap-4">
            <Heading>{props.title}</Heading>
            <Content>{props.description}</Content>
          </div>
          <Button theme="light" text="Visit Project" link={props.link} />
        </div>
      </div>
      <div
        className="w-1/2 h-screen bg-center bg-cover"
        style={{
          backgroundImage: `url('${props.image}')`,
        }}
      ></div>
    </section>
  );
}
