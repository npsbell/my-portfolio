import { AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { certificate } from "../../data";

export function CanvasRevealEffectDemoCertificate() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-20">
        {certificate.map((item) => (
          <div key={item.id} className="bg-white dark:bg-black border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-auto py-10 relative h-auto">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <AnimatePresence>
              <div className="h-full w-full absolute inset-0">
                <CanvasRevealEffect
                  containerClassName="bg-emerald-900 dark:bg-black"
                  dotSize={2}
                />
              </div>
            </AnimatePresence>
            <div className="relative z-20">
              <div className="flex items-center justify-center ">
                <img src={item.img} alt="" className="w-[80%] object-contain" loading="lazy"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
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
