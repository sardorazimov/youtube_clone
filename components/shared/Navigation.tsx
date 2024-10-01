"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function Navigation() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="">
          {/* <p>Product Tab</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="">
          {/* <p>Services tab</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="">
          {/* <p>Playground tab</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="">
          {/* <p>Content tab</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="">
          {/* <p>Random tab</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="">
          {/* <p>Random tab</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="">
          {/* <p>Random tab</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="">
          {/* <p>Random tab</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="">
          {/* <p>Random tab</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="">
          {/* <p>Random tab</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="">
          {/* <p>Random tab</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
  ];

  return (
    <div className=" flex [perspective:1000px] b   flex-col max-w-5xl mx-auto w-full  items-start justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <Image
//       src="/linear.webp"
//       alt="dummy image"
//       width="1000"
//       height="1000"
//       className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//     />
//   );
// };