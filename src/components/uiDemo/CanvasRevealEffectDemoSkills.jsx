import { AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { mainSkills, otherSkills } from "../../data";

export function CanvasRevealEffectDemoSkills() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between gap-x-4 gap-y-10 w-full flex-wrap">
        {mainSkills.map((item) => (
          <div key={item.id} className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full sm:w-1/2 md:w-2/5 lg:w-1/5 mx-auto p-5 relative h-20">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <AnimatePresence>
              <div className="h-full w-full absolute inset-0">
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-pink-800 dark:bg-black"
                  colors={[
                    [236, 72, 153],
                    [232, 121, 249],
                  ]}
                  dotSize={2}
                />
              </div>
            </AnimatePresence>
            <div className="relative z-20">
              <div className="text-center transition duration-200 flex items-center justify-between gap-3 w-full">
                <img src={item.img} alt="" className="w-10" loading="lazy"/>
                <p className="text-base">{item.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-xl font-semibold tracking-wider text-glow text-center text-black dark:text-white">Other skills</div>
      <div className="flex items-center justify-between gap-x-4 gap-y-10 w-full flex-wrap">
        {otherSkills.map((item) => (
          <div key={item.id} className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full sm:w-1/2 md:w-2/5 lg:w-1/5 mx-auto p-5 relative h-20">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <AnimatePresence>
              <div className="h-full w-full absolute inset-0">
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-pink-800 dark:bg-black"
                  colors={[
                    [236, 72, 153],
                    [232, 121, 249],
                  ]}
                  dotSize={2}
                />
              </div>
            </AnimatePresence>
            <div className="relative z-20">
              <div className="text-center transition duration-200 w-full flex items-center justify-center gap-3">
                <img src={item.img} alt="" className="w-10" loading="lazy"/>
                <p className="text-base">{item.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
