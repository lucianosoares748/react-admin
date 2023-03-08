/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from "./scenes/global/Topbar";

import "./App.css";

function App() {
  return (
    // eslint-disable-next-line no-undef
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="content">
            <Topbar />
          </main>
        </div>
        ;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
