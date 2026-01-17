import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carrossel1 from '@/assets/carrossel1.png';
import carrossel2 from '@/assets/carrossel2.png';
import carrossel3 from '@/assets/carrossel3.png';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Construção com transparência, qualidade e segurança.',
    subtitle: 'Soluções completas para obras e remodelações em geral, atendendo com compromisso e cuidado em cada detalhe.',
    image: carrossel1,
  },
  {
    id: 2,
    title: 'Atendimento personalizado e orçamentos que cabem no teu bolso.',
    subtitle: 'Solicite já o seu orçamento e descomplique a sua obra com a nossa equipa.',
    image: carrossel2,
  },
  {
    id: 3,
    title: 'Construção moderna com equipa especializada.',
    subtitle: 'Transformamos processos tradicionais com soluções inteligentes e mão de obra experiente, garantindo obras mais eficientes e bem executadas.',
    image: carrossel3,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700); // Sincronizado com a duração da transição
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="inicio" className="relative w-full overflow-hidden pt-16 md:pt-0" style={{ height: 'calc(100vh - 4rem)' }}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100 z-10' 
              : 'opacity-0 scale-105 z-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: 'center 40%',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative h-full w-full container mx-auto px-4 flex items-center justify-center md:justify-start">
            <div className={`w-full md:max-w-2xl text-white text-center md:text-left transition-all duration-1000 delay-300 ${
              index === currentSlide 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-xl mx-auto md:mx-0">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 p-2 text-white/40 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} strokeWidth={1.5} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 p-2 text-white/40 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight size={48} strokeWidth={1.5} />
      </button>

      {/* Dots (Indicadores de navegação) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;