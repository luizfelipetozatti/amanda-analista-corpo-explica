import React from 'react';
import { defaultConfig } from '../constants';
import { CheckIcon } from './icons/CheckIcon';
import { HeartIcon } from './icons/HeartIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { EmailIcon } from './icons/EmailIcon';

const HeroSection: React.FC = () => (
  <section className="bg-navy relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#c9a227" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-pattern)" />
      </svg>
    </div>
    <div className="max-w-6xl mx-auto px-6 py-24 relative">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="decorative-line mx-auto lg:mx-0 mb-6"></div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6">
            {defaultConfig.hero_title}
          </h1>
          <p className="text-lg text-white/80 mb-8 font-light">{defaultConfig.hero_subtitle}</p>
          <a href={defaultConfig.whatsapp_link} target="_blank" rel="noopener noreferrer" className="inline-block bg-gold hover-gold text-navy px-8 py-4 font-semibold tracking-wide transition-all duration-300 shadow-lg">
            AGENDAR ATENDIMENTO
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-beige rounded-full flex items-center justify-center p-2 border-4 border-gold shadow-2xl overflow-hidden">
              <img src="/images/amanda02.jpeg" alt="Amanda Tozatti" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 gold-gradient rounded-full flex items-center justify-center shadow-lg">
              <HeartIcon className="w-12 h-12 text-navy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection: React.FC = () => (
  <section className="bg-offwhite py-20">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold font-medium tracking-widest text-sm mb-2">CONHEÇA</p>
        <h2 className="font-display text-4xl md:text-5xl text-navy font-semibold">Quem Sou</h2>
        <div className="decorative-line mx-auto mt-6"></div>
      </div>
      <div className="flex flex-col gap-12">
        <div>
          <div className="bg-beige p-8 relative">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold -translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold translate-x-4 translate-y-4"></div>
            {defaultConfig.about_text.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-navy/80 leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-navy p-8 text-center card-hover">
            <p className="font-display text-3xl md:text-4xl text-gold font-bold mb-2">Online</p>
            <p className="text-white text-sm uppercase tracking-[0.2em]">e Presencial</p>
          </div>
          <div className="bg-navy p-8 text-center card-hover">
            <p className="font-display text-3xl md:text-4xl text-gold font-bold mb-2">Método</p>
            <p className="text-white text-sm uppercase tracking-[0.2em]">cientificamente comprovado</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const servicesList = [
    "Se sentem presas em padrões repetitivos de sofrimento",
    "Sabem que têm potencial, mas parecem sempre se autossabotar",
    "Precisam destravar a situação financeira e a prosperidade",
    "Vivem cansadas, sobrecarregadas, ansiosas ou travadas emocionalmente",
    "Carregam culpas, medos, conflitos internos ou dificuldade nos relacionamentos",
    "Querem mudar, mas não conseguem sustentar a mudança"
];

const ServicesSection: React.FC = () => (
    <section className="bg-beige py-20">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <p className="text-gold font-medium tracking-widest text-sm mb-2">ESPECIALIDADES</p>
                <h2 className="font-display text-4xl md:text-5xl text-navy font-semibold">O Que Faço</h2>
                <div className="decorative-line mx-auto mt-6"></div>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="bg-offwhite p-8 md:p-12 shadow-lg">
                    <h3 className="font-display text-3xl md:text-4xl text-navy font-semibold mb-2 text-center">Análise Corporal</h3>
                    <p className="text-gold text-center font-semibold text-lg mb-8">Uma ferramenta profunda de autoconhecimento.</p>
                    <div className="mb-10 p-8 bg-navy/5 border-l-4 border-gold">
                        <p className="text-navy text-lg leading-relaxed">Meu trabalho é ajudar você a entender <span className="font-semibold text-gold">por que você é como é</span>, <span className="font-semibold text-gold">por que reage como reage</span> e, principalmente, <span className="font-semibold text-gold">como sair do modo automático que está sabotando sua vida</span>.</p>
                    </div>
                    <p className="text-navy font-semibold text-lg mb-6 text-center">Acompanho pessoas que:</p>
                    <div className="space-y-4">
                        {servicesList.map((item, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                                    <CheckIcon className="w-4 h-4 text-navy" />
                                </div>
                                <p className="text-navy/80 text-base leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const HowItWorksSection: React.FC = () => (
    <section className="bg-offwhite py-20">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <p className="text-gold font-medium tracking-widest text-sm mb-2">PROCESSO</p>
                <h2 className="font-display text-4xl md:text-5xl text-navy font-semibold">Como Funciona?</h2>
                <div className="decorative-line mx-auto mt-6"></div>
            </div>
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Part 1 */}
                <div className="bg-white p-8 md:p-12 shadow-lg">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="text-3xl">🔍</div>
                        <h3 className="font-display text-3xl text-navy font-semibold">A Análise Corporal Funciona</h3>
                    </div>
                    <p className="text-navy/70 text-lg mb-8 leading-relaxed font-light">A análise é feita a partir da leitura da estrutura do seu corpo, que guarda o registro da sua história emocional desde a infância.</p>
                    <p className="text-navy font-semibold text-lg mb-6">Cada traço corporal revela:</p>
                    <div className="space-y-4 mb-10">
                        {["Como você aprendeu a se defender do mundo", "Que tipo de dor emocional você carrega", "Que tipo de amor você busca", "Onde você se desconecta de si mesma", "E onde você repete padrões que te fazem sofrer"].map((item, i) => (
                             <div key={i} className="flex gap-4 items-start pl-4 border-l-4 border-gold">
                                <p className="text-navy/80 text-base leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-navy/5 p-6 border-l-4 border-gold">
                        <p className="text-navy text-lg font-semibold">O corpo nunca mente.</p>
                        <p className="text-navy/80 text-base leading-relaxed mt-3">Ele mostra exatamente as estratégias que você criou para sobreviver emocionalmente — e que hoje podem estar te impedindo de viver plenamente.</p>
                    </div>
                </div>
                {/* Part 2 */}
                <div className="bg-white p-8 md:p-12 shadow-lg">
                     <div className="flex items-start gap-4 mb-6">
                        <div className="text-3xl">❤️‍🩹</div>
                        <h3 className="font-display text-3xl text-navy font-semibold">Por Que É Tão Transformador?</h3>
                    </div>
                    <p className="text-navy/70 text-lg mb-8 leading-relaxed font-light">Porque a maioria das pessoas tenta mudar:</p>
                    <div className="space-y-3 mb-10 pl-4">
                        {["Com força de vontade", "Com frases prontas", "Com métodos genéricos", "Com promessas rápidas"].map((item, i) => (
                             <div key={i} className="flex gap-3 items-start"><span className="text-gold text-xl font-bold">•</span>
                                <p className="text-navy/80 text-base">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-navy p-8 mb-8">
                        <p className="text-white text-lg font-semibold text-center mb-4">Mas ninguém muda o que não entende.</p>
                        <p className="text-white/80 text-center leading-relaxed">A Análise Corporal te dá algo raro:</p>
                    </div>
                     <div className="space-y-3 mb-10">
                        {["Clareza sobre si mesmo", "Compaixão pela sua história", "Direção exata do que precisa ser trabalhado"].map((item, i) => (
                             <div key={i} className="flex gap-4 items-start">
                               <div className="text-2xl text-gold flex-shrink-0">👉</div>
                               <p className="text-navy text-base font-semibold leading-relaxed">{item}</p>
                           </div>
                        ))}
                    </div>
                    <div className="bg-beige p-8 border-t-4 border-b-4 border-gold">
                        <div className="space-y-3 text-center">
                            <p className="text-navy font-semibold text-lg">Você para de se culpar.</p>
                            <p className="text-navy font-semibold text-lg">Para de se sabotar sem perceber.</p>
                            <p className="text-navy font-semibold text-lg">E começa a agir com <span className="text-gold">consciência</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const ContactCTA: React.FC = () => (
    <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-6">Pronto para começar sua jornada de <span className="text-gold">transformação</span>?</h2>
            <p className="text-white/70 mb-8">Entre em contato e agende sua primeira sessão.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={defaultConfig.whatsapp_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gold hover-gold text-navy px-6 py-3 font-semibold transition-all duration-300">
                    <WhatsappIcon className="w-5 h-5" />
                    <span>{defaultConfig.phone_number}</span>
                </a>
                <a href={`mailto:${defaultConfig.email_address}`} className="flex items-center gap-3 border-2 border-gold text-gold hover:bg-gold hover:text-navy px-6 py-3 font-semibold transition-all duration-300">
                    <EmailIcon className="w-5 h-5" />
                    <span>{defaultConfig.email_address}</span>
                </a>
            </div>
        </div>
    </section>
);


const HomePage: React.FC = () => {
  return (
    <div className="fade-in">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <ContactCTA />
    </div>
  );
};

export default HomePage;