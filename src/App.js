import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/team/index";
import Invoices from "./scenes/invoices/index";
import Contacts from "./scenes/contacts/index";
// import Bar from "./scenes/charts/Bar";
// import Form from "./scenes/forms/Form";
// import Line from "./scenes/charts/Line";
// import Pie from "./scenes/charts/Pie";
// import FAQ from "./scenes/faq/FAQ";
// import Geography from "./scenes/maps/Geography";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const { colorMode, theme } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              {/*} <Route path="/charts/bar" element={<Bar />} />
              <Route path="/charts/line" element={<Line />} />
              <Route path="/charts/pie" element={<Pie />} />
              <Route path="/forms" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/maps" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
