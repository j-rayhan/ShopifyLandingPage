import React from 'react';
import Brand from './components/Brand';
import Feature from './components/Feature';
import Header from './components/Header';
import Quote from './components/Quote';

function App() {
  return (
    <main>
      {/* Header */}
      <Header />
      {/* Feature */}
      <Feature />
      {/* Brand */}
      <Brand />
      {/* Quote */}
      <Quote />
      {/* Footer */}
      <footer>
        <a href="https://">Terms of Service</a>
        <a href="https://">Privacy Policy</a>
      </footer>
    </main>
  );
}

export default App;
