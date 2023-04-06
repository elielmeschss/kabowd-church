import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { GlobalStyle } from "./Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./assets/Styles/default";
import { Navbar } from "./assets/Components/Navbar";

export default function Routing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
