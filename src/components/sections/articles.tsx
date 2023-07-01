import { Heading, Content } from "@/components/basic/text";
import Button from "@/components/basic/button";

export default function ArticleSection() {
  return (
    <section
      className="flex items-end justify-end w-screen h-screen bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508780709619-79562169bc64')",
      }}
    >
      <div className="relative flex flex-col items-center justify-center w-3/5 bg-white h-4/6">
        <div className="w-3/4">
          <div className="flex gap-8">
            <Heading>Check out my articles</Heading>
            <div className="flex flex-col gap-10">
              <Content>
                I love writing blogs and sharing the latest and interesting
                things I find online. feel free to check out them on medium
              </Content>
              <Button theme="light" text="Open Articles" link="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
