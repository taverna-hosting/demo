import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Hours from '../src/components/Hours';
import Menus from '../src/components/Menus';
import Reservations from '../src/components/Reservations';

export default function Home() {
  return (
    <div>
      <Header />
      <Hours />
      <Reservations />
      <Menus />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
