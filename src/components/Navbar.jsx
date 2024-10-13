import { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const Navbar = ({ darkMode, toggleDisplayMode }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ตรวจสอบว่า scrollY มากกว่า 100vh หรือไม่
      if (window.scrollY > window.innerHeight) {
        setShowNavbar(true); // แสดง Navbar
      } else {
        setShowNavbar(false); // ซ่อน Navbar
      }
    };

    // เพิ่ม event listener สำหรับ scroll
    window.addEventListener("scroll", handleScroll);

    // ลบ event listener เมื่อลงจาก component เพื่อป้องกัน memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    {showNavbar && (
        <nav className="fixed top-0 w-full z-50">
          <div className="m-auto w-auto p-2 border-solid border-[1px] border-gray-400 rounded-full absolute top-5 left-1/2 transform -translate-x-1/2 bg-transparent text-neutral-600 dark:text-neutral-50 bg-white dark:bg-slate-900">
            <div className="flex justify-between w-full px-5 gap-5">
              <div className="logo font-extrabold text-xl text-blue-950 dark:text-neutral-50 hidden sm:block">
                <a href="#hero">npsbell.</a>
              </div>
              <ul className="flex gap-3 sm:gap-7">
                <a href="#about-me" className="dark:hover:text-neutral-300 duration-300">About</a>
                <a href="#skills" className="dark:hover:text-neutral-300 duration-300">Skills</a>
                <a href="#projects" className="dark:hover:text-neutral-300 duration-300">Projects</a>
                <a href="#contact" className="dark:hover:text-neutral-300 duration-300">Contact</a>
              </ul>
              <button
                onClick={() => {
                  toggleDisplayMode();
                }}
                className="focus:outline-none"
              >
                {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;