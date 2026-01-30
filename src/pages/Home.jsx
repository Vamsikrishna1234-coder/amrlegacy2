import React from 'react';
import Hero from '../components/herosection.jsx';
import About from '../components/About.jsx';
import Goldentree from '../components/goldentree.jsx';
import Lhighlights from '../components/Lhighlights.jsx';
import Phighlights from '../components/Phighlights.jsx';
import Parallax from '../components/Parallex.jsx';
import Gallery from '../components/Gallery.jsx';
import Masterplan from '../components/Masterplan.jsx';
import Floorplans from '../components/Floorplans.jsx';
import Clubhouse from '../components/Clubhouse.jsx';
import Pspecifications from '../components/Pspecifications.jsx';
import Blogs from '../components/Blogs.jsx';
import '../index.css';

export default function Home() {
  return (
    <>
      <div>
        
        <Hero />
        <About />
        <Goldentree />
        <Lhighlights />
        <Pspecifications />
        <Parallax />
        <Phighlights />
        <Gallery />
        <Masterplan />
        <Clubhouse />
        <Floorplans />
        <Blogs />
        
      </div>
    </>
  );
}
