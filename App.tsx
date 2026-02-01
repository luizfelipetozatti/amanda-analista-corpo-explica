
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SchedulingPage from './components/SchedulingPage';
import ArticlesPage from './components/ArticlesPage';
import { Analytics } from '@vercel/analytics/next';

export type Page = 'home' | 'scheduling' | 'articles';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'scheduling':
        return <SchedulingPage />;
      case 'articles':
        return <ArticlesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
