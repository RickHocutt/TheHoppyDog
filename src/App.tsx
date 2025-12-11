import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 border-t border-amber-600/20 py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between flex-wrap">
              <div className="w-full mb-8 md:mb-0 md:w-1/2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🐕</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">The Hoppy Dog</h3>
                    <p className="text-amber-400 text-xs">New Hampshire's Premier Indoor Dog Park &amp; Taproom</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Where your four-legged friends can play freely while you enjoy wicked good craft beer and wine. Proudly serving the Granite State!
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/home" className="text-gray-300 hover:text-amber-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 The Hoppy Dog. All rights reserved. | A tail-wagging good time guaranteed! | Proudly serving New Hampshire since 2025
              </p>
              <p className="text-amber-400 text-xs mt-2">
                "Live Free or Die" - and drink wicked good beer with your best friend! 🐕
              </p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
