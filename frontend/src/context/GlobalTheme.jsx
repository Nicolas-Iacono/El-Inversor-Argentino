import { useContext, createContext, useState, useEffect } from "react";

const themeGlobalContext = createContext()

export const GlobalTheme = ({children}) =>{

  const [theme,setTheme] = useState('light')
  const [darkMode, setDarkMode] = useState(false)


  useEffect(()=>{
    const storedTheme = localStorage.getItem('theme')
    if(storedTheme) {
      setTheme(storedTheme)
      setDarkMode(storedTheme === "dark")
    }else{
      setTheme('light')
      setDarkMode(false)
    }
  },[])

    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" :"light";
      setTheme(newTheme)
      setDarkMode(newTheme === "dark")
      localStorage.setItem('theme', theme);
      console.log("se esta aprentando")
    }
  return (
    <themeGlobalContext.Provider value={{theme, darkMode ,toggleTheme}}>
      {children}
    </themeGlobalContext.Provider>
  );

};

export const useGlobalTheme =()=>{
  return useContext(themeGlobalContext)
}

