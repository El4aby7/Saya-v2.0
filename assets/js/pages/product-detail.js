import { React, useState, useEffect, loadData, formatCurrency } from '../utils.js';
import Layout from '../components/Layout.js';
import { useLanguage } from '../LanguageContext.js';

const ProductDetailPage = () => {
    const { t, lang } = useLanguage();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const getField = (obj, field) => lang === 'ar' && obj[field + '_ar'] ? obj[field + '_ar'] : obj[field];

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        loadData().then(data => {
            const found = data.products.find(p => p.id === id);
            setProduct(found);
            setLoading(false);
        });
    }, []);

    if (loading) return React.createElement(Layout, {}, React.createElement('div', { className: 'text-center py-20' }, 'Loading...'));

    if (!product) {
        return React.createElement(Layout, {},
            React.createElement('div', { className: 'text-center py-20' },
                React.createElement('p', null, t('product.outOfStock')), // Using outOfStock or generic 'Not found'
                React.createElement('a', {
                    href: 'shop.html',
                    className: 'mt-4 px-6 py-2 bg-primary text-white rounded-lg inline-block'
                }, t('nav.shop'))
            )
        );
    }

    return React.createElement(Layout, { activePage: 'shop' },
        React.createElement('div', { className: 'animate-fade-in min-h-screen' },
            React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-12' },
                React.createElement('a', {
                    href: 'shop.html',
                    className: 'mb-8 text-primary hover:underline inline-block ltr:mr-2 rtl:ml-2'
                }, lang === 'ar' ? `→ ${t('nav.shop')}` : `← ${t('nav.shop')}`),

                React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-12' },
                    // Image
                    React.createElement('div', { className: 'aspect-square bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden' },
                        React.createElement('img', {
                            src: product.image,
                            alt: getField(product, 'name'),
                            className: 'w-full h-full object-cover'
                        })
                    ),

                    // Details
                    React.createElement('div', null,
                        React.createElement('div', { className: 'mb-4' },
                            React.createElement('p', { className: 'text-sm text-gray-600 dark:text-gray-400 mb-2' }, getField(product, 'category')),
                            React.createElement('h1', { className: 'font-display text-4xl mb-4' }, getField(product, 'name')),
                            React.createElement('p', { className: 'text-2xl font-bold text-primary mb-6' }, formatCurrency(product.price, lang))
                        ),

                        React.createElement('div', { className: 'mb-6' },
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, t('product.description')),
                            React.createElement('p', { className: 'text-gray-700 dark:text-gray-300' }, getField(product, 'description'))
                        ),

                        getField(product, 'ingredients') && React.createElement('div', { className: 'mb-6' },
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, t('product.ingredients')),
                            React.createElement('div', { className: 'flex flex-wrap gap-2' },
                                ...getField(product, 'ingredients').map((ing, i) =>
                                    React.createElement('span', {
                                        key: i,
                                        className: 'px-3 py-1 bg-surface-light dark:bg-surface-dark rounded-full text-sm'
                                    }, ing)
                                )
                            )
                        ),

                        getField(product, 'benefits') && React.createElement('div', { className: 'mb-6' },
                            React.createElement('h3', { className: 'font-display text-xl mb-2' }, t('product.benefits')),
                            React.createElement('p', { className: 'text-gray-700 dark:text-gray-300' }, getField(product, 'benefits'))
                        ),

                        React.createElement('div', { className: 'flex items-center gap-4 mb-6' },
                            product.inStock ?
                                React.createElement('span', { className: 'text-green-600' }, '✓ ' + (lang === 'ar' ? 'متوفر' : 'In Stock')) : // Quick translation or hardcoded
                                React.createElement('span', { className: 'text-red-600' }, t('product.outOfStock'))
                        ),

                        React.createElement('button', {
                            className: 'w-full md:w-auto px-8 py-3 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg',
                            onClick: () => alert('Shopping cart coming soon! (Demo mode)')
                        }, t('product.addToCart'))
                    )
                )
            )
        )
    );
};

export default ProductDetailPage;
