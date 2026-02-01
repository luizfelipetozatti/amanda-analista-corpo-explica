
import React from 'react';
import { articles, defaultConfig } from '../constants';
import { LinkIcon } from './icons/LinkIcon';

const ArticleLink: React.FC<{ title: string; url: string }> = ({ title, url }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow-lg p-6 card-hover group border-l-4 border-gold transition-all duration-300 hover:border-navy"
        >
            <div className="flex justify-between items-center">
                <h3 className="font-display text-lg md:text-xl text-navy font-semibold group-hover:text-gold transition-colors duration-300 pr-4">
                    {title}
                </h3>
                <LinkIcon className="w-6 h-6 text-navy/40 group-hover:text-gold transition-colors duration-300 flex-shrink-0" />
            </div>
        </a>
    );
};

const ArticlesPage: React.FC = () => {
    return (
        <div className="fade-in">
            <section className="bg-navy py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-gold font-medium tracking-widest text-sm mb-2">CONHECIMENTO</p>
                    <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">Embasamento Científico</h1>
                    <div className="decorative-line mx-auto mt-6"></div>
                </div>
            </section>
            <section className="bg-offwhite py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-6">
                        {articles.map((article, index) => (
                            <ArticleLink key={index} {...article} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArticlesPage;