import "./App.css";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button
        onClick={() => {
          setTheme("light");
        }}
      >
        Switch to light theme
      </Button>
    </ThemeContext.Provider>
  );
}

export default App;
