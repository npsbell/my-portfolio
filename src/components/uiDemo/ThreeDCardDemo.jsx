import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import git_logo from "../../../public/icon/github.svg";
import link_logo from "../../../public/icon/link.svg";
import { projects } from "../../data";

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-20">
      {projects.map((item) => (
        <CardContainer key={item.id} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-black dark:text-white"
            >
              {item.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {item.des}
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <img
                src={item.img}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                loading="lazy"
              />
            </CardItem>
            <div className="flex justify-end items-center mt-5">
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl flex dark:bg-white"
              >
                <a href={item.github} target="_blank">
                  <img src={git_logo} alt="" width={25} />
                </a>
                <a href={item.link} target="_blank">
                  {item.id >= 1 && item.id <= 6 ? (
                    <img src={link_logo} alt="" width={25} />
                  ) : null}
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
