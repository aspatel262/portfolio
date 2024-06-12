import React from 'react';
import Landing from '../components/Landing.jsx'
import ContactForm from '../components/ContactForm';
import '../App.css'

function Home() {
  return (
    <div id='home'>
      <section id="landing">
        <Landing></Landing>
      </section>
      <section id="">

      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
    
  );
}

export default Home;
