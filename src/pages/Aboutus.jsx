import Header from '../components/header.jsx';
import Aboutus from '../components/Abouthero.jsx';
import WhyChooseUs from '../components/Whychooseus.jsx';
import Ourvision from '../components/Ourvision.jsx';
import CoreValues from '../components/Corevalues.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Milestones from '../components/Milestones.jsx';
import Footer from '../components/Footer.jsx';
import '../index.css';

export default function Aboutuspage() {
  return (
    <>
      <div>
        <Aboutus />

        <WhyChooseUs />

        <Ourvision />

        <CoreValues />

        <Testimonials />

        <Milestones />
      </div>
    </>
  );
}
