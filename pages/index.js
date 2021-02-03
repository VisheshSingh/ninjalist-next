import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi soluta
        eos sed architecto dolorem possimus voluptatum, tenetur beatae
        asperiores exercitationem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe aliquam
        quia impedit iure non amet excepturi aperiam voluptatum vero? Tenetur
        magni nulla commodi provident soluta unde tempora expedita hic alias?
      </p>
      <Link href='/ninjas'>Ninja List</Link>
      <Footer />
    </div>
  );
}
