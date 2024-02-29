
import { useEffect, useState, useCallback } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];

  const onWondowsMatch = useCallback(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [darkQuery.matches, element.classList]);

  onWondowsMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWondowsMatch();
        break;
    }
  }, [theme, element.classList, onWondowsMatch]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  return (
    <div className="dark:text-gray-100 dark:bg-gray-900 duration-100 min-h-screen ">
      <NavBar />
      <div className="fixed bottom-5 right-10 duration-100 dark:bg-gray-800 bg-gray-100 rounded ">
        {options?.map((opt) => (
          <button
            key={opt.text}
            onClick={() => setTheme(opt.text)}
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
              theme === opt.text && "text-light-blue-700"
            } `}
          >
            <ion-icon name={opt.icon}></ion-icon>
          </button>
        ))}
      </div>
     <Hero/>
    </div>
  );
}

export default App;
