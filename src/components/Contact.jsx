import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils";

const Contact = () => {
  return (
    <div id="contact" className="h-96 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg text-black dark:text-white p-[5%]">
      <div className="absolute inset-0 w-full h-full bg-zinc-50 dark:bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="text-xl font-extrabold text-blue-950 dark:text-neutral-50 z-20 text-glow">
        npsbell.
      </div>
      <h1 className={cn("text-sm sm:text-xl md:text-2xl lg:text-4xl relative z-20 my-5")}>
        Thank you for visiting my Personal portfolio website!
      </h1>
      <p className="text-2xl font-medium text-center my-2 relative z-20">
        Contact
      </p>
      <div className="flex justify-center items-start md:items-center flex-col md:flex-row flex-wrap z-20 gap-5">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-full">
            <img src="/icon/email.svg" alt="" width={20} />
          </div>
          <p>napasorn.tsp@gmail.com</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-full">
            <img src="/icon/phone.svg" alt="" width={20} />
          </div>
          <p>099-392-3268</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-full">
            <img src="/icon/github.svg" alt="" width={20} />
          </div>
          <a href="https://github.com/npsbell" target="_blank">https://github.com/npsbell</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-full">
            <img src="/icon/address.svg" alt="" width={20} />
          </div>
          <p>Chiang Mai, THAILAND 50300</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
