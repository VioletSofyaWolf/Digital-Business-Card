import React from 'React';
import Info from '../src/components/Info';
import About from '../src/components/About';
import Interests from '../src/components/Interests';
import Footer from '../src/components/Footer';

const App = () => {
  return (
    <div class="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
};

export default App;
