import { useRef } from 'react';
import { 
  ClipboardList, 
  Wrench, 
  Bath, 
  Paintbrush, 
  Snowflake, 
  Zap, 
  Wifi,
  HardHat,
  Cctv,
  Construction
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const services = [
  { icon: Construction, name: 'Visita técnica' },
  { icon: Wrench, name: 'Remodelações completas' },
  { icon: Bath, name: 'Casas de banho' },
  { icon: Paintbrush, name: 'Pinturas e acabamentos' },
  { icon: Snowflake, name: 'Avac' },
  { icon: Zap, name: 'Eletricidade' },
  { icon: Wifi, name: 'Domótica' },
  { icon: Cctv, name: 'Segurança' },
];

// Animação de vibração/bounce ao aparecer
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.08,
      duration: 0.8,
      type: "spring" as const,
      stiffness: 150,
      damping: 8,
    }
  })
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px" });

  return (
    <section id="servicos" className="pt-8 pb-20 bg-dark relative overflow-hidden" ref={sectionRef}>
      {/* Efeito de pontos de luz */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-2 block">O que fazemos</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-dark mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        <div className="flex justify-center px-4">
          <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-6 items-stretch">
            {/* Pedir orçamento - card grande */}
            <a
              href="https://wa.me/351913503036"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto"
            >
              <motion.div
                className="flex flex-col items-center justify-center gap-4 md:gap-6 p-6 md:p-10 bg-gradient-to-br from-primary to-orange-dark shimmer-effect relative overflow-hidden rounded-2xl h-full cursor-pointer min-h-[140px] md:min-h-auto md:w-[200px] lg:w-[220px]"
                custom={0}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl flex items-center justify-center transition-all duration-300 bg-primary/40">
                  <ClipboardList className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                <span className="text-sm md:text-lg font-semibold text-center text-white">
                  Pedido de orçamento
                </span>
              </motion.div>
            </a>
            
            {/* Grid responsivo - mobile 2x4, tablet 4x2, desktop 4x2 */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 p-4 md:p-6 bg-card rounded-2xl shadow-lg cursor-pointer h-full min-h-[120px] md:min-h-[150px]"
                  custom={index + 1}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)"
                  }}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center transition-all duration-300 bg-card">
                    <service.icon className="w-6 h-6 md:w-10 md:h-10 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-center text-foreground leading-tight line-clamp-2">
                    {service.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
