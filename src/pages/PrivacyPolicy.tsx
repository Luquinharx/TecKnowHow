import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-dark">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Política de Privacidade
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-dark mx-auto mt-4 rounded-full" />
        </div>
      </section>

      {/* Content Section */}
      <section className="flex-1 py-12 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-sm md:prose-base max-w-none text-foreground">
              <p className="text-foreground leading-relaxed mb-6">
                A TecKnowHow respeita a privacidade dos utilizadores do seu website e compromete-se a proteger os seus dados pessoais, em conformidade com o Regulamento (UE) 2016/679 do Parlamento Europeu e do Conselho, de 27 de abril de 2016 (Regulamento Geral sobre a Proteção de Dados – RGPD) e demais legislação aplicável em Portugal.
              </p>
              <p className="text-foreground leading-relaxed mb-8">
                Esta Política de Privacidade explica como recolhemos, utilizamos, armazenamos e protegemos os seus dados pessoais ao utilizar o nosso website.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Identificação do Responsável pelo Tratamento</h2>
              <p className="text-foreground leading-relaxed mb-2">
                <strong>Empresa:</strong> TecKnowHow, Lda.
              </p>
              <p className="text-foreground leading-relaxed mb-2">
                <strong>Atividade:</strong> Construção civil com foco em tecnologia, projetos e soluções inovadoras
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>E-mail:</strong> geral@tecknowhow.pt
              </p>
              <p className="text-foreground leading-relaxed mb-8">
                A TecKnowHow é a entidade responsável pelo tratamento dos dados pessoais recolhidos através deste website.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Dados Pessoais Recolhidos</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Podemos recolher os seguintes dados pessoais, consoante a interação do utilizador com o website:
              </p>
              <ul className="list-disc list-inside mb-8 text-foreground space-y-1">
                <li>Nome</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Empresa (quando aplicável)</li>
                <li>Conteúdo de mensagens enviadas através de formulários de contacto</li>
                <li>Dados técnicos de navegação (endereço IP, tipo de dispositivo, navegador, páginas visitadas)</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Finalidade do Tratamento dos Dados</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Os dados pessoais recolhidos são utilizados para as seguintes finalidades:
              </p>
              <ul className="list-disc list-inside mb-4 text-foreground space-y-1">
                <li>Responder a pedidos de contacto, orçamentos ou informações</li>
                <li>Prestar e melhorar os nossos serviços</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Melhorar a experiência do utilizador no website</li>
                <li>Comunicações comerciais, quando expressamente autorizadas pelo utilizador</li>
              </ul>
              <p className="text-foreground leading-relaxed mb-8">
                A TecKnowHow apenas trata os dados estritamente necessários para cada finalidade.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Fundamento Legal para o Tratamento</h2>
              <p className="text-foreground leading-relaxed mb-4">
                O tratamento dos dados pessoais baseia-se em:
              </p>
              <ul className="list-disc list-inside mb-8 text-foreground space-y-1">
                <li>Consentimento do titular dos dados</li>
                <li>Execução de diligências pré-contratuais ou contratuais</li>
                <li>Cumprimento de obrigações legais</li>
                <li>Interesse legítimo da TecKnowHow, sempre que não se sobreponham os direitos do titular dos dados</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Conservação dos Dados</h2>
              <p className="text-foreground leading-relaxed mb-8">
                Os dados pessoais serão conservados apenas pelo período necessário para cumprir as finalidades para as quais foram recolhidos, ou pelo tempo exigido por lei. Após esse período, os dados serão eliminados ou anonimizados de forma segura.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Partilha de Dados com Terceiros</h2>
              <p className="text-foreground leading-relaxed mb-4">
                A TecKnowHow não vende, aluga ou partilha os seus dados pessoais com terceiros, exceto quando:
              </p>
              <ul className="list-disc list-inside mb-8 text-foreground space-y-1">
                <li>Tal seja necessário para o cumprimento de obrigações legais</li>
                <li>Seja necessário para a prestação dos serviços (ex.: contabilistas, plataformas técnicas), garantindo sempre o cumprimento do RGPD</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">7. Direitos do Titular dos Dados</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Nos termos do RGPD, o utilizador tem direito a:
              </p>
              <ul className="list-disc list-inside mb-8 text-foreground space-y-1">
                <li>Aceder aos seus dados pessoais</li>
                <li>Retificar dados incorretos ou incompletos</li>
                <li>Solicitar a eliminação dos seus dados ("direito ao esquecimento")</li>
                <li>Limitar ou opor-se ao tratamento dos dados</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Retirar o consentimento a qualquer momento</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">8. Segurança dos Dados</h2>
              <p className="text-foreground leading-relaxed mb-8">
                A TecKnowHow adota medidas técnicas e organizativas adequadas para proteger os dados pessoais contra perda, uso indevido, acesso não autorizado, divulgação ou alteração, utilizando práticas alinhadas com padrões de segurança e tecnologia atual.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">9. Cookies</h2>
              <p className="text-foreground leading-relaxed mb-4">
                O website da TecKnowHow pode utilizar cookies para melhorar a experiência de navegação e analisar o desempenho do site.
              </p>
              <p className="text-foreground leading-relaxed mb-8">
                O utilizador pode configurar o seu navegador para recusar cookies ou alertar quando estes estiverem a ser utilizados.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">10. Alterações à Política de Privacidade</h2>
              <p className="text-foreground leading-relaxed mb-4">
                A TecKnowHow reserva-se o direito de alterar a presente Política de Privacidade a qualquer momento.
              </p>
              <p className="text-foreground leading-relaxed mb-8">
                Recomenda-se a consulta periódica desta página para se manter informado sobre eventuais atualizações.
              </p>

              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">11. Contactos</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Para qualquer questão relacionada com esta Política de Privacidade ou com o tratamento dos seus dados pessoais, pode contactar-nos através de:
              </p>
              <p className="text-foreground leading-relaxed">
                <a href="mailto:geral@tecknowhow.pt" className="text-primary hover:underline font-semibold">
                  geral@tecknowhow.pt
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;