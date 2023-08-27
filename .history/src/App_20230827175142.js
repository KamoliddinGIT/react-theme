import "./App.css";
import { createContext, useState } from "react";

function App() {
  const ThemeContext = createContext(null);
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        Switch to dark theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
