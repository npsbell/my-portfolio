import { Button } from "./ui/moving-border";
import { education, workExperience, internship } from "../data";
import SplineAnimation from "./ui/splineAnimation";

const About = () => {
  return (
    <div id="about-me" className="flex flex-col justify-center items-center h-auto w-full p-4 md:p-[5%] mt-[5%] gap-20 text-black dark:text-white">
      <div className='text-4xl font-semibold tracking-wider text-glow text-black dark:text-white'>About me</div>
      {/* -----------------------------------top---------------------------------- */}
      <div className="top flex flex-col md:flex-row w-full justify-center items-center">
        {/* ------------pic------------ */}
        <div className="left w-full flex justify-center items-center md:w-[50%] p-10">
          <img src="../../public/pic.jpeg" alt="me" width={320} className="rounded-full box-glow" />
        </div>

        {/* ---------------timeline-------------- */}
        <div className="right w-full md:w-[50%] self-center md:self-start">
          <div className="edu">
            <div className="text-2xl font-semibold tracking-wider mb-10 text-glow text-center md:text-start">
              EDUCATION
            </div>
            {education.map((item) => (
              <div key={item.id} className="mb-5">
                <div className="flex flex-row sm:ml-20 md:ml-0">
                  <div className="text-sm hidden xl:block">{item.date}</div>
                  <div className="timeline w-[2px] h-auto bg-purple-500 dark:bg-purple-300 mx-5"></div>
                  <div>
                    <div className="mb-3">{item.title}</div>
                    <div className="text-sm block mb-2 xl:hidden">{item.date}</div>
                    <Button
                      duration={5000}
                      borderRadius="1rem"
                      className="p-3 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                      <div className="flex flex-col text-start">
                        <p>{item.des1}</p>
                        <p>{item.des2}</p>
                        <p className="text-purple-500 dark:text-purple-300 mt-2">
                          {item.grade}
                        </p>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* -----------------------------------botton---------------------------------- */}
      <div className="botton flex flex-col md:flex-row w-full">
        <div className="work w-full md:w-[60%]">
          <div className="text-2xl font-semibold tracking-wider mb-10 text-glow text-center md:text-start">
            {" "}
            WORK{" "}
            <span className="text-purple-500 dark:text-purple-300">
              EXPERIENCE
            </span>
          </div>
          {workExperience.map((item) => (
            <div key={item.id} className="mb-5">
              <div className="flex flex-row sm:ml-20 md:ml-0">
                <div className="text-sm hidden xl:block">{item.date}</div>
                <div className="timeline w-[2px] h-auto bg-purple-500 dark:bg-purple-300 mx-5"></div>
                <div>
                <div className="text-sm block mb-2 xl:hidden">{item.date}</div>
                  <Button
                  duration={Math.floor(Math.random() * 20000) + 10000}
                    borderRadius="1rem"
                    className="p-3 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    <div className="flex flex-col text-start">
                      <p>{item.title}</p>
                      <p>{item.des}</p>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {internship.map((item) => (
            <div key={item.id} className="mb-5">
              <div className="flex flex-row sm:ml-20 md:ml-0">
                <div className="text-sm hidden xl:block">{item.date}</div>
                <div className="timeline w-[2px] h-auto bg-purple-500 dark:bg-purple-300 mx-5"></div>
                <div>
                  <div className="mb-3">Internship</div>
                  <div className="text-sm block mb-2 xl:hidden">{item.date}</div>
                  <Button
                  duration={Math.floor(Math.random() * 20000) + 10000}
                    borderRadius="1rem"
                    className="p-3 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    <div className="flex flex-col text-start">
                      <p>{item.title}</p>
                      <p>{item.des}</p>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-[40%] h-[500px] flex justify-center items-center">
            <SplineAnimation />
        </div>
      </div>
    </div>
  );
};

export default About;
