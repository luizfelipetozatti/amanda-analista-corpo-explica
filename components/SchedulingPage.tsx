
import React from 'react';
import { services, defaultConfig } from '../constants';
import { CheckIcon } from './icons/CheckIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';

type ServiceCardProps = typeof services[number];

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, duration, price, whatsappMessage, originalPrice, limitedOffer, comingSoon }) => {
    const whatsappUrl = `${defaultConfig.whatsapp_link}?text=${encodeURIComponent(whatsappMessage)}`;
    return (
        <div className="bg-white shadow-lg p-8 md:p-10 card-hover border-l-4 border-gold">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl text-navy font-semibold mb-3">{title}</h3>
                    <p className="text-navy/70 text-base leading-relaxed mb-4">{description}</p>
                    <div className="flex flex-col gap-2 text-sm text-navy/60">
                        {duration && (
                            <div className="flex items-center gap-2">
                                <CheckIcon className="w-4 h-4 text-gold" />
                                <span><strong>Duração:</strong> {duration}</span>
                            </div>
                        )}
                        {price && (
                            <div className="flex items-center gap-2">
                                <CheckIcon className="w-4 h-4 text-gold" />
                                <span>
                                    <strong>Valor:</strong>{' '}
                                    {originalPrice ? (
                                        <>
                                            de <span className="line-through text-rose-300 mr-2">{originalPrice}</span>
                                            por <span className="font-semibold text-emerald-400">{price}</span>
                                        </>
                                    ) : (
                                        price
                                    )}
                                </span>
                            </div>
                        )}
                        {limitedOffer && (
                            <span className="uppercase text-xs tracking-widest text-gold font-semibold">
                                por tempo limitado
                            </span>
                        )}
                        {comingSoon && (
                            <span className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest text-navy bg-gold/90 px-3 py-1 mt-2 self-start rounded-full shadow-sm">
                                Disponível em breve
                            </span>
                        )}
                    </div>
                </div>
                {comingSoon ? (
                    <div className="bg-navy/5 text-navy px-6 py-3 font-semibold tracking-wide whitespace-nowrap h-fit border border-dashed border-gold">
                        Em preparação
                    </div>
                ) : (
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-gold hover-gold text-navy px-8 py-4 font-semibold tracking-wide transition-all duration-300 whitespace-nowrap h-fit">
                        AGENDAR
                    </a>
                )}
            </div>
        </div>
    );
};

const SchedulingPage: React.FC = () => {
    return (
        <div className="fade-in">
            <section className="bg-navy py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-gold font-medium tracking-widest text-sm mb-2">AGENDAMENTO E VALORES</p>
                    <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">Pacotes de Atendimento</h1>
                    <div className="decorative-line mx-auto mt-6"></div>
                </div>
            </section>
            <section className="bg-offwhite py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="space-y-6">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                    <div className="mt-16 bg-beige p-8 md:p-12 text-center">
                        <p className="font-display text-2xl text-navy font-semibold mb-4">Pronto para começar sua transformação?</p>
                        <p className="text-navy/70 mb-8">Entre em contato e escolha o pacote que melhor se adequa ao seu momento.</p>
                        
                        <div className="bg-white/50 border-l-4 border-gold p-4 mb-8 max-w-lg mx-auto text-left">
                            <p className="text-navy text-sm font-medium">
                                <strong>Para sua comodidade:</strong> o pagamento pode ser parcelado em até <strong>10x no cartão de crédito</strong> (taxas da operação a consultar).
                            </p>
                        </div>

                        <a href={defaultConfig.whatsapp_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-navy hover:bg-navy/90 text-white px-8 py-4 font-semibold tracking-wide transition-all duration-300">
                            <WhatsappIcon className="w-5 h-5" />
                            <span>CONVERSAR NO WHATSAPP</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SchedulingPage;