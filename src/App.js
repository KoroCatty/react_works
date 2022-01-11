// ブートストラップを輸入
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
// import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { ParticleBg } from "./components/ParticleBg";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/portfolio";
import { Testimonials} from "./components/Testimonials";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";


// "react-particles-js": "^3.6.0",


// if you put it in a seperate component and import the component into different routes than you will have them in different areas. You can also disable full screen for the particles so it isn't covering the entire screen by Youtube


function App() {
  return (
    <>

      <ParticleBg />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>


  );
}

export default App;
