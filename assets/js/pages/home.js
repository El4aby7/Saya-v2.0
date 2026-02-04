import { React, useState, useEffect, loadData } from '../utils.js';
import Layout from '../components/Layout.js';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadData().then(data => setProducts(data.products || []));
    }, []);

    const featuredProducts = products.filter(p => p.featured).slice(0, 3);

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
                    React.createElement('h1', { className: 'font-display text-6xl md:text-7xl mb-6' }, 'Unveiling'),
                    React.createElement('h1', { className: 'font-display text-6xl md:text-7xl italic mb-6' }, 'Natural Radiance'),
                    React.createElement('p', { className: 'text-lg max-w-2xl mb-8' },
                        'Discover the purity of skincare rooted in Maallem, imported directly from the lush landscapes of Morocco and Sudan. Saya brings you raw, authentic beauty solutions.'
                    ),
                    React.createElement('a', {
                        href: 'shop.html',
                        className: 'px-8 py-3 border-2 border-white hover:bg-white hover:text-gray-900 transition-all inline-block'
                    }, 'Explore Collection')
                )
            ),

            // About Section
            React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-20' },
                React.createElement('div', { className: 'text-center mb-16' },
                    React.createElement('h2', { className: 'font-display text-4xl mb-4' }, 'The Essence of Saya'),
                    React.createElement('div', { className: 'w-20 h-1 bg-primary mx-auto mb-8' }),
                    React.createElement('p', { className: 'max-w-3xl mx-auto text-lg' },
                        'Saya is more than just a brand; it is a journey back to the roots of beauty. Born from a desire to bring the most authentic, high quality ingredients from Morocco and Sudan, we offer skin and body care products that are completely inspired from the heart of North and East Africa.'
                    )
                ),

                // Features
                React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-12 mb-20' },
                    React.createElement('div', { className: 'text-center' },
                        React.createElement('div', { className: 'text-4xl mb-4' }, '🌿'),
                        React.createElement('h3', { className: 'font-display text-xl mb-2' }, '100% Natural'),
                        React.createElement('p', null, 'Free from parabens, sulfates, and artificial fragrances. All our ingredients speak for themselves.')
                    ),
                    React.createElement('div', { className: 'text-center' },
                        React.createElement('div', { className: 'text-4xl mb-4' }, '🌍'),
                        React.createElement('h3', { className: 'font-display text-xl mb-2' }, 'Ethically Sourced'),
                        React.createElement('p', null, 'Imported responsibly from Morocco and Sudan, supporting local communities and sustainable craftsmanship.')
                    ),
                    React.createElement('div', { className: 'text-center' },
                        React.createElement('div', { className: 'text-4xl mb-4' }, '✨'),
                        React.createElement('h3', { className: 'font-display text-xl mb-2' }, 'Guaranteed Results'),
                        React.createElement('p', null, 'Time-tested ingredients from over several generations, ensuring a solid and trustworthy product.')
                    )
                ),

                // Featured Products
                featuredProducts.length > 0 && React.createElement('div', null,
                    React.createElement('h2', { className: 'font-display text-3xl text-center mb-12' }, 'Featured Products'),
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
                                        alt: product.name,
                                        className: 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                    })
                                ),
                                React.createElement('h3', { className: 'font-display text-xl mb-2' }, product.name),
                                React.createElement('p', { className: 'text-sm text-gray-600 dark:text-gray-400 mb-2' }, product.category),
                                React.createElement('p', { className: 'font-bold' }, `$${product.price.toFixed(2)}`)
                            )
                        )
                    )
                )
            ),

            // Newsletter
            React.createElement('div', { className: 'bg-primary text-white py-16' },
                React.createElement('div', { className: 'max-w-3xl mx-auto text-center px-4' },
                    React.createElement('h2', { className: 'font-display text-3xl mb-4' }, 'Join the Natural Movement'),
                    React.createElement('p', { className: 'mb-8' }, 'Subscribe to receive newsletters, early access to new releases, and exclusive offers.'),
                    React.createElement('form', {
                        className: 'flex flex-col sm:flex-row gap-4 max-w-md mx-auto',
                        onSubmit: (e) => {
                            e.preventDefault();
                            alert('Thank you for subscribing! (Note: This is a demo - no actual email will be sent)');
                        }
                    },
                        React.createElement('input', {
                            type: 'email',
                            placeholder: 'Enter your email',
                            required: true,
                            className: 'flex-1 px-4 py-3 rounded-sm text-gray-900'
                        }),
                        React.createElement('button', {
                            type: 'submit',
                            className: 'px-8 py-3 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm'
                        }, 'Subscribe')
                    )
                )
            )
        )
    );
};

export default HomePage;
