import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-dark-bg text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Grid centralizado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center items-start">
          
          {/* Empresa */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Empresa</h3>
            <div className="flex flex-col space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <a href="tel:+351913503036" className="hover:text-primary transition-colors">
                (+351) 913 503 036
              </a>
              <a href="tel:+351967550706" className="hover:text-primary transition-colors">
                967 550 706
              </a>
              <a href="mailto:geral@tecknowhow.pt" className="hover:text-primary transition-colors">
                geral@tecknowhow.pt
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Menu</h3>
            <div className="flex flex-col space-y-1 md:space-y-2 text-xs md:text-sm">
              <a href="/#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="/#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <Link to="/politica-de-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Social</h3>
            <div className="flex flex-col space-y-1 md:space-y-2 text-xs md:text-sm">
              <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
          <p>© 2024 TecKnowHow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;