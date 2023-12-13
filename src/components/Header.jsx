import { useContext, useEffect } from "react";
import logo from "./../assets/logo.jpg";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillMoonStarsFill, BsFillCloudSunFill } from "react-icons/bs";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    console.log("theme context provider", theme);
  });
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div className="flex items-center w-full p-2 mx-5 rounded-full bg-slate-200">
        <BiSearchAlt />
        <input
          type="text"
          className="px-2 bg-transparent outline-none"
          placeholder="Search Games"
        />
      </div>
      <div>
        {theme == "light" ? (
          <BsFillMoonStarsFill
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <BsFillCloudSunFill
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
