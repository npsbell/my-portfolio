import Home from "./page/Home";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import "ldrs/jellyTriangle";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    //useState ตรวจสอบว่าในlocalstring userเคยเลือกโหมดไว้หรือไม่
    const saveMode = localStorage.getItem("displayMode");
    return saveMode ? saveMode === "dark" : true; //ดูว่าsaveModeที่เลือกใช่darkมั้ย
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      //if true
      localStorage.setItem("displayMade", "dark"); //จะบันทึกdark modeลงlocalstring
    } else {
      //if not
      localStorage.setItem("displayMade", "light"); //จะบันทึกlight modeลงlocalstring if มาเปิดใหม่มันจะจำว่า user เปิดโหมดไหนไว้
    }
  }, [darkMode]);

  const toggleDisplayMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); //เมื่อโหลดเสร็จให้preloading เป็น false
    }, 2000); //2วินาที
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <l-jelly-triangle
            size="30"
            speed="1.75"
            color="black"
          ></l-jelly-triangle>
        </div>
      ) : (
        <div className={`${darkMode ? "dark" : ""}`}>
          <div className="relative w-full bg-zinc-50 dark:bg-zinc-900 ">
            <Navbar toggleDisplayMode={toggleDisplayMode} darkMode={darkMode} />
            <Home />
          </div>
        </div>
      )}
    </>
  );
}

export default App;