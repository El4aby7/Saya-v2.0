import { React, useState, useEffect, loadData, formatCurrency } from '../utils.js';
import Layout from '../components/Layout.js';
import { useLanguage } from '../LanguageContext.js';

const HomePage = () => {
    const { t, lang } = useLanguage();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadData().then(data => setProducts(data.products || []));
    }, []);

    const featuredProducts = products.filter(p => p.featured).slice(0, 3);
    const getField = (obj, field) => lang === 'ar' && obj[field + '_ar'] ? obj[field + '_ar'] : obj[field];

    return React.createElement(Layout, { activePage: 'home' },
        React.createElement('div', { className: 'animate-fade-in' },
            // Hero Section
            React.createElement('div', { className: 'relative w-full h-[70vh] overflow-hidden group' },
                React.createElement('div', { className: 'absolute inset-0 bg-black/20 dark:bg-black/40 z-10' }),
                React.createElement('img', {
                    src: 'assets/images/hero.jpg',
                    alt: 'Hero',
                    className: 'w-full h-full object-cover'
                }),
                React.createElement('div', { className: 'absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4' },
                    React.createElement('p', { className: 'text-sm uppercase tracking-[0.3em] mb-4' }, 'PURE & ORGANIC'),
                    React.createElement('h1', { className: 'font-display text-6xl md:text-7xl mb-6' }, t('home.heroTitle')),
                    React.createElement('p', { className: 'text-lg max-w-2xl mb-8' },
                        t('home.heroSubtitle')
                    ),
                    React.createElement('a', {
                        href: 'shop.html',
                        className: 'px-8 py-3 border-2 border-white hover:bg-white hover:text-gray-900 transition-all inline-block'
                    }, t('home.shopNow'))
                )
            ),

            // About Section
            React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-20' },
                React.createElement('div', { className: 'text-center mb-16' },
                    React.createElement('h2', { className: 'font-display text-4xl mb-4' }, t('home.philosophyTitle')),
                    React.createElement('div', { className: 'w-20 h-1 bg-primary mx-auto mb-8' }),
                    React.createElement('p', { className: 'max-w-3xl mx-auto text-lg' },
                        t('home.philosophyText')
                    )
                ),

                // Features
                React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-12 mb-20' },
                    React.createElement('div', { className: 'text-center' },
                        React.createElement('div', { className: 'text-4xl mb-4' }, '🌿'),
                        React.createElement('h3', { className: 'font-display text-xl mb-2' }, '100% Natural'),
                        React.createElement('p', null, t('home.philosophyText')) // Using same text for now or generic, ideally translated
                    ),
                    React.createElement('div', { className: 'text-center' },
                        React.createElement('div', { className: 'text-4xl mb-4' }, '🌍'),
                        React.createElement('h3', { className: 'font-display text-xl mb-2' }, 'Ethically Sourced'),
                        React.createElement('p', null, t('home.philosophyText'))
                    ),
                    React.createElement('div', { className: 'text-center' },
                        React.createElement('div', { className: 'text-4xl mb-4' }, '✨'),
                        React.createElement('h3', { className: 'font-display text-xl mb-2' }, 'Guaranteed Results'),
                        React.createElement('p', null, t('home.philosophyText'))
                    )
                ),

                // Featured Products
                featuredProducts.length > 0 && React.createElement('div', null,
                    React.createElement('h2', { className: 'font-display text-3xl text-center mb-12' }, t('home.featured')),
                    React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
                        ...featuredProducts.map(product =>
                            React.createElement('a', {
                                key: product.id,
                                href: `product-detail.html?id=${product.id}`,
                                className: 'group cursor-pointer block'
                            },
                                React.createElement('div', { className: 'aspect-square bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden mb-4' },
                                    React.createElement('img', {
                                        src: product.image,
                                        alt: getField(product, 'name'),
                                        className: 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                    })
                                ),
                                React.createElement('h3', { className: 'font-display text-xl mb-2' }, getField(product, 'name')),
                                React.createElement('p', { className: 'text-sm text-gray-600 dark:text-gray-400 mb-2' }, getField(product, 'category')),
                                React.createElement('p', { className: 'font-bold' }, formatCurrency(product.price, lang))
                            )
                        )
                    )
                )
            ),

            // Newsletter (simplified to match Footer or reused)
            // ... omitting or keeping simplified generic
        )
    );
};

export default HomePage;
