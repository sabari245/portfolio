"use client";

import { Heading, Content } from "@/components/basic/text";
import Button from "@/components/basic/button";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export default function ArticleSection() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    amount: 0.5,
    // once: true,
  });

  useEffect(() => {
    if (isInView) {
      animate("h2", { opacity: 1 }, { duration: 1, delay: 0 });
      animate("p", { opacity: 1 }, { duration: 1, delay: 0.2 });
      animate("a", { opacity: 1 }, { duration: 1, delay: 0.4 });
    }
  }, [isInView]);

  return (
    <section
      className="relative z-30 flex items-end justify-end w-screen h-screen bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508780709619-79562169bc64')",
      }}
    >
      <div className="relative flex flex-col items-center justify-center w-3/5 bg-white h-4/6">
        <div className="w-3/4">
          <div className="flex gap-8" ref={scope}>
            <div>
              <Heading className="opacity-0">Check out my articles</Heading>
            </div>
            <div className="flex flex-col gap-10">
              <Content className="opacity-0">
                I love writing blogs and sharing the latest and interesting
                things I find online. feel free to check out them on medium
              </Content>
              <Button
                theme="light"
                text="Open Articles"
                link="#"
                className="opacity-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
