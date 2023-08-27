import "./App.css";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        Switch to light theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
