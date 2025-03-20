import { Presenta } from "./Components/Pages/Home/Presenta";
import { Header } from "./Components/Layouts/Header/Header";
import { Routes, Route } from "react-router-dom";
import { Skills } from "./Components/Pages/Skills/Skills";
import { Container } from "./Components/Layouts/Container/container";
import { Footer } from "./Components/Layouts/Footer/Footer";
import { Studies } from "./Components/Pages/Studies/Studies";

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>

          <Route path="/" element={<Presenta />} />
          <Route path="/Habilidades" element={<Skills />} />
          <Route path="/Estudios" element={<Studies />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};
