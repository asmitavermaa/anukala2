import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import ArtworkDetail from './components/ArtworkDetail';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <header className="fixed w-full z-50 bg-white">
          <nav className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:text-gray-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
              <div className="flex-1 flex justify-center">
                <h1 className="text-2xl font-serif text-black tracking-widest">ANUKALA</h1>
              </div>
              <div className="w-6"> {/* Empty div for spacing */} </div>
            </div>
          </nav>

          {/* Full-screen menu */}
          <div className={`fixed inset-0 bg-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
              <a href="/" className="text-black hover:text-gray-600 tracking-widest" onClick={() => setIsMenuOpen(false)}>HOME</a>
              <a href="/gallery" className="text-black hover:text-gray-600 tracking-widest" onClick={() => setIsMenuOpen(false)}>GALLERY</a>
              <a href="/about" className="text-black hover:text-gray-600 tracking-widest" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
              <a href="/contact" className="text-black hover:text-gray-600 tracking-widest" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
            </div>
          </div>
        </header>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <div className="hero-section">
                <img
                  src="/images/16991886_1659952850974124_4876334191455146129_o.jpg"
                  alt="Hero Art"
                  className="hero-image"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <h2 className="text-5xl font-serif text-white">Welcome to Anukala</h2>
                </div>
              </div>
            } />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/painting/:id" element={<ArtworkDetail />} />
            <Route path="/about" element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl mb-8 tracking-wider">ABOUT US</h2>
                <p className="text-lg leading-relaxed">Discover the finest collection of contemporary art at Anukala.</p>
              </div>
            } />
            <Route path="/contact" element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl mb-8 tracking-wider">CONTACT</h2>
                <form className="max-w-lg">
                  <div className="space-y-6">
                    <input type="text" placeholder="NAME" className="w-full p-2 border-b border-black focus:outline-none" />
                    <input type="email" placeholder="EMAIL" className="w-full p-2 border-b border-black focus:outline-none" />
                    <textarea placeholder="MESSAGE" className="w-full p-2 border-b border-black focus:outline-none" rows="4" />
                    <button type="submit" className="w-full bg-black text-white py-3 hover:bg-gray-900 transition-colors">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            } />
          </Routes>
        </main>

        <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm uppercase tracking-wider">
                © 2024 ANUKALA
              </div>
              <div className="flex space-x-8">
                <a href="#" className="text-black hover:text-gray-600 text-sm uppercase tracking-wider transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-black hover:text-gray-600 text-sm uppercase tracking-wider transition-colors">
                  Terms
                </a>
                <a href="#" className="text-black hover:text-gray-600 text-sm uppercase tracking-wider transition-colors">
                  Help
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;