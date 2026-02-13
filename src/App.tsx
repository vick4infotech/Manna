import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import ScrollToTopButton from './components/ScrollToTopButton';
import ToastProvider from './components/ToastProvider';
import ContactProvider from './components/ContactProvider';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

export default function App() {
  const location = useLocation();

  return (
    <ToastProvider>
      <ContactProvider>
        <div className="min-h-screen bg-mesh">
          <Navbar />
          <ScrollToTopOnRouteChange />

          <main className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
          <ScrollToTopButton />
        </div>
      </ContactProvider>
    </ToastProvider>
  );
}
