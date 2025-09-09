import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Video from "./components/Video";
import Testimonials from "./components/Testimonials";
import FaqList from "./components/FaqList"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="p-[32px] md:p-[48px]">
      <Header />
      <Hero />
      <Benefits />
      <Video />
      <Testimonials />
      <FaqList />
      <Footer />
    </div>
  )
}

export default App
