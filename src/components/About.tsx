import { useState, useRef } from 'react';
import { Construction, FileText, Handshake } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import sobreImg from '@/assets/sobre.png';
import sobreImg2 from '@/assets/sobre2.png';

const aboutItems = [
  {
    icon: Construction,
    title: 'Empresa especializada',
    text: 'A TecKnowHow é uma empresa portuguesa, especializada em construção civil e remodelações residenciais, comprometida com a qualidade, organização e inovação tecnológica. Atuamos com foco em clientes particulares, oferecendo soluções completas que aliam planeamento técnico, materiais certificados e uma equipa altamente qualificada. Equipa formada por engenheiros, arquitetos e técnicos qualificados.',
  },
  {
    icon: FileText,
    title: 'Proximidade com o cliente',
    text: 'Desde a fase de orçamento até à entrega da obra, prezamos pela, ',
    highlight: 'transparência, eficiência e proximidade com o cliente.',
    textContinue: ' Cada projeto é tratado de forma única, com acompanhamento personalizado, garantindo segurança e satisfação em todas as etapas da obra.  ',
  },
  {
    icon: Handshake,
    title: 'Fornecedores de confiança',
    text: 'Com uma rede sólida de ',
    highlight: 'subempreiteiros especializados e fornecedores de confiança',
    textContinue: ' entregamos resultados com prazos controlados, orçamentos claros e acabamento profissional. O nosso objetivo é construir mais do que espaços — queremos construir ',
    highlight2: 'relações de confiança e valor duradouro',
  },
];

const images = [
  { src: sobreImg, alt: 'Cozinha moderna' },
  { src: sobreImg2, alt: 'Sala de estar moderna' },
];

const About = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="bg-dark overflow-x-hidden" ref={sectionRef}>
      {/* Header */}
      <div className="pt-8 pb-6 bg-dark">
        <div className="container mx-auto px-4">
          <div className="py-6">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 1 }}
            >
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-2 block">Quem somos</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Sobre a <span className="text-primary">TecKnowHow</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-dark mx-auto mt-4 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-primary" />

      {/* Conteúdo - pb-24 garante margem de respiro no final da página */}
      <div className="py-12 md:py-16 pb-24 md:pb-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* 1. Texto */}
            <div className="space-y-4 md:space-y-6 w-full order-1">
              {aboutItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-card rounded-3xl p-5 md:p-6 shadow-sm border-l-4 border-primary group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Layout responsivo: centralizado no mobile, alinhado à esquerda/vertical no desktop */}
                  <div className="flex flex-col items-center lg:flex-row lg:items-center gap-4 text-center lg:text-left">
                    {/* Fundo do ícone totalmente limpo, igual ao card */}
                    <div className="w-12 h-12 bg-card flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-foreground leading-relaxed text-sm md:text-base text-justify">
                      {item.text}
                      {item.highlight && <span className="text-primary font-bold"> {item.highlight}</span>}
                      {item.textContinue}
                      {item.highlight2 && <span className="text-primary font-bold"> {item.highlight2}</span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 2. Imagens */}
            <motion.div 
              className="relative h-[300px] sm:h-[400px] lg:h-[480px] w-full flex items-center justify-center mt-12 lg:mt-0 order-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {images.map((image, index) => {
                const isActive = activeImage === index;
                const isFirst = index === 0;
                
                return (
                  <motion.div
                    key={index}
                    onClick={() => setActiveImage(index)}
                    onMouseEnter={() => setActiveImage(index)}
                    className="absolute overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                    style={{
                      width: 'min(260px, 65%)', 
                      aspectRatio: '4/5',
                      zIndex: isActive ? 30 : (isFirst ? 10 : 20),
                    }}
                    animate={{
                      x: isFirst ? '-10%' : '10%',
                      y: isFirst ? '-5%' : '5%',
                      rotate: isActive ? 0 : (isFirst ? -4 : 4),
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  >
                    <div className={`absolute inset-0 transition-opacity duration-300 bg-black ${isActive ? 'opacity-0' : 'opacity-10'}`} />
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;