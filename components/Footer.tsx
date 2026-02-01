
import React from 'react';
import { defaultConfig } from '../constants';
import { CheckIcon } from './icons/CheckIcon';
import { InstagramIcon } from './icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
              <CheckIcon className="w-6 h-6 text-navy" />
            </div>
            <div>
              <p className="font-display text-lg text-white font-semibold">{defaultConfig.psychologist_name}</p>
              <p className="text-xs text-gold">{defaultConfig.crp_number}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/amandatozatti_analista/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gold/50 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300">
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;