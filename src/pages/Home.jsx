import React from 'react';
import Landing from '../components/Landing.jsx'
import ContactForm from '../components/ContactForm';
import RightNow from '../components/RightNow.jsx'
import '../App.css'

function Home() {
  return (
    <div id='home' className='home-color'>
      <section id="landing">
        <Landing />
      </section>
      <section id="rightnow">
        <RightNow />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
    
  );
}

export default Home;
