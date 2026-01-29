import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/blog/Header';
import { Footer } from '@/components/blog/Footer';
import { Home } from '@/pages/Home';
import { Posts } from '@/pages/Posts';
import { Tags } from '@/pages/Tags';
import { TagPosts } from '@/pages/TagPosts';
import { BitcoinFAQ } from '@/pages/posts/BitcoinFAQ';
import { BitcoinLightning } from '@/pages/posts/BitcoinLightning';
import { Nostr } from '@/pages/posts/Nostr';
import { LinuxGuide } from '@/pages/posts/LinuxGuide';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/tags/:tag" element={<TagPosts />} />
              <Route path="/posts/bitcoin-faq-interactivo" element={<BitcoinFAQ />} />
              <Route path="/posts/bitcoin-funciona" element={<BitcoinLightning />} />
              <Route path="/posts/herramientas-descentralizadas" element={<Nostr />} />
              <Route path="/posts/primeros-pasos-linux" element={<LinuxGuide />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
