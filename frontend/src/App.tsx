import { MainPage } from "./pages/mainPage/index";
import { GlobalStyle } from "./globalstyles";
import { Logo } from "./components/logo/index";
import GlobalFonts from "./fonts/fonts";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <Logo />
      <MainPage />
    </>
  );
}

export default App;
