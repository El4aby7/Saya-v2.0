import { React, useState } from '../utils.js';
import { useLanguage } from '../LanguageContext.js';

const Navigation = ({ activePage, darkMode, toggleDarkMode }) => {
    const { lang, toggleLanguage, t } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: t('nav.shop'), href: 'shop.html', pageId: 'shop' },
        { label: t('nav.about'), href: 'about.html', pageId: 'about' },
        { label: t('nav.reviews'), href: 'reviews.html', pageId: 'reviews' },
        { label: t('nav.contact'), href: 'contact.html', pageId: 'contact' }
    ];

    const isActive = (pageId) => activePage === pageId;

    return React.createElement('nav', {
        className: 'sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700'
    },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
            React.createElement('div', { className: 'flex justify-between items-center h-20' },
                // Mobile menu button
                React.createElement('button', {
                    className: 'md:hidden p-2 text-stone-600 dark:text-stone-300',
                    onClick: () => setMobileMenuOpen(!mobileMenuOpen)
                }, '☰'),

                // Logo
                React.createElement('a', {
                    className: 'flex-shrink-0 cursor-pointer',
                    href: 'index.html'
                },
                    React.createElement('h1', {
                        className: 'text-2xl font-display font-bold'
                    }, 'Saya')
                ),

                // Desktop Navigation
                React.createElement('div', { className: 'hidden md:flex space-x-8 rtl:space-x-reverse' },
                    ...navItems.map(item =>
                        React.createElement('a', {
                            key: item.pageId,
                            href: item.href,
                            className: `text-sm uppercase tracking-widest hover:text-primary transition-colors ${isActive(item.pageId) ? 'text-primary font-bold' : ''}`
                        }, item.label)
                    )
                ),

                // Actions (Lang + Dark Mode)
                React.createElement('div', { className: 'flex items-center space-x-4 rtl:space-x-reverse' },
                     React.createElement('button', {
                        onClick: toggleLanguage,
                        className: 'p-2 hover:text-primary transition-colors text-sm font-bold uppercase'
                    }, lang === 'en' ? 'AR' : 'EN'),
                    React.createElement('button', {
                        onClick: toggleDarkMode,
                        className: 'p-2 hover:text-primary transition-colors'
                    }, darkMode ? '☀️' : '🌙')
                )
            ),

            // Mobile menu
            mobileMenuOpen && React.createElement('div', {
                className: 'md:hidden pb-4'
            },
                ...navItems.map(item =>
                    React.createElement('a', {
                        key: item.pageId,
                        href: item.href,
                        className: `block w-full text-start py-2 px-4 hover:bg-surface-light dark:hover:bg-surface-dark ${isActive(item.pageId) ? 'text-primary font-bold' : ''}`
                    }, item.label)
                )
            )
        )
    );
};

export default Navigation;
