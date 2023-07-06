import { Heading, MainHeading, Content } from "@/components/basic/text";
import Button from "@/components/basic/button";
import { PropsWithChildren } from "react";

interface InfoSectionProps {}
export default function InfoSection(
  props: PropsWithChildren<InfoSectionProps>
) {
  return (
    <section className="relative z-30 flex w-screen h-screen">
      <div className="flex justify-center w-1/2 bg-black">
        <div className="flex flex-col w-4/6 mt-10 gap-14">
          <MainHeading className="text-[4.25rem]" theme="dark">
            Additional Information
          </MainHeading>
          <div className="flex flex-col w-4/6 gap-4">
            <Heading theme="dark">Resume</Heading>
            <Content theme="dark">
              My resume contains much detailed information about me. kindly,
              download it from the below link
            </Content>
          </div>
          <div>
            <Button theme="dark" text="Download">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-white">{props.children}</div>
    </section>
  );
}
