import { Heading, MainHeading, Content } from "@/components/basic/text";
import Button from "@/components/basic/button";

export default function InfoSection() {
  return (
    <section className="flex w-screen h-screen">
      <div className="flex justify-center w-1/2 bg-black">
        <div className="flex flex-col w-4/6 mt-10 gap-14">
          <MainHeading className="text-[4.5rem]" theme="dark">
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
            <Button theme="dark" text="Download" />
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-white"></div>
    </section>
  );
}
