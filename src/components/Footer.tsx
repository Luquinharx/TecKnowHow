import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-dark-bg text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-24 text-center sm:text-left">
          {/* Empresa */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Empresa</h3>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <p>(+351) 913 503 036 ou 967 550 706</p>
              <p>geral@tecknowhow.pt</p>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Menu</h3>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <a href="/#servicos" className="block text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="/#sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <Link to="/politica-de-privacidade" className="block text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Social</h3>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
          <p>© 2024 TecKnowHow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
