
import React, { useState } from 'react';
import type { Page } from '../App';
import { defaultConfig } from '../constants';
import { CheckIcon } from './icons/CheckIcon';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-navy fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
              <CheckIcon className="w-6 h-6 text-navy" />
            </div>
            <div>
              <p className="font-display text-xl text-white font-semibold">{defaultConfig.psychologist_name}</p>
              <p className="text-xs text-gold">{defaultConfig.crp_number}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavigation('home')} className={`nav-link text-white text-sm font-medium tracking-wide ${currentPage === 'home' ? 'active' : ''}`}>
              INÍCIO
            </button>
            <button onClick={() => handleNavigation('scheduling')} className={`nav-link text-white text-sm font-medium tracking-wide ${currentPage === 'scheduling' ? 'active' : ''}`}>
              AGENDAMENTO E VALORES
            </button>
            <button onClick={() => handleNavigation('articles')} className={`nav-link text-white text-sm font-medium tracking-wide ${currentPage === 'articles' ? 'active' : ''}`}>
              EMBASAMENTO CIENTÍFICO
            </button>
          </div>
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gold/30 pt-4">
            <div className="flex flex-col gap-4">
              <button onClick={() => handleNavigation('home')} className="text-white text-sm font-medium tracking-wide text-left">INÍCIO</button>
              <button onClick={() => handleNavigation('scheduling')} className="text-white text-sm font-medium tracking-wide text-left">AGENDAMENTO E VALORES</button>
              <button onClick={() => handleNavigation('articles')} className="text-white text-sm font-medium tracking-wide text-left">EMBASAMENTO CIENTÍFICO</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;