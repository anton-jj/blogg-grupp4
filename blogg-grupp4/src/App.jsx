import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Nav";
import { InputField } from "./components/InputField";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
      <InputField />
    </>
  );
}

export default App;
