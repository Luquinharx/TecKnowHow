import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import Services from '@/components/Services';
import About from '@/components/About';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <Services />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
